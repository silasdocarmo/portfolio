import { descricaoExperiencia } from "../components/componentes"
import { motion } from "framer-motion";

const Experiencia = () => {
    return (
        <div className="border-b border-neutral-800 pb-4">
            <motion.h2
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="my-20 text-center text-4xl">Experiências</motion.h2>
            <div>
                {descricaoExperiencia.map((experiencia, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-blue-200">{experiencia.ano}</p>
                        </motion.div>
                        <motion.div
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{experiencia.cargo} - {" "}
                            <span className="text-sm text-green-200">{experiencia.empresa}</span>
                            </h6>
                            <p className="mb-4 text-neutral-400 text-justify">{experiencia.descricao}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experiencia
