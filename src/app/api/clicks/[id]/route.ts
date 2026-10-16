import { getClicksCollection } from "@/lib/mongodb";
import { linkIds } from "@/lib/links";

// 해당 링크의 클릭 수를 1 늘리고 새 값을 돌려준다
export async function POST(_req: Request, ctx: RouteContext<"/api/clicks/[id]">) {
  const { id } = await ctx.params;
  if (!linkIds.has(id)) {
    return Response.json({ error: "알 수 없는 링크입니다" }, { status: 404 });
  }

  const clicks = await getClicksCollection();
  const doc = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return Response.json({ id, count: doc?.count ?? 1 });
}
