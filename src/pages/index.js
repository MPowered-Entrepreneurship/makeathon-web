import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import makebg from "../images/make-bg.mp4"
import About from "../components/about"
import FAQ from "../components/faq"
import Contact from "../components/contact"
import {MakeIconUnfilled} from "../components/makeIconUnfilled"

const IndexPage = () => (
  <React.Fragment>
    <Navbar />
    <div className="max-h-screen grid grid-cols-1">
      <video
        className="object-fill z-0 relative col-start-1 row-start-1 filter brightness-75"
        src={makebg}
        autoPlay loop playsInline muted>
      </video>
      <div className="col-start-1 row-start-1 w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center flex-col">
          <MakeIconUnfilled classInfo="z-0 filter drop-shadow-xl" fill="text-yellow-101"/>
          <p className="z-0 tracking-wider md:tracking-wider font-bold text-2xl md:text-5xl text-white filter drop-shadow-xl">M A K E A T H O N</p>
          <p className="z-0 tracking-wider md:tracking-wider font-bold md:text-4xl text-white md:pt-4 xl:mb-40 filter drop-shadow-xl">FEBRUARY 4-6, 2022</p>
          {/* Trueno Semibold */}
        </div>
      </div>
      <About />
      <FAQ />
      <Contact />
      <div className='w-full items-center flex'>
       <p className='mx-auto text-gray-400'>© 2021 MPowered Entrepreneurship, All Rights Reserved. MPowered Entrepreneurship is a non-profit organization.</p>
     </div>
    </div>

  </React.Fragment>

  // <Layout>
  //   <Navbar />∂
  //   <Seo title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <StaticImage
  //     src="../images/gatsby-astronaut.png"
  //     width={300}
  //     quality={95}
  //     formats={["AUTO", "WEBP", "AVIF"]}
  //     alt="A Gatsby astronaut"
  //     style={{ marginBottom: `1.45rem` }}
  //   />
  //   <p>
  //     <Link to="/page-2/">Go to page 2</Link> <br />
  //     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  //   </p>
  // </Layout>
)

export default IndexPage
