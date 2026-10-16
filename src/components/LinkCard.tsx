type LinkCardProps = {
  title: string;
  url: string;
  emoji?: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, emoji, count, onClick }: LinkCardProps) {
  // mailto: 링크는 새 탭 없이 메일 앱을 바로 연다
  const isExternal = !url.startsWith("mailto:");

  return (
    <a
      href={url}
      onClick={onClick}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      className="relative flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/70 bg-white/45 px-16 py-4 text-[15px] font-medium text-slate-700 shadow-[0_4px_16px_-10px_rgba(46,44,51,0.12)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_8px_20px_-10px_rgba(46,44,51,0.16)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:shadow-none dark:hover:bg-white/10"
    >
      {emoji && <span aria-hidden="true">{emoji}</span>}
      {title}
      {/* 제목은 가운데에 두고, 클릭 수는 오른쪽 끝에 작게 */}
      <span className="absolute right-5 text-xs font-normal tabular-nums text-slate-400 dark:text-slate-500">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
