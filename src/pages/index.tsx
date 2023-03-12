import { Suspense } from "react"
import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import Search from "../core/components/Search"

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="md:flex md:items-center md:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  What can I help you with?
                </h2>
              </div>
            </div>
            <Suspense fallback="Loading...">
              <Search />
            </Suspense>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
