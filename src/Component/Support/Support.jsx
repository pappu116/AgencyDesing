import { AccountTreeOutlined, AddHomeWorkOutlined, Description, PeopleAltOutlined, PinDropOutlined, SettingsOutlined } from "@mui/icons-material"
import "./support.css"

const Support = () => {
  return (
    <div className="support">
      <div className="supportBox">
      <div className="supportCard">
            <AccountTreeOutlined style={{color:"white",fontSize:"30px"}} className="slogo"/>
            <h3>analytics</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a odio beatae necessitatibus corrupti, praesentium impedit quisquam nobis facere nostrum sed dolor dolores est tempora! Voluptates quis veritatis distinctio eum?</small>
          </div>
          <div className="supportCard">
            <SettingsOutlined style={{color:"white",fontSize:"30px"}} className="slogo"/>
            <h3>Creative Team</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a odio beatae necessitatibus corrupti, praesentium impedit quisquam nobis facere nostrum sed dolor dolores est tempora! Voluptates quis veritatis distinctio eum?</small>
          </div>
          <div className="supportCard">
            <AddHomeWorkOutlined style={{color:"white",fontSize:"30px"}} className="slogo"/>
            <h3>We Work</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a odio beatae necessitatibus corrupti, praesentium impedit quisquam nobis facere nostrum sed dolor dolores est tempora! Voluptates quis veritatis distinctio eum?</small>
          </div>
          <div className="supportCard">
            <Description style={{color:"white",fontSize:"30px"}} className="slogo"/>
            <h3>Best Pricing</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a odio beatae necessitatibus corrupti, praesentium impedit quisquam nobis facere nostrum sed dolor dolores est tempora! Voluptates quis veritatis distinctio eum?</small>
          </div>
          <div className="supportCard">
            <PinDropOutlined style={{color:"white",fontSize:"30px"}} className="slogo"/>
            <h3>Innovations</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a odio beatae necessitatibus corrupti, praesentium impedit quisquam nobis facere nostrum sed dolor dolores est tempora! Voluptates quis veritatis distinctio eum?</small>
          </div>
          <div className="supportCard">
            <PeopleAltOutlined style={{color:"white",fontSize:"30px"}} className="slogo"/>
            <h3>24/7 Support</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a odio beatae necessitatibus corrupti, praesentium impedit quisquam nobis facere nostrum sed dolor dolores est tempora! Voluptates quis veritatis distinctio eum?</small>
          </div>
      </div>
    </div>
  )
}

export default Support