import { motion } from "framer-motion";

export default function FadeRight({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80, y: 0 }}   // y:0 force (NO TOP/BOTTOM)
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // better control
    >
      {children}
    </motion.div>
  );
}
