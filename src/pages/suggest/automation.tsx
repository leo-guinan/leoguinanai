import React, { Suspense } from "react"
import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import SuggestAnAutomation from "../../suggest/components/SuggestAnAutomation"

const Automation: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto max-w-3xl">
          <Suspense fallback="Loading...">
            <SuggestAnAutomation />
          </Suspense>
        </div>
      </div>
    </Layout>
  )
}

export default Automation
