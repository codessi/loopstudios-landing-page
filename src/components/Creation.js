import React, {useState} from 'react'
// import deepEarth from './../images/mobile/image-deep-earth.jpg'
// import nightArcade from './../images/mobile/image-night-arcade.jpg'
// import soccer from './../images/mobile/image-soccer-team.jpg'
// import grid from './../images/mobile/image-grid.jpg'
// import fromUp from './../images/mobile/image-from-above.jpg'
// import pocket from './../images/mobile/image-pocket-borealis.jpg'
// import curiosity from './../images/mobile/image-curiosity.jpg'
// import fisheye from './../images/mobile/image-fisheye.jpg'
import data from './../data-mobile'



const Creation = () => {

  const [cards, setCards] = useState(data)

  // console.log(cards[0].image)
  //           console.log('deep is', deepEarth)

  return (
    <div>

      <div className="content">
        <h3>OUR CREATIONS</h3><div className='article-wrapper'>
        {
          data.map(el => {
          
            return (
              
                <article key={el.id}>
                  <img className = "imgM"src={el.imgM} alt={el.h3} />
                  <img className ="imgD"src={el.imgD} alt={el.h3} />
                  <h4 className='sub-title'>{el.h3}</h4>
                </article>
             
            )
          })
        } </div>
        <button>SEE ALL</button>
        
      </div>
    </div>
  )
}
  
export default Creation