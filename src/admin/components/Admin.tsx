import { Suspense } from "react"
import PodcastRecommendations from "./PodcastRecommendations"
import Facts from "./Facts"
import { useCurrentUser } from "../../users/hooks/useCurrentUser"

const Admin = () => {
  const currentUser = useCurrentUser()

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {currentUser && currentUser.role === "admin" && (
          <>
            <h1>This is an admin page</h1>
            <div>
              <Suspense fallback={<div>Loading...</div>}>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="px-4 py-5 sm:px-6">
                    <div className="sm:flex-auto">
                      <h1 className="text-base font-semibold leading-6 text-gray-900">
                        Podcast Recommendations
                      </h1>
                      <p className="mt-2 text-sm text-gray-700">
                        A list of all the podcasts you recommend in your account.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:p-6">
                    <PodcastRecommendations />
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="px-4 py-5 sm:px-6">
                    <div className="sm:flex-auto">
                      <h1 className="text-base font-semibold leading-6 text-gray-900">Facts</h1>
                      <p className="mt-2 text-sm text-gray-700">A list of the facts about you</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:p-6">
                    <Facts />
                  </div>
                </div>
              </Suspense>
            </div>
          </>
        )}
      </Suspense>
      {(!currentUser || currentUser.role !== "admin") && (
        <>
          <h1>You are not an admin</h1>
        </>
      )}
    </>
  )
}

export default Admin
