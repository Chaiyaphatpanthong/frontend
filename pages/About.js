import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

export default function index() {
  return (
    <>
    <Head>
      <title>About me</title>
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
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/About">About me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/Contact">Contact</Link>
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
  <br></br><br></br><br></br><br></br>
  <h1 className='text-center text-bg-dark'>About Banana Club</h1>
    <div className="container marketing">
      {/* Three columns of text below the carousel */}
      <div className="row">
        <center>
        <div className="col-lg-4">
        <img className="bd-placeholder-img rounded" width={150} height={160} src='/Logo Banana.png'></img>               
        <h2 className="fw-normal">Banana Club</h2>
          <p>Our primary goal is to offer and sell banana juice products that are both delicious and nutritious .</p>
          <hr></hr>
          </div>
          </center>
      </div>{/* /.row */}
      {/* START THE FEATURETTES */}
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">The founder of the site is. <span className="text-body-secondary">Mr.Chaiyaphat Phanthong 023 L2 </span></h2>
          <p className="lead">We created this website on 1/6/2566</p>
        </div>
        <div className="col-md-5">
        <img className="bd-placeholder-img rounded" width={300} height={300} src='/Logo Banana.png' ></img>         
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">our first goal. <span className="text-body-secondary">at us Banana Club.</span></h2>
          <p className="lead">It's about giving people something useful So that people can greatly access the benefits of bananas in deciding to eat healthy things.</p>
        </div>
        <div className="col-md-5 order-md-1">
        <img className="bd-placeholder-img rounded" width={350} height={300} src='/HoldBanana.png' ></img>        
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">replenish your health. <span className="text-body-secondary">With banana.</span></h2>
          <p className="lead">With the Banana Club we are here to help bring you the best and the best quality that you care about what you get every day.</p>
        </div>
        <div className="col-md-5">
        <img className="bd-placeholder-img rounded" width={450} height={350} src='/EatbananaGym.jpg' ></img>        
        </div>
      </div>
      <hr className="featurette-divider" />
      {/* /END THE FEATURETTES */}
    </div>{/* /.container */}
    {/* FOOTER */}
    <div class="b-example-divider"></div>

<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      <img className="bd-placeholder-img rounded" width={150} height={160} src='/Logo Banana.png'></img>               
      </a>
      <span class="mb-3 mb-md-0 text-muted">&copy; 2023 Company, Banana Club By:Chaiyaphat Phanthong 023 L2</span>
    </div>


  </footer>
</div>

</div>


    </>
  )
}
