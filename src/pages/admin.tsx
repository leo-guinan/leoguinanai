import { BlitzPage } from "@blitzjs/next"
import PodcastRecommendations from "../admin/components/PodcastRecommendations"
import { Suspense } from "react"
import Facts from "../admin/components/Facts"
import { useCurrentUser } from "../users/hooks/useCurrentUser"
import Admin from "../admin/components/Admin"

const AdminPage: BlitzPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Admin />
    </Suspense>
  )
}

export default AdminPage
