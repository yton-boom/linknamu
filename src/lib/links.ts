export type Link = {
  // 클릭 수를 저장할 때 쓰는 고유 키 — 한 번 정하면 바꾸지 않는다
  id: string;
  title: string;
  url: string;
  emoji?: string;
};

export const links: Link[] = [
  { id: "email", title: "이메일", url: "mailto:kyt3959@naver.com", emoji: "📧" },
  { id: "instagram", title: "인스타그램", url: "https://www.instagram.com/iamtag.k/", emoji: "📸" },
  { id: "blog", title: "블로그", url: "https://blog.naver.com/kyt3959", emoji: "✍️" },
  { id: "github", title: "깃허브", url: "https://github.com/yton-boom", emoji: "👍" },
];

export const linkIds = new Set(links.map((link) => link.id));
