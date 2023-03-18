import { useRouter } from "next/router"
import Layout from "src/core/layouts/Layout"
import { SignupForm } from "src/auth/components/SignupForm"
import { BlitzPage, Routes } from "@blitzjs/next"
import { Suspense } from "react"

const SignupPageOld: BlitzPage = () => {
  const router = useRouter()

  return (
    <Layout title="Sign Up">
      <Suspense fallback="Loading...">
        <SignupForm onSuccess={() => router.push(Routes.Home())} />
      </Suspense>
    </Layout>
  )
}

export default SignupPageOld
