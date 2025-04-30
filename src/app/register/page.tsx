

function Login() {
    return(
        <div className="flex items-center justify-center ">
        <div className="flex min-h-screen">
          <div className=" flex-shrink flex items-center justify-center">
            <img src="./images/logo.png" alt="" className="m-10" />
          </div>
          <div className="flex-[2] flex-shrink flex flex-col bg-white   items-start ml-80 justify-center">
            <div className="mb-7 text-center ml-40">
        
              <h2 className="font-bold text-xl text-center">Login</h2>
            </div>
  
            
            <form  className=" w-96 flex flex-col gap-5 shadow-md bg-white p-20 rounded-b-lg">
              <div className="w-full">
                <label htmlFor="username" className="block">Username</label>
                <input type="text" id="username" className="w-full border px-4 py-2 rounded"
                  />
              </div>
              <div className="w-full">
                <label htmlFor="username" className="block">Username</label>
                <input type="text" id="username" className="w-full border px-4 py-2 rounded"
                  />
              </div>
              <div className="w-full">
                <label htmlFor="username" className="block">Username</label>
                <input type="text" id="username" className="w-full border px-4 py-2 rounded"
                  />
              </div>
              <div className="w-full">
                <label htmlFor="username" className="block">Username</label>
                <input type="text" id="username" className="w-full border px-4 py-2 rounded"
                  />
              </div>
  
              <div className="w-full">
                <label htmlFor="password" className="block">Password</label>
                <input type="password" id="password" className="w-full border px-4 py-2 rounded"
                  />
              </div>
  
              <div>
                <button type="submit" className="w-full bg-[#90D5FF] text-black px-4 py-2 rounded"
                  >
                    Login
    
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
}
export default Login;