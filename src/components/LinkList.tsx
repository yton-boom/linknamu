"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { Link } from "@/lib/links";

type LinkListProps = {
  links: Link[];
};

export default function LinkList({ links }: LinkListProps) {
  // 서버 값을 받기 전에는 모두 0회로 보여 준다
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Record<string, number>) => {
        // 응답보다 먼저 눌린 클릭(prev)은 서버 값에 더해 화면에서 사라지지 않게 한다
        setCounts((prev) => {
          const next = { ...data };
          for (const [id, n] of Object.entries(prev)) next[id] = (next[id] ?? 0) + n;
          return next;
        });
      })
      .catch((err) => console.error("클릭 수를 불러오지 못했습니다", err));
  }, []);

  function handleClick(id: string) {
    // 화면에는 바로 +1 반영하고, 서버 기록은 페이지를 벗어나도 끝까지 전송되게 keepalive로 보낸다
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST", keepalive: true }).catch((err) =>
      console.error("클릭 수를 기록하지 못했습니다", err),
    );
  }

  return (
    <ul className="mt-12 flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard {...link} count={counts[link.id] ?? 0} onClick={() => handleClick(link.id)} />
        </li>
      ))}
    </ul>
  );
}
