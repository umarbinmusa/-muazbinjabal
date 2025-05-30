import Footer from "../component/Footer";
import Nav from "../Nav";
 function About() {
    return(
      <div className="">
        <Nav />
        <div className="min-h-screen flex justify-center mt-1 items-center flex-col-reverse lg:flex-row lg:justify-around">
      
      
      

      <div className='mt-0 text-center lg:text-left'>
        <p className="text-xl justify-items-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/> Ut velit incidunt
           quidem pariatur et, rem impedit dolorum <br/> facilis quos laboriosam! Nihil a ducimus possimus
            esse <br/>at facilis ipsum saepe vitae!</p>
            <p className="text-xl justify-items-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/> Ut velit incidunt
           quidem pariatur et, rem impedit dolorum <br/> facilis quos laboriosam! Nihil a ducimus possimus
            esse <br/>at facilis ipsum saepe vitae!</p>
            <p className="text-xl justify-items-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/> Ut velit incidunt
           quidem pariatur et, rem impedit dolorum <br/> facilis quos laboriosam! Nihil a ducimus possimus
            esse <br/>at facilis ipsum saepe vitae!</p>
            <p className="text-xl justify-items-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/> Ut velit incidunt
           quidem pariatur et, rem impedit dolorum <br/> facilis quos laboriosam! Nihil a ducimus possimus
            esse <br/>at facilis ipsum saepe vitae!</p>
      </div>
      <img src="./images/m.jpg"alt='' className="  rounded-2xl"/>
    
    </div>
    <Footer/>
      </div>
    );
}
export default About;