import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

// 보여 주기용 더미 데이터 — 실제 내용으로 교체 예정
const profile = {
  name: "김영탁",
  bio: "경제적 자유를 꿈꾸는 남자",
  imageSrc: "/profile-placeholder.svg",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "Blog", url: "https://example.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 py-12 sm:py-16">
      <ProfileHeader {...profile} />
      <ul className="mt-10 flex flex-col gap-6">
        {links.map((link) => (
          <li key={link.title}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
