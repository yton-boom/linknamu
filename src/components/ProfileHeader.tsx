import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({ name, bio, imageSrc }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={imageSrc}
        alt={`${name} 프로필 사진`}
        width={128}
        height={128}
        priority
        className="h-28 w-28 rounded-full object-cover ring-4 ring-white/80 shadow-[0_14px_32px_-12px_rgba(46,44,51,0.4)] sm:h-32 sm:w-32 dark:ring-white/10 dark:shadow-[0_14px_32px_-12px_rgba(0,0,0,0.7)]"
      />
      <h1 className="mt-6 text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-100">
        {name}
      </h1>
      <p className="mt-2 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">{bio}</p>
    </header>
  );
}
