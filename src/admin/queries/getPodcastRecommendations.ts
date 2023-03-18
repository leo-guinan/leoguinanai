import db from "../../../db"
import { Ctx } from "blitz"

export default async function getPodcastRecommendations(_input: {}, ctx: Ctx) {
  ctx.session.$authorize()
  const publicData = ctx.session.$publicData

  if (!publicData.userId) return []
  const user = await db.user.findFirst({
    where: { id: publicData.userId },
  })
  if (!user) return []

  const podcastLookupUrl = process.env.API_URL + "/api/leo/get-collection/"
  const results = await fetch(podcastLookupUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Api-Key ${process.env.API_KEY}`,
    },
    body: JSON.stringify({
      collection: "podcast_recs",
    }),
  })

  const data = await results.json()
  console.log(data)
  if (!data.response.items) return []
  const items = data.response.items.map((item) => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      link: item.link,
      recommendation: item.recommendation,
    }
  })

  return items

  // Can do any processing, fetching from other APIs, etc
}
