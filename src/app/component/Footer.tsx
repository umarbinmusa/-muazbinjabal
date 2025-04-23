export default function Footer() {
    return(
        <footer className="bg-black">

      <div
        className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
      >
        
        <div
          className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; DEVSTACK ICT SOLUTIONS
          </div>
          
          <div>
            <img src="./images/logo.png" className="bg-white" alt="" />
          </div>
          
          
        </div>
        
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">HOME</a>
            <a href="#" className="hover:text-brightRed">ABOUT</a>
            <a href="#" className="hover:text-brightRed">CONTACT</a>
            <a href="#" className="hover:text-brightRed">SERVICES</a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">MISSION</a>
            <a href="#" className="hover:text-brightRed">GET STARTED</a>
            <a href="#" className="hover:text-brightRed">CONNECT US</a>
          </div>
        </div>

      
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                
              />
              <button
                className="px-6 py-2 text-white rounded-full bg-black hover:bg-white focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; DEVSTACK ICT SOLUTIONS
          </div>
        </div>
      </div>
    </footer>

    );
}