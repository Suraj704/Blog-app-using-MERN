
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle" ;
import "./footer.css";

import { BsTwitter,BsFacebook,BsInstagram,BsWhatsapp ,BsGithub,BsLinkedin} from "react-icons/bs";


const Footer = () => {
    return (
      
  <>
  
  <footer class="bg text-center text-white mt-auto">
    <div class="container p-4 ">
  
      <section class="mb-4">
      
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab "><BsTwitter/></i></a>
  
    
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab"><BsFacebook /></i></a>
  
      
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab "><BsInstagram /></i></a>
  
       
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab"><BsWhatsapp /></i></a>
  
   
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab "><BsGithub /></i></a>
  
     
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab "><BsLinkedin /></i></a>
      </section>
    
  
  
      <section class="">
        <form action="">
         
          <div class="row d-flex justify-content-center">
   
            <div class="col-auto">
              <p class="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
     
  
  
            <div class="col-md-5 col-12">
  
              <div class="form-outline form-white mb-4">
                <input type="email" id="form5Example21" class="form-control" />
                <label class="form-label" for="form5Example21">Email address</label>
              </div>
            </div>
    
            <div class="col-auto">
       
              <button type="submit" class="btn btn-outline-light mb-4">
                Subscribe
              </button>
            </div>
    
          </div>
        
        </form>
      </section>

    
     </div>
  
  
    <div class="text-center p-3">
      © 2020 Copyright BlogApp
      <a class="text-white" href="#"></a>
    </div>
  
  </footer>
  
  
  </>
    );
  };
  
  export default Footer;