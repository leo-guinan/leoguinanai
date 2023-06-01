import Head from "next/head"
import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
import Header from "../components/Header"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "leoguinan.ai"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Suspense fallback="Loading...">{children}</Suspense>
    </>
  )
}

export default Layout
