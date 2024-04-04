import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/user.png"

const Navber = () => {
    return (
        <header className="p-4   lg:ml-[450px]  ">
            <div className="container flex justify-around  h-16 mx-auto">
                
                <ul className="items-stretch font-Poppins hidden space-x-3 text-xl lg:flex">
                    <li className="flex">
                        <NavLink to={"/"}  className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink  className="flex items-center px-4 -mb-1 border-b-2 dark:border-">About</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink  className="flex items-center px-4  dark:border-">Career</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={userPhoto} />
                        </div>
                    </div>
                   <NavLink to={"/login"}> <button className="self-center px-8 py-3 font-Poppins font-semibold rounded btn-outline  bg-slate-300">Login</button></NavLink>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navber;