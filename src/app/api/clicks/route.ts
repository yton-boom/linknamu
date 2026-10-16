import { connection } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { links } from "@/lib/links";

// 모든 링크의 클릭 수를 { [id]: count } 형태로 한 번에 돌려준다
export async function GET() {
  await connection(); // 항상 요청 시점의 최신 값을 읽는다

  const clicks = await getClicksCollection();
  const docs = await clicks.find({ _id: { $in: links.map((link) => link.id) } }).toArray();

  const counts: Record<string, number> = Object.fromEntries(links.map((link) => [link.id, 0]));
  for (const doc of docs) counts[doc._id] = doc.count;

  return Response.json(counts);
}
