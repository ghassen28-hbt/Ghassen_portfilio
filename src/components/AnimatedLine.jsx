import { motion } from "framer-motion" // eslint-disable-line no-unused-vars

// Ligne Verticale avec effet de glow - motion is used in exported components
export const VerticalLine = ({ height = "h-20" }) => (
  <div className={`relative w-[2px] ${height} bg-gray-800/30 overflow-hidden`}>
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      whileInView={{ height: "100%", opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent via-accent to-transparent shadow-lg accent-glow"
    />
  </div>
)

// Ligne Horizontale avec animation fluide
export const HorizontalLine = ({ width = "w-10" }) => (
  <div className={`relative h-[2px] ${width} bg-gray-800/30 overflow-hidden`}>
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "100%", opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-accent shadow-lg accent-glow"
    />
  </div>
)

// Losange doré avec pulse effect
export const GoldenDiamond = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.3 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    transition={{ duration: 0.5, delay: 0.05 }}
    className="w-4 h-4 border-2 border-accent rotate-45 bg-black shadow-lg accent-glow-strong"
  />
)

export default { VerticalLine, HorizontalLine, GoldenDiamond }
