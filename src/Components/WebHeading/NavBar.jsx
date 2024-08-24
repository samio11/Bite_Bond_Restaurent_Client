import { NavLink, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GrContact } from "react-icons/gr";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { useContext } from "react";
import { ContextProvider } from "../../AllContext/ContextApi";
import toast from "react-hot-toast";
const NavBar = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(ContextProvider)
    const handleLogout = async () => {
        try {
            await logOut()
            toast.success('Logged out Successfully')
            navigate("/")
        }
        catch (error) {
            toast.error('Failed to log out')
        }
    }
    const navs = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                <span><IoHomeOutline /></span> Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/review"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                <span><GrContact /></span> Give Review
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/menu"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                <span><MdOutlineRestaurantMenu /></span> Our Menu
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                <span><MdDashboard /></span> Dashboard
            </NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-transparent">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Bite Bond</a>
            </div>
            <div className="navbar-end space-x-3">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-3">
                        {navs}
                    </ul>
                </div>
                {/* Last Part */}


                {
                    user ? <div className="flex justify-center items-center gap-2">

                        <div className="dropdown relative hidden md:inline-flex">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm absolute dropdown-content bg-base-100 rounded-box z-[40] top-14 right-0 w-52 p-2 shadow space-x-3 flex justify-center items-center">
                                <div className="space-y-3">
                                    <img className="w-[50px] h-[50px] rounded-full" referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
                                    <p className="text-xs italic font-semibold text-gray-500">{user?.displayName}</p>
                                    <button onClick={handleLogout} className="btn btn-sm btn-error btn-outline">LogOut</button>
                                </div>

                            </ul>
                        </div>
                    </div> : <div>
                        <button onClick={() => navigate('/login')} className="btn btn-outline border-b-4 hidden md:inline-flex">Login</button>
                    </div>
                }

                <div className="dropdown relative lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm absolute dropdown-content bg-base-100 rounded-box z-[40] top-14 right-0 w-52 p-2 shadow space-x-3">
                        {navs}
                        {
                            user ? <li>
                                <button onClick={handleLogout} className="btn btn-sm btn-error btn-outline">LogOut</button>
                            </li> : <li>
                                <button onClick={() => navigate('/login')} className="btn btn-outline border-b-4">Login</button>
                            </li>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;