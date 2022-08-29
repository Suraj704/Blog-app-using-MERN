import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle" ;
import web from "./images/new.jpeg";
import imb from "./images/suraj.jpg";
import imb1 from "./images/sonam.jpg";
import imb2 from "./images/aman.jpg";
import Footer from "./Footer";
import "./about.css";

const About=()=> {

   return(
      <>
 {/* <!-----------------------------------------About us section STRAT------------------------------------> */}

 <div className="text-center">
    <h1>About Us</h1>
    <hr className="w-25 mx-auto" />
  </div>
 
  <div className="container-fluid container_top">
        <div className="row main_row">
        <div className="col-10 mx-auto">
        <div className="row"> 
        <div className="col-lg-6 col-md-6 col-12 ">
        <div className="para">
      <p>Welcom to our bLOG . WE ARE THE TEAM oF BEST BLLOGER IN THE WORLD.....</p>
      </div>
</div>
        
      <div className="col-lg-6 col-md-6 col-12">
          <img src={web} className="img-fluid animeted " alt="homeimage"/>
      </div>
      </div>
      </div>
        </div>


  {/* <!-- Header --> */}
<header className="bg1 text-center py-5 mb-4 ">
  <div className="container">
    <h1 className="fw-light text-white">Meet our Team</h1>
  </div>
</header>

<div className="center">
<div className="container">
  <div className=".rowcl row rowcl">
 
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={imb} width="153" height="180" className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Suraj Pathak</h5>
          <div className="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
      <img src={imb1} width="153" height="180" className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Sonam Mehra</h5>
          <div className="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>
 
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
      <img src={imb2} width="153" height="180" className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">Aman Panday</h5>
          <div className="card-text text-black-50">Web Developer</div>
        </div>
      </div>
    </div>
 
  </div>


</div>


</div>

</div>

<Footer />

      </>
  );
  }
  
  export default About; 
  