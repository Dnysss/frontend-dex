import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#fff]">
            <h1 className="w-full text-3xl font-bold">DEX</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Perfil</li>
                <li className="p-4">Tarefas</li>
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                {nav ? <IoMdClose size={20} /> : <FaHamburger size={20} />}
            </div>
            <div
                className={
                    nav
                        ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-fuchsia-900 bg-[#815099] ease-in-out duration-500"
                        : "fixed left-[-100%]"
                }
            >
                <h1 className="w-full text-3xl font-bold m-4">DEX</h1>
                <ul className="uppercase p-4">
                    <li className="p-4">Home</li>
                    <li className="p-4">Perfil</li>
                    <li className="p-4">Tarefas</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
