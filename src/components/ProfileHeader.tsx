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
        width={144}
        height={144}
        priority
        className="h-36 w-36 rounded-full border border-black/10 object-cover dark:border-white/15"
      />
      <h1 className="mt-5 text-xl font-semibold">{name}</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
