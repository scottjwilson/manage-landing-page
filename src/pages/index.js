import React from "react"
import { Layout } from "../layout"
import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { CTA } from "../components/CTA"
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <CTA />
    </Layout>
  )
}

export default IndexPage
