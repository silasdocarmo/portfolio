import { descricaoContato } from "../components/componentes";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion";

const Contato = () => {
  return (
    <motion.div
    whileInView={{ y: 0, opacity: 1}}
    initial={{ y: 100, opacity: 0}}
    transition={{ duration: 1 }}
    className="border-b border-neutral-900 pb-20">
        <h2 className="my-10 text-center text-4xl">Entre em contato</h2>
        <div className="text-center tracking-tighter">
            <p className="my-4">
              <a href="mailto:silasdocarmoneto@gmail.com" target="_blank">{descricaoContato.email}</a>
            </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4 text-2xl">
            <a className="text-blue-300" href="https://www.linkedin.com/in/silas-do-carmo-2089a9149/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/silasdocarmo" target="_blank"><FaGithub /></a>
            <a className="text-green-300" href="http://wa.me/+5531994843147" target="_blank"><FaWhatsapp /></a>
        </div>
    </motion.div>
  )
}

export default Contato
