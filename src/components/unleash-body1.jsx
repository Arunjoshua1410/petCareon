import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./unleash-body1.css";

import { faCalendarDays,faArrowRight,faChevronDown,faChevronUp  } from '@fortawesome/free-solid-svg-icons';
import FaqData from './FaqData.json';
import { useState } from 'react';
import Header from './header';
import Footer from './Footer';



export default function UnleashBody1(){
    const [activeId,setActiveId]=useState(null);
    const toggleFaq=(id)=>{
        setActiveId(prevId=>(prevId===id ? null : id));
    }
    return (
       <>
        <Header/>
        <div className="unleash-body1">
            <div className="unleash-text">
                
                    <h1>Unleash the Power of  <span className="highlight">PetON </span><br/>
                    Where Connection Meets Care!</h1>
                    <p>
                        Our mobile app revolutionises seamless socialisation, effortless <br/>
                        adoption, reliable missing pet reporting, exciting pet events, vibrant <br/>
                        community engagement, and cutting-edge AI-powered pet care <br/>
                        features—all in one place.
                    </p>
            </div>
            <div className="unleash-image">
                <img src="../public/body1Unleash.png" alt="PetOn Banner"  width={486}/>
            </div>
        </div>
        {/* petessential  */}
        <div className="petessential"> 
              <div>
                   <h1>Unleash Joy with Our <span className="highlight">Pet Essentials</span></h1>
              </div>
              <div  className="petessential-img">
                  <img src="../public/dontshop.png" alt="dontshop" className="petessentialimg1"/>
                  <img src="../public/petpeopleunite.png" alt="petpeople" />
              </div>
        </div>
        {/* petcare just got */}
        <div className="petcarejustgot">
             <div>
                 <h1>Pet care just got so <span className="highlight">much simpler</span></h1>
             </div>
             <div className="petcarebrands">
                   <div className="enhanceduser">
                         <img src="../public/Enhanceduser.png" alt="Enhanceduser" />
                         <h3>Enhanced User Experience</h3>
                         <p>Enjoy seamless navigation
                             and interaction, fostering a
                              user-friendly experience for 
                              accessing a range of pet-
                              related services and
                               resources.
                        </p>
                   </div>
                   <div className="communityengagement">
                         <img src="../public/communityengagement.png" alt="communityengagement" />
                         <h3>Community Engagement</h3>
                         <p>Connect with pet parents 
                            and enthusiasts nearby to
                             share experiences, tips, and 
                             advice, fostering a 
                             supportive and 
                             knowledgeable community.</p>
                   </div>
                   <div className="petEventsalert">
                         <img src="../public/petEventalerts.png" alt="communityengagement" />
                         <h3>Pet Events And Alerts</h3>
                         <p>Stay informed about pet 
                            events and receive 
                            notifications about missing 
                            pets, fostering community 
                            engagement and support for 
                            pet welfare.
                        </p>
                   </div>
             </div>
             {/* Resources */}
             <div className="resources">
                 <div>
                      <h1>Resources</h1>
                 </div>
                 <div className='viewclickbtn'>
                      <button className="viewmorebtn">View More <FontAwesomeIcon icon={faArrowRight} style={{color: "#fff",}} /></button> 
                 </div>
                 <div className='resource-dog'>
                    <div className='dogborder'>
                        <img src="../public/resource dog1.png" alt="dog1" />
                        <p className='date-right'><FontAwesomeIcon icon={faCalendarDays} style={{color: "#f04438",}} />&nbsp;12-Oct-24</p>
                        <h4>
                            Celebrating Safely: How to Care for<br/>
                            Your Pets During Fireworks
                        </h4>
                        <p>
                             India is a land of celebrations, and  <br/>
                              festivals like Dussehra and Diwali hold a  <br/>
                               special place in our ...
                        </p>
                    </div>
                    <div className='dogborder'>
                        <img src="../public/resource dog2.png" alt="dog2" />
                        <p className='date-right'><FontAwesomeIcon icon={faCalendarDays} style={{color: "#f04438",}} />&nbsp; 02-Oct-24</p>
                        <h4>
                             Essential Pet Grooming Tips: How to <br/>
                              Keep Your Furry Friend Happy and...
                        </h4>
                        <p>
                             Grooming is more than just a luxury; it's <br/>
                             an essential aspect of pet care that <br/>
                             contributes to your f...
                        </p>
                    </div>
                    <div>
                        <div className='resourcerightlast'>
                             <div>
                                 <img src="../public/resource dog3.png" alt="dog3" className='dog-margin'/>
                             </div>
                            <div>
                                <h4>
                                        Monsoon Dog Care: Protect Your Pet <br/>
                                        from Rainy Season Health Risks
                                </h4>
                                <p  >
                                <FontAwesomeIcon icon={faCalendarDays} style={{color: "#f04438",}} /> 22-Sep-24</p>
                               
                               
                            </div>
                        </div>
                        <div className='resourcerightlast'>
                            <div>
                                <img src="../public/resource dog4.png" alt="dog4" className='dog-margin'/>
                            </div>
                            <div>
                                <h4>
                                    Daily Pet Care: Simple Routines for a <br/>
                                    Healthier, Happier Pet
                                </h4>
                                <p><FontAwesomeIcon icon={faCalendarDays} style={{color: "#f04438",}} /> 18-Sep-24</p>
                            </div>
                        </div>
                        <div className='resourcerightlast'>
                           <img src="../public/resource dog5.png" alt="dog5" className='dog-margin'/>
                            <div>
                                    <h4>
                                    Understanding Tick Fever in Dogs: <br/>
                                    Symptoms and Home Treatments
                                </h4> 
                                <p><FontAwesomeIcon icon={faCalendarDays} style={{color: "#f04438",}} /> 02-July-24</p>
                            </div>
                        </div>
                        <div className='resourcerightlast'>
                           <img src="../public/resource dog6.png" alt="dog6" className='dog-margin'/>
                            <div>
                                    <h4>
                                        5 Heartwarming Reasons to Adopt a <br/>
                                        Senior Dog: A Life-Changing Decision
                                </h4>  
                                <p><FontAwesomeIcon icon={faCalendarDays} style={{color: "#f04438",}} /> 05-Jun-24</p>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
        </div>
        {/* start-takingcare */}
        <div className="start-takingcare">
               <div>
                    <h1>Start taking care of your pet <span className='highlight'>confidently!</span></h1>
                    <p>Say farewell to bewilderment with PetON's direction towards what's <br/>
                        genuinely optimal for your furry companion</p>
               </div>
        </div>
        <div className='social-centre'>
         {/* Socialize */}
         <div className='socialize'>
             <div>
                <h2>Socialize</h2>
                <p>Connect with other pet parents and enthusiasts in your area.<br/> 
                Share experiences, tips, and advice on pet care, behaviour, and<br/>
                 more. Build a supportive community of like-minded individuals.
                </p>
             </div>
             <div>
                <img src="../public/SocializeDog.png" alt="SocializeDog" />
             </div>
         </div>
        {/* community */}
        <div className='community'>
             <div>
                  <img src="../public/communitydog.png" alt="communitydog" />
             </div>
             <div>
                <h2>Community</h2>
                <p>Create your own, private and public communities, to engage<br/>
                     with other pet parents who would love to showcase their pets<br/>
                      too.<br/>

                      These communities can also be specially focused on adoptions,<br/>
                       events or even missing pets in the neighborhood. A perfect<br/>
                        place for the world of pets!
                </p>
                
             </div>
         </div>
         {/* Events */}
         <div className='socialize'>
             <div>
                <h2>Events</h2>
                <p>Stay updated on local pet-related events such as adoption<br/>
                     drives, fundraisers, and pet-friendly gatherings.<br/>

                        Join like-minded individuals in celebrating the joy of pet<br/>
                        ownership and strengthening bonds within your community.
                </p>
             </div>
             <div>
                <img src="../public/Eventdog.png" alt="Eventdog" />
             </div>
         </div>
         {/* Transfer */}
         <div className='community'>
             <div>
                  <img src="../public/Transfer.png" alt="Transfer" />
             </div>
             <div>
                <h2>Transfer</h2>
                <p>
                Facilitate the safe transfer of pets between parents, shelters,<br/>
                 and foster homes.<br/>

                 Streamline the process with secure communication,<br/>
                  documentation.
                </p>
                
             </div>
         </div>
         {/* AI Assistance */}
         <div className='socialize'>
             <div>
                <h2>AI Assistance</h2>
                <p>
                     Get instant answers to your pet-related questions.<br/>

                    From health concerns to behavioural issues, our AI-powered<br/>
                    feature provides reliable guidance and support whenever you<br/>
                    need it.
                </p>
             </div>
             <div>
                <img src="../public/AIAssistance.png" alt="AI Assistance" />
             </div>
         </div>

         {/* Adopt a Pet */}
         <div className='community'>
             <div>
                  <img src="../public/Adoptpet.png" alt="communitydog" />
             </div>
             <div>
                <h2>Adopt A Pet</h2>
                <p>
                 Find your perfect furry companion from a diverse range of pets<br/>
                 available for adoption.<br/>

                Explore profiles, photos, and details to make the right choice for<br/>
                your home.
                </p>
                
             </div>
         </div>
         {/* Missing Pet */}

         <div className='socialize'>
             <div>
                <h2>Missing / Found A Pet</h2>
                <p>
                Report and track missing pets within the community.<br/>

                    Receive alerts and notifications about lost pets in your area and <br/>
                    provide assistance to reunite them with their parents.
                </p>
             </div>
             <div>
                <img src="../public/Missingpet.png" alt="SocializeDog" />
             </div>
         </div>
         </div>
         {/* Near You */}
         <div className='Nearyou'>
                <div className='Nearyouheader'>
                    <h3>Near <span className='highlight'>you</span></h3>
                </div>
                <div className='Nearyou-body'>
                     <div className="Nearyou-events Nearyou-events-border">
                        <div className="circle-icon">
                            <img src="../public/Nearyou1.png" alt="Icon" />
                        </div>
                         <div>
                                <h2>Events</h2>
                                <p>
                                Join us for a fun-filled pet event with exciting <br/>
                                activities, grooming, and pet-friendly games.<br/>
                                    Connect with fellow pet l...
                                </p>
                         </div>
                         <div className='Nearyou-img'>
                              <img src="../public/Nearyou4.png" alt="NearyYou" />
                         </div>
                     </div>
                     <div className='Nearyou-Transport Nearyou-events-border'>
                         <div className="circle-icon">
                             <img src="../public/Nearyou2.png" alt="Icon" />
                          </div>
                           <div>
                             <h2>Transport</h2>
                            <p>Reliable pet transport services offering safe,<br/>
                                 comfortable journeys for your pets. We ensure<br/>
                                  timely and secure transport...</p>
                           </div>
                           <div className='Nearyou-img'>
                                <img src="../public/Nearyou5.png" alt="NearyYou" />
                           </div>
                     </div>
                     <div className='Nearyou-cafe Nearyou-events-border'>
                         <div className="circle-icon">
                              <img src="../public/Nearyou3.png" alt="Icon" />
                          </div>
                          <div>
                             <h2>Cafe</h2>
                            <p>Enjoy a cozy atmosphere at our pet-friendly<br/>
                                 cafe, where pets and their owners can relax<br/>
                                  together. Great food, friendly s...

                            </p>
                          </div>
                          <div className='Nearyou-img'>
                                <img src="../public/Nearyou6.png" alt="NearyYou"  />
                          </div>
                     </div>
                </div>
         </div>
         <div className="FAQ">
               <div className='FAQHeader'>
                    <h3>FAQ<span className='highlight'>s</span></h3>
               </div>
               <div>
               <div className='Faqbody'>
                        {
                          FaqData && FaqData.slice(0, 1).map((faq)=>(
                            <div key={faq.id}>
                                  <div className='FAQ-Question' onClick={()=>toggleFaq(faq.id)} >
                                        <h3>{faq.firstquestion}</h3>
                                        <button><FontAwesomeIcon icon={activeId===faq.id ? faChevronUp  :faChevronDown} color='red' /></button>
                                </div>
                                {
                                    activeId===faq.id && (
                                        <div className="Faqanswer"
                                        dangerouslySetInnerHTML={{__html:faq.firstanswer.replace(/\n/g,'<br/>')

                                        }}
                                        />
                                    )
                                }
                            </div>
                          ))
                        }
                    </div>                     
                    <div className='Faqbody'>
                        {
                          FaqData && FaqData.slice(1, 2).map((faq)=>(
                            <div key={faq.id}>
                                  <div className='FAQ-Question' onClick={()=>toggleFaq(faq.id)} >
                                        <h3>{faq.secondquestion}</h3>
                                        <button><FontAwesomeIcon icon={activeId===faq.id ? faChevronUp  :faChevronDown} color='red' /></button>
                                </div>
                                {
                                    activeId===faq.id && (
                                        <div className="Faqanswer"
                                        dangerouslySetInnerHTML={{__html:faq.secondanswer.replace(/\n/g,'<br/>')

                                        }}
                                        />
                                    )
                                }
                            </div>
                          ))
                        }
                    </div>

                    <div className='Faqbody'>
                        {
                          FaqData && FaqData.slice(2, 3).map((faq)=>(
                            <div key={faq.id}>
                                  <div className='FAQ-Question' onClick={()=>toggleFaq(faq.id)} >
                                        <h3>{faq.thirdquestion}</h3>
                                        <button><FontAwesomeIcon icon={activeId===faq.id ? faChevronUp  :faChevronDown} color='red' /></button>
                                </div>
                                {
                                    activeId===faq.id && (
                                        <div className="Faqanswer"
                                        dangerouslySetInnerHTML={{__html:faq.thirdanswer.replace(/\n/g,'<br/>')

                                        }}
                                        />
                                    )
                                }
                            </div>
                          ))
                        }
                    </div>
                    <div className='Faqbody'>
                        {
                          FaqData && FaqData.slice(3, 4).map((faq)=>(
                            <div key={faq.id}>
                                  <div className='FAQ-Question' onClick={()=>toggleFaq(faq.id)} >
                                        <h3>{faq.fourthquestion}</h3>
                                        <button><FontAwesomeIcon icon={activeId===faq.id ? faChevronUp  :faChevronDown} color='red' /></button>
                                </div>
                                {
                                    activeId===faq.id && (
                                        <div className="Faqanswer"
                                        dangerouslySetInnerHTML={{__html:faq.fourthanswer.replace(/\n/g,'<br/>')}}
                                        />
                                    )
                                }
                            </div>
                          ))
                        }
                    </div>
                    <div className='Faqbody'>
                        {
                          FaqData && FaqData.slice(4, 5).map((faq)=>(
                            <div key={faq.id}>
                                  <div className='FAQ-Question' onClick={()=>toggleFaq(faq.id)} >
                                        <h3>{faq.fifthquestion}</h3>
                                        <button><FontAwesomeIcon icon={activeId===faq.id ? faChevronUp  :faChevronDown} color='red' /></button>
                                </div>
                                {
                                    activeId===faq.id && (
                                        <div className="Faqanswer"
                                        dangerouslySetInnerHTML={{__html:faq.fifthanswer.replace(/\n/g,'<br/>')}}
                                        />
                                    )
                                }
                            </div>
                          ))
                        }
                    </div>
               </div>
         </div>
         <div className='viewclickbtn2'>
                <div className='viewclickbtn'>
                      <button className="viewmorebtn">View More <FontAwesomeIcon icon={faArrowRight} style={{color: "#fff",}} /></button> 
                 </div>
         </div>
         <Footer/>
       </>
    )
}

