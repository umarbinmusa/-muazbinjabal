import Image from 'next/image';
import Bann from "../../public/images/bann.jpg";
import Darr from "../../public/images/daruttanzil.jpg";


export default function Mid(){
    return(
        <div>
        <div className="min-h-screen flex justify-center mt-1 items-center flex-col-reverse lg:flex-row lg:justify-around">
      
      
      

        <div className='mt-0 text-center lg:text-left'>
        <h1 className='font-black text-3xl lg:text-5xl'>
         Daruttanzil 
         <br />
        <p className="ml-6">Academy</p>
        
          </h1>
        <h2 className='text-base text-gray-900 text-align: justify'>WE PROVIDE ALL SOLUTIONS TO YOUR CHILDRENS  PROBLEMS</h2>
        <p className='text-base text-gray-900 text-align: justify'>WE Give  THE BEST EDDUCATION FOR CHILDREN </p>
        <span className='inline-block bg-black text-white  px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5 ml-12'>CONTACT US</span>
        </div>
        <Image src={Bann}alt='' width={500} height={300}  className="w-auto pt-5  h-1/3 rounded-2xl"/>
      
      </div>
      <h1 className="text-center text-4xl">WHAT WE PROVIDE</h1>
      <div className="flex flex-col px-5 lg:flex-row   text-center  mt-3 lg:space-x-16 lg:p-10">
        
        <div className="w-80 pt-2.5 mt-2.5 bg-black text-white p-5 rounded-xl shadow-md">
            <h1 className="font-bold text-2xl">ISLAMIA SECTION</h1>
            <h2>4:00pm - 6:00pm</h2>
            <h3>monday - wednesday</h3>
        
        </div>
        <div  className="w-80 pt-2.5 mt-2.5 bg-black text-white p-5">
            <h1 className="font-bold text-2xl">TAHFIZ SECTION</h1>
            <h2>10:00am - 3:30pm</h2>
            <h3>saturday sunday</h3>
        </div>

        <div  className="w-80 mt-2.5 bg-black text-white p-5">
            <h1 className="font-bold text-2xl">SCHOOL SECTION</h1>
            <h2>monday - Friday</h2>
            <h2>7:30am - 2:00pm</h2>
        </div>
        <div  className="w-80 mt-2.5 bg-black text-white p-5">
            <h1 className="font-bold text-2xl">BOARDING SECTION</h1>
            <h2>monday - Friday</h2>
            <h2>7:30am - 2:00pm</h2>
        </div>

      </div>
      <h1 className="text-center text-2xl font-bold mt-10">GALLERIES</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        <div className=""> <Image src={Darr}alt='' width={500} height={300}  className=" rounded-2xl"/></div>
        <div className=""> <Image src={Darr}alt='' width={500} height={300}  className=" rounded-2xl"/></div>
        <div className=""> <Image src={Darr}alt='' width={500} height={300}  className=" rounded-2xl"/></div>
        <div className=""> <Image src={Darr}alt='' width={500} height={300}  className=" rounded-2xl"/></div>
        <div className=""> <Image src={Darr}alt='' width={500} height={300}  className=" rounded-2xl"/></div>
        <div className=""> <Image src={Darr}alt='' width={500} height={300}  className=" rounded-2xl"/></div>
        <div className=""> <Image src={Darr}alt='' width={500} height={300}  className=" rounded-2xl"/></div>
        <div className=""> <Image src={Darr}alt='' width={500} height={300}  className=" rounded-2xl"/></div>
        
        
      </div>
      </div>
      
     

    );
}