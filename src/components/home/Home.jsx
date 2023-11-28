import React from "react"
// import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import FAQ from "./FAQ/Faq"
import Price from "./price/Price"
import DomainSearch from "./DomainSearch/DomainSearch"
// import Recent from "./recent/Recent"
// import Team from "./team/Team"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      {/* <Recent /> */}
      {/* <Awards /> */}
      {/* <Location />
      <Team /> */}
      {/* <DomainSearch/> */}
      <Price />
      <FAQ/>
    </>
  )
}

export default Home
