import React from 'react'

export const HomePage = () => {

  return (
    <div className='home'>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="image/carousel/carousel1.jpeg" className="d-block w-100"></img>
          </div>
          <div className="carousel-item">
            <img src="image/carousel/carousel2.jpeg" className="d-block w-100"></img>
          </div>
          <div className="carousel-item">
            <img src="image/carousel/carousel3.jpeg" className="d-block w-100"></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      <div className='categorias pt-5'>

        <div className='row'>
          <div className='col-md-3 col-sm-6'>
            <img src="image/cat5.jpeg" className="cat-image"></img>
          </div>
          <div className='col-md-3 col-sm-6'>
            <img src="image/cat1.jpeg" className="cat-image"></img>
          </div>
          <div className='col-md-3 col-sm-6'>
            <img src="image/cat3.jpeg" className="cat-image"></img>
          </div>
          <div className='col-md-3 col-sm-6'>
            <img src="image/cat4.jpeg" className="cat-image"></img>
          </div>
        </div>


      </div>

    </div>

  )
}
