import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="headerBox">
        <div className="headerText">
          <h1>A Founder Branding Agency</h1>
          <div className="desc">
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis molestiae voluptates quo similique. Quod explicabo illo obcaecati alias, est, iusto excepturi fugit animi voluptatum atque nemo modi libero! Ea!</small>
          </div>
        </div>
        <div className="hederIma">
          <img src="https://picsum.photos/536/354" alt="profile" />
        </div>
      </div>
    </div>
  )
}

export default Header