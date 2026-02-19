import { motion } from "framer-motion";

function RatingStars({rating}){
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
    >
      ⭐ {rating}
    </motion.div>
  )
}

export default RatingStars;
