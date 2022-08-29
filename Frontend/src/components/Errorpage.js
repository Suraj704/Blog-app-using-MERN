import { BsFillBugFill,BsHouseDoorFill , BsPhoneVibrateFill } from "react-icons/bs";
import "./error.css"

const Errorpage = ()=>{
return(


    <>
      <div class="page-not-found pt-5">
    <div class="bg-light shadow">
        <h2>4<i class="bug"><BsFillBugFill /></i>4</h2>
        <h3 class="mt-4">Opps! Page Not Found</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and<br />typesetting industry.</p>
        <div class="mt-5">
        <a type="button" class="btn m-2 m-md-0 btn-primary" href="/Blogs" role="button"
          ><i class="bi "><BsHouseDoorFill />Back Home</i></a> &nbsp;

         <a type="button" class="btn m-2 m-md-0 btn-primary" href="/Contact" role="button"
          ><i class="bi "><BsPhoneVibrateFill />Contact Us</i></a>
        </div>
    </div>
</div>
    </>
);
}


export default Errorpage;