import Footer from "./Footer";
import Header from "./header";
import './Adoptapet.css';

export default function AdoptAPet(){
   return(
    <>
       <Header/>
           <div  className="adoptapet">
                <div className="adoptapet1">
                    <h1>Adopt A Pet</h1>
                    <p>
                      Find your perfect furry companion from a diverse range of pets<br/>
                        available for adoption.Explore profiles, photos, and details to make<br/> 
                        the right choice for your home.

                    </p>
                </div>
                <div>
                    <img src="../public/Adoptdog.png" alt="Adoptdog"  width={375}/>
                </div>
           </div>
       <Footer/>
    </>
   ) 
}