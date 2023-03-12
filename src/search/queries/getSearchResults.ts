import { Ctx } from "blitz"
import db from "db"

interface GetSearchResults {
  query: string
}
export default async function getSearchResults({ query }: GetSearchResults, { session }: Ctx) {
  // const results = {
  //   searchInformation: {
  //     formattedTotalResults: "0",
  //     formattedSearchTime: "0",
  //   },
  //   items: [
  //     {
  //       link: "https://www.google.com",
  //       title: "Google",
  //       snippet: "Google",
  //       formattedUrl: "https://www.google.com",
  //     }
  //   ],
  // }

  const podcastLookupUrl = process.env.API_URL + "/api/leo/search/"
  const results = await fetch(podcastLookupUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Api-Key ${process.env.API_KEY}`,
    },
    body: JSON.stringify({
      search_term: query,
    }),
  })

  const data = await results.json()
  console.log(data)

  return data
}
