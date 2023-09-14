import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

export default function index() {
  return (
    <>
    <Head>
      <title>Chaiyaphat Phanthong</title>
    </Head>
    
    <div>
  <header data-bs-theme="dark">
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="/Logo Banana.png" width="50" height="60"></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/index">Home</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/About">About me</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Contact">Contact</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-warning" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   
    {/* Marketing messaging and featurettes
  ================================================== */}
    {/* Wrap the rest of the page in another container to center all the content. */}
    <div className="container marketing">
      {/* Three columns of text below the carousel */}
      <div className="row">
        <div className="col-lg-4">
          <center>
          <img src=''></img>
          <img className="bd-placeholder-img rounded-circle" width={140} height={140} src='Ig.png'></img>
          <br></br> 
          <br></br> 
          <h2 className="fw-normal">Banana_Club</h2>
          <hr></hr>
          </center>
        </div>{/* /.col-lg-4 */}
        <div className="col-lg-4">
        <center>
        <img className="bd-placeholder-img rounded-circle" width={140} height={140} src='Fb.png'></img>
        <br></br>        
        <br></br>     
        <h2 className="fw-normal">BananaClub_TH</h2>
          <hr></hr>
          </center>
        </div>{/* /.col-lg-4 */}
        <div className="col-lg-4">
        <center>
          <img className="bd-placeholder-img rounded-circle" width={140} height={140} src='Line.png'></img>
          <br></br> 
          <br></br>          
        <h2 className="fw-normal">ID_BANANA_CLUB</h2>
          <hr></hr>
          </center>
        </div>{/* /.col-lg-4 */}
      </div>{/* /.row */}
      {/* START THE FEATURETTES */}
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel" data-bs-theme="light">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img className="bd-placeholder-img" width="100%" height="100%" src='/IcreamBanana.jpeg '></img>          <div className="container">
            <div className="carousel-caption text-start">
            <h1>Icream banana.</h1>
            <p>Make you fresh and delicious at the same time.</p>
            <p><a className="btn btn-lg btn-outline-light text-bg-warning" href="#">Order now!</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <img className="bd-placeholder-img" width="100%" height="100%" src='/BananaMilk.jpg '></img>
          <div className="container">
            <div className="carousel-caption text-black-50">
              <h1>Banana Milk.</h1>
              <p>Source of calcium, potassium and other nutrients. necessary for you.</p>
              <p><a className="btn btn-lg btn-dark" href="#">Order Banana milk</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <center>
          <img className="bd-placeholder-img" width="100%" height="100%" src='/SmoothieBanana.jpg'></img>
          </center>
          <div className="container">
          <div className="carousel-caption text-body">
          <h1>Smoothie banana.</h1>
              <p>If you drink a banana smoothie You get instant<br></br> energy from glucose, fructose, sucrose and maltose.</p>
              <p><a className="btn btn-lg btn-dark text-bg-light" href="#">Order smoothie now!</a></p>
            <div className="carousel-caption text-end">
            </div>
          </div>
        </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <br></br>
      <hr className="featurette-divider" />
      {/* /END THE FEATURETTES */}
    </div>{/* /.container */}
    {/* FOOTER */}
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      <img className="bd-placeholder-img rounded" width={150} height={160} src='/Logo Banana.png'></img>               
      </a>
      <span class="mb-3 mb-md-0 text-muted">&copy; 2023 Company, Banana Club By:Chaiyaphat Phanthong 023 L2</span>
    </div>
  </footer>
  </main>
</div>


    </>
  )
}
