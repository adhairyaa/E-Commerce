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
        <div className="heroSectionText">40%OFF</div>
      </div>

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
              src={process.env.PUBLIC_URL + "/Section.jpg"}
              alt="{tileImg}"
            ></img>
            <div className="tileText">Men's</div>
          </div>
        </Link>
        <Link to="/products">
          <div className="tileBar">
            <img
              src={process.env.PUBLIC_URL + "/Section.jpg"}
              alt="{tileImg}"
            ></img>
            <div className="tileText">Men's</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
