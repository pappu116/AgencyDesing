import { LightMode, Person } from "@mui/icons-material"
import "./work.css"

const Work = () => {
  return (
    <div className="work">
      <h1>We Created our own Digital <br />
      Transformation Methodology
      </h1>
      <div className="workBox">
        <div className="projectArea">
          <div className="projectCard">
            <LightMode style={{color:"white",fontSize:"30px"}} className="light"/>
            <h2>23548</h2>
            <h4>Project Finish</h4>
            <small >Lorem ipsum dolor sit amet .consectetur</small>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quo repellendus cum corrupti labore id.</p>
        </div>
        <div className="clientArea">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quo repellendus cum corrupti labore id.lo Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="projectCard">
            <Person style={{color:"white",fontSize:"30px"}} className="light"/>
            <h2>23548</h2>
            <h4>Project Finish</h4>
            <small>Lorem ipsum dolor sit amet . consectetur</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work