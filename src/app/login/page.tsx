import Nav from "../Nav";
import Footer from "../component/Footer";
import Image from 'next/image';

function Login() {
    return(
        <div className="">
            <Nav />
        <div className="flex min-h-screen">
          <div className=" flex-shrink flex items-center justify-center">
            <Image src="./images/logo.png" alt="" className="m-30 pl-8" />
          </div>
          <div className="flex-[2] flex-shrink flex flex-col bg-white   items-start ml-80 justify-center">
            <div className="mb-7 text-center ml-40">
        
              <h2 className="font-bold text-xl text-center">Login HERE!!</h2>
            </div>
  
            
            <form  className=" border-l-2 flex flex-col gap-5 shadow-md bg-white p-20 rounded-b-lg">
              <div className="w-full">
                <label htmlFor="username" className="block">Username</label>
                <input type="text" id="username" className="w-96 border px-4 py-2 rounded"
                  />
              </div>
  
              <div className="w-full">
                <label htmlFor="password" className="block">Password</label>
                <input type="password" id="password" className="w-96 border px-4 py-2 rounded"
                  />
              </div>
  
              <div>
                <button type="submit" className="w-full bg-black text-white px-4 py-2 rounded"
                  >
                    Login
    
                </button>
              </div>
            </form>
          </div>
          
        </div>
        <Footer />
      </div>

    );
}
export default Login;