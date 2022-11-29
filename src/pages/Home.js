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
          <img src="Ecom-Hero.jpg" alt="HeroImage"></img>
        </Link>
        <div className="heroSectionText">40%OFF</div>
      </div>

      <div className="HomeSectionTiles">
        
        {homeSectionTiles.map((tile) => (
          <Link to="/products"><div className="tileBar">
            <img src="Section.jpg" alt="{tileImg}"></img>
            <div className="tileText">Men's</div>
          </div></Link>
        ))}
      </div>
    </div>
  );
}
