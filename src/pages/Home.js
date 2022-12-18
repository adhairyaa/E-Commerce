import { Link } from "react-router-dom";
export function Home() {
  const homeSectionTiles = [
    { img: "Section.jpg", id: 1 },
    { img: "Section.jpg", id: 2 },
    { img: "Section.jpg", id: 3 },
  ];
  return (
    <div>
      <div className="heroSection">
        <Link to="/products">
          <img
            src="https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt="HeroImage"
          ></img>
        </Link>
        <div className="heroSectionText">40%OFF</div>
      </div>

      <div className="HomeSectionTiles">
        {homeSectionTiles.map((tile) => (
          <Link to="/products">
            <div className="tileBar">
              <img src="Section.jpg" alt="{tileImg}"></img>
              <div className="tileText">Men's</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
