import Footer from "./Footer";
import Header from "./header";
import './Events.css';


export default function Events(){
    return (
        <>
        <Header/>
           <div  className="adoptapet">
                <div className="adoptapet1">
                    <h1>Pet Events Calendar & Highlights</h1>
                    <p>
                    Discover exciting pet events happening near you!<br/>
                    From adoption days and training sessions to pet-friendly gatherings <br/>
                    and educational workshops, our curated calendar keeps you updated<br/>
                     on the latest happenings in the pet event.<br/>
                     Whether you're looking to engage with other pet parents or seeking<br/>
                      fun activities for your furry friends, explore events tailored to every<br/>
                       pet enthusiast's interest.

                    </p>
                </div>
                <div>
                    <img src="../public/Event1.png" alt="Event"  width={375}/>
                </div>
           </div>
       <Footer/>
        </>
    )
}