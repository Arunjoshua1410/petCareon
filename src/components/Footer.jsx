import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'; 


function Footer() {
  return (
    <div className="footer">
            <div className='footer-body'>
                    <div className='footer-colo-1'>
                       <img src="../public/Footerpetonlogo.png" alt="Footerpetonlogo" />
                    </div>
                    <div className='footer-email'>
                        <a href="mailto:info@peton.ai"> <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ebe5e5" }} /></a>
                         <a href="mailto:info@peton.ai" className='footer-left'>info@peton.ai</a>
                    </div>
                    <div className='footer-social-logos'>
                          <a href="https://www.instagram.com/peton.ai/" target='_active'> <FontAwesomeIcon icon={faInstagram} style={{ color: "#ebe5e5" }} className='logo-marginRight'/> </a>  
                          <a href="" target='_active'>  <FontAwesomeIcon icon={faFacebook} style={{ color: "#ebe5e5" }} className='logo-marginRight'/> </a>
                          <a href="https://www.linkedin.com/in/peton/" target='_active'> <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ebe5e5" }} className='logo-marginRight'/>  </a>
                          <a href="https://x.com/PetON_ai" target='_active'><FontAwesomeIcon icon={faTwitter} style={{ color: "#ebe5e5" }}/></a>
                                                    
                    </div>
                  
            </div>
            <div className='footer-email footer-describe1'>
                         <div>
                             <h3  style={{ color: "#ebe5e5" }}>COMPANY</h3>
                         </div>
                         <div className='footer1describe'>
                            <div>
                                <a href="http://localhost:5173/">Home</a>
                            </div>
                            <div>
                                <a href="">Resources</a>
                            </div>
                            <div>
                                <a href="">About us</a> 
                            </div>
                         </div>
                    </div>
                <div className='footer-email footer-describe1'>
                        <div >
                             <h3  style={{ color: "#ebe5e5" }}>LEGAL</h3>
                         </div>
                         <div className='footer1describe'>
                                <div>
                                    <a href="">Terms of Use</a>
                                </div>
                                <div>
                                    <a href="">Privacy Policy</a>
                                </div>
                         </div>
                         
                    </div>
                    <div className='googlestore'>
                        <div>
                            <a href="https://apps.apple.com/in/app/peton/id6476492550" target='_blank'><img src="../public/footerappstore.png" alt="footerappstore"  width={200} /></a>
                        </div>
                        <div>
                            <a href="https://play.google.com/store/apps/details?id=com.ai.peton" target='_blank'><img src="../public/footergoogle.png" alt="footergoogle" width={200}/></a>
                        </div>
                    </div>
    </div>
  );
}

export default Footer;
