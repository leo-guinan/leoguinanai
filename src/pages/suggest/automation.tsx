import React, { Suspense } from "react"
import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import SuggestAnAutomation from "../../suggest/components/SuggestAnAutomation"

const Automation: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight py-4">
            Don&apos;t know what to automate? Let us help!
          </h2>
          <Suspense fallback="Loading...">
            <SuggestAnAutomation />
          </Suspense>
          <div className="w-full content-center py-4">
            <button
              type="button"
              className="rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <a href="mailto:helpme@leoguinan.ai">Need more help?</a>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Automation
