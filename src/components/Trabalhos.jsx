import { descricaoProjetos } from "../components/componentes";
import { motion } from "framer-motion";

const Trabalhos = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2
        whileInView={{ y:0, opacity: 1}}
        initial={{ y: -100, opacity: 0}}
        transition={{ duration: 1 }} className="my-20 text-center text-4xl">Projetos</motion.h2>
        {descricaoProjetos.map((projetos, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0}}
                transition={{ duration: 1 }}
                className="flex justify-center w-full md:w-1/2 lg:w-1/4">

                    <img src={projetos.imagem}
                    width={300}
                    height={300}
                    alt={projetos.titulo}
                    className="mb-6 rounded" />
                </motion.div>
                <motion.div
                whileInView={{ x: 0, opacity: 1}}
                initial={{ x: 100, opacity: 0}}
                transition={{ duration: 1 }}
                className="w-full max-w-xl md:w-1/2 lg:w-3/4 lg:ml-8">
                    <h6 className="mb-2 font-semibold">{projetos.titulo}</h6>
                    <p className="mb-4 text-neutral-400 text-justify">{projetos.descricao}</p>
                </motion.div>
            </div>
        ))}
    </div>
  )
}

export default Trabalhos
