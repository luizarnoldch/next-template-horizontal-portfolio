import { motion } from "framer-motion"

type StairsProps = {}

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
}

// calculate the reverse index for staggered delay
const reverseIndex = (index: number) => {
  const totalSteps = 6
  return totalSteps - index - 1
}

const Stairs: React.FC<StairsProps> = () => {
  return (
    <>
      {/* Render 6 motion.divs, each representing a step of the stairs.
        Each div will have the same animation defined by the stairAnimation object.
        The delay for each div is calculated dynamically based on its reversed index,
        creating a staggered effect with decreasing delay for each subsequent step.
      */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1, // Adjust the delay multiplier as needed
          }}
          className="h-full w-full bg-white relative"
          style={{ zIndex: reverseIndex(index) }} // Optional: Ensures the layers are stacked in order
        />
      ))}
    </>
  )
}

export default Stairs
