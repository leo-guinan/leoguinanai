import { resolver } from "@blitzjs/rpc"
import { AddFact } from "../../auth/validations"

export default resolver.pipe(resolver.zod(AddFact), async ({ question, answer }, ctx) => {
  const podcastLookupUrl = process.env.API_URL + "/api/leo/add-fact/"
  const results = await fetch(podcastLookupUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Api-Key ${process.env.API_KEY}`,
    },
    body: JSON.stringify({
      facts: "leo_facts",
      question,
      answer,
    }),
  })

  const data = await results.json()
  return { status: data.status }
})
