import React from "react"
import Layout from "../components/Layout"
import ProgramLayout from "../components/ProgramLayout"
import landingPage from "../images/landing-page-for-program.jpg"
import { Link } from "gatsby"



import style from "../styles/program.module.scss"

const Program = () => {
  return (
    <Layout> 
      <ProgramLayout></ProgramLayout>
      {/* <div className={style.program}>
        <div className={style.landingWrapper}>
          <img src={landingPage} />
        </div>
        <div className={style.courseDetails}> */}
          {/* <h2>Web Design & Development</h2>
          <p>This is the landing page for one of the three programs features at the show. Here would might have some kind of imagery, a description of the program, instructor names, course list, skills logos, etc.</p>
          <p>Here are the three programs as they are featured on Humber's main website:</p> */}
        
          {/* <h1>Programs</h1>
          <ul>
            <li className={style.firstLi}><Link to="/program/visualEffects">3D Modelling and Visual Effects Production</Link></li>
            <li className={style.secondLi}><Link to="/program/wddm">Web Design and Development</Link></li>
            <li className={style.thirdLi}><Link to="/program/graphicDesign">Graphic Design for Print and Web</Link></li> */}
              {/* <li><a href="https://mediastudies.humber.ca/programs/web-design-and-development.html">Web Design and Development</a></li>
              <li><a href="https://mediastudies.humber.ca/programs/3d.html">3D Modelling and Visual Effects Production</a></li>
              <li><a href="https://mediastudies.humber.ca/programs/graphic-design-for-print-and-web.html">Graphic Design for Print and Web</a></li> */}
            {/* </ul>
        </div>
        </div> */}
    </Layout>
  )
}
export default Program