import React from 'react'
import Info from "../Home/InfoPart"
import MeetheBonds from "../Home/Meetthebondsmen"
import About from "../Home/aboutus"
import Client from "../Home/clients"
import ContactUS from "../Home/contactus"
import Downbonds from "../Home/downeyBonds"
import Bailservices from "../Home/professional-bail-services"
import Slider from "../Home/slider"
import Teammembers from "../Home/teammembers-updated"
function maincomponent () {
  return (
    <div>
      
        <Slider/>
        <About/>
       <Bailservices/> 
       <Info/>
       <Downbonds/>
       <ContactUS/>
       
       <Teammembers/>
       <MeetheBonds/>
       <Client/>
    
    </div>
  )
}

export default maincomponent
