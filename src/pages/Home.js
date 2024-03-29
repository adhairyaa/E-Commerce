import { Link } from "react-router-dom";
export function Home() {
  return (
    <div>
      <div className="heroSection">
        <Link to="/products">
          <img
            src="https://images.pexels.com/photos/9603489/pexels-photo-9603489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="HeroImage"
          ></img>
        </Link>

        <div className="heroSectionText">
          <div>40%OFF</div>
          <Link to="/products">
            {" "}
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
      <h2 className="sectionHeading">Section Collection</h2>

      <div className="HomeSectionTiles">
        <Link to="/products">
          <div className="tileBar">
            <img
              src={process.env.PUBLIC_URL + "/Section.jpg"}
              alt="{tileImg}"
            ></img>
            <div className="tileText">Men's</div>
          </div>
        </Link>
        <Link to="/products">
          <div className="tileBar">
            <img
              src="https://images.pexels.com/photos/6310924/pexels-photo-6310924.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="{tileImg}"
            ></img>
            <div className="tileText">Men's</div>
          </div>
        </Link>
        <Link to="/products">
          <div className="tileBar">
            <img
              src="https://images.pexels.com/photos/6764015/pexels-photo-6764015.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="{tileImg}"
            ></img>
            <div className="tileText">Men's</div>
          </div>
        </Link>
      </div>
      <div className="footerSection">
        <div className="footer">
          <div className="footerCompanyDetails">
            <span style={{ fontSize: "larger", fontWeight: "bolder" }}>
              Company
            </span>
            <p>Find a location nearest you</p>
            <p>+91 - 7575757576</p>
            <p>hello@buye.com</p>
          </div>
          <div className="footerSiteDetails">
            <span style={{ fontSize: "larger", fontWeight: "bolder" }}>
              Information
            </span>
            <Link to="/products">
              <p>Products</p>
            </Link>
            <Link to="/products">
              <p>My Cart</p>
            </Link>
            <Link to="/products">
              <p>Wishlist</p>
            </Link>
            <Link to="/products">
              <p>My Account</p>
            </Link>
          </div>
        </div>
        <div className="footerLogo">Buye 2023</div>
      </div>
    </div>
  );
}
