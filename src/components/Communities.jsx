import './Communities.css';
import Footer from './Footer';
import Header from './header';

export default function Communities(){
    return (
        <>
           <Header/>
           <div  className="adoptapet">
                <div className="adoptapet1">
                    <h1>Grow Your Community Effortlessly</h1>
                    <p>
                    Creating a vibrant pet community has never been easier!<br/>
                   Whether you want to build private or public spaces, you can engage <br/> with fellow
                    pet parents who are just as eager to showcase their beloved <br/>pets.
                These communities can be tailored to specific needs—whether it's<br/> supporting adoptions, organizing events,
                 fundraising efforts or finding<br/> missing pets in the neighborhood.

                    </p>
                    <h1>Build Your Pet Community in Under A Minute</h1>
                    <p>
                    It's the perfect way to connect, share, and celebrate the world of pets!

                    </p>
                </div>
             
                <div>
                    <img src="../public/communitydog.png" alt="communitydog"  width={375}/>
                </div>
           </div>
          <Footer/>
        </>
    )
}