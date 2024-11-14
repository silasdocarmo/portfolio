import { RiReactjsLine } from "react-icons/ri";
import { DiNodejsSmall } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { DiJsBadge } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";

import { motion } from "framer-motion";

const movimentoIcones = (duracao) => ({
    initial: { y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duracao,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{ y: 0, opacity: 1}}
      initial={{ y: -100, opacity: 0}}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">Tecnologias</motion.h2>
      <motion.div
      whileInView={{ y: 0, opacity: 1}}
      initial={{ y: 100, opacity: 0}}
      transition={{ duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={movimentoIcones(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiJsBadge className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
        variants={movimentoIcones(2.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiHtml5 className="text-7xl text-orange-500" />
        </motion.div>

        <motion.div
        variants={movimentoIcones(2.4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiCss3 className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
        variants={movimentoIcones(2.6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiWordpress className="text-7xl text-white" />
        </motion.div>

        <motion.div
        variants={movimentoIcones(2.8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMysql className="text-7xl text-sky-600" />
        </motion.div>

        <motion.div
        variants={movimentoIcones(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiGit className="text-7xl text-orange-600" />
        </motion.div>

        <motion.div
        variants={movimentoIcones(2.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiNodejsSmall className="text-7xl text-green-700" />
        </motion.div>

        <motion.div
        variants={movimentoIcones(2.4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
        variants={movimentoIcones(2.6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
