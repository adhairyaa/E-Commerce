import { ProductListingPage } from "./ProductListingPage"
import { useLivePageContext } from "./LivePageContext"
export function HomePage (){
    const {setLivePage} = useLivePageContext();
    const homeSectionTiles =[{img:"Section.jpg",id:1},{img:'Section.jpg',id:2},{img:'Section.jpg',id:3}]
    return(
      <div>
  <div className="heroSection" onClick={()=>setLivePage(<ProductListingPage />)}>
            <img src="Ecom-Hero.jpg" alt="HeroImage">
            
            </img>
            <div className="heroSectionText">40%OFF</div>
           </div>
           <div className="HomeSectionTiles">
            {homeSectionTiles.map((tile) => 
              <div className='tileBar'>
                <img src="Section.jpg" alt='{tileImg}'></img>
                <div className='tileText'>Men's</div>
                </div>
                ) }
                
          </div>
          <span style={{color:"#D9534F"}}>wego! wego! wego! wego! wego! ego! wego! wego! wego! wego! wego! wego! wego! wego! wego! wego! wego! wego!</span>
          </div>
  
  
    )
  }