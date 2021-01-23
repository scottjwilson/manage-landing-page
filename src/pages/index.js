import React from "react"
import { Layout } from "../layout"
import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { CTA } from "../components/CTA"
import { Reviews } from "../components/Reviews"
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Reviews />
      <CTA />
    </Layout>
  )
}

export default IndexPage
