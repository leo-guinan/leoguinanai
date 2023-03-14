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
}
