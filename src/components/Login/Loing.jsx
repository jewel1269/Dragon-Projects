import { NavLink, useLocation } from "react-router-dom";
import Navber from "../Navber/Navber";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const Loing = () => {
    const navi = useNavigate()
    const { signIn } = useContext(AuthContext);
    const location = useLocation()
    console.log(location)

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)


        //signIn
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navi(location.state)

            })
            .then(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Navber></Navber>


            <div className="flex flex-col max-w-md font-Poppins lg:ml-[37%] mt-10 p-6 shadow-2xl bg-slate-100 rounded-2xl sm:p-10  dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Login</h1>
                    <p className="text-sm  dark:text-gray-600">Login to access your account</p>
                </div>
                <form onSubmit={handleLogin} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300  dark:bg-gray-50  dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>

                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300  dark:bg-gray-50  dark:text-gray-800" />
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline  dark:text-gray-600">Forgot password?</a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 dark:text-gray-50">Login</button>
                        </div>
                        <p className="px-6 text-sm text-center  dark:text-gray-600">Don't have an account yet?
                            <NavLink to={"/register"}> <strong className="text-red-500">Register</strong></NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Loing;