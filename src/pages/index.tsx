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
