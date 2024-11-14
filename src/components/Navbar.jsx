import logo from "../assets/sn_logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"

const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="#">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/silas-do-carmo-2089a9149/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/silasdocarmo" target="_blank"><FaGithub /></a>
            <a href="http://wa.me/+5531994843147" target="_blank"><FaWhatsapp /></a>
        </div>
    </nav>
};

export default Navbar;