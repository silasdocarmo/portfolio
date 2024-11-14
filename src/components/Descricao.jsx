import descricao from "../assets/sn_about.png";
import { descricaoPerfil } from "../components/componentes";
import { motion } from "framer-motion";

const Descricao = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Sobre <span className="text-neutral-500">mim</span></h2>
      <div className="flex flex-wrap">
        <motion.div
        whileInView={{ x: 0, opacity: 1}}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: .5}}
        className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="opacity-70" src={descricao} alt="descricao" />
            </div>
        </motion.div>
            <motion.div
            whileInView={{ x: 0, opacity: 1}}
            initial={{ x: 100, opacity: 0}}
            transition={{ duration: .5 }}
             className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6 text-justify"> {descricaoPerfil} </p>
                </div>
            </motion.div>
      </div>
    </div>
  )
}

export default Descricao
