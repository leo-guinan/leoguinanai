import { resolver } from "@blitzjs/rpc"
import { AddPodcastRecommendation } from "../../auth/validations"

export default resolver.pipe(
  resolver.zod(AddPodcastRecommendation),
  async ({ name, link, description, recommendation }, ctx) => {
    const podcastLookupUrl = process.env.API_URL + "/api/leo/add-to-collection/"
    const results = await fetch(podcastLookupUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Api-Key ${process.env.API_KEY}`,
      },
      body: JSON.stringify({
        collection: "podcast_recs",
        item: name,
        link,
        description,
        recommendation,
      }),
    })

    const data = await results.json()
    return { status: data.status }
  }
)
