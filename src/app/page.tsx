import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links } from "@/lib/links";

// 보여 주기용 더미 데이터 — 실제 내용으로 교체 예정
const profile = {
  name: "김영탁",
  bio: "온라인 MD : 경제적 자유를 꿈꿔요",
  imageSrc: "/new_profile.jpg",
};

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full max-w-md flex-1 flex-col px-6 pt-16 pb-20 sm:pt-24">
      {/* 글래스 카드 뒤로 비치는 은은한 빛 번짐 */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-200/45 blur-3xl dark:bg-sky-900/20" />
        <div className="absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl dark:bg-indigo-900/15" />
        <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/15" />
      </div>
      <ProfileHeader {...profile} />
      <LinkList links={links} />
    </main>
  );
}
