import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import groovyWalkAnimation from "@/animation/groovyWalk.json";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type TransitionContextType = {
  navigate: (url: string) => void;
};

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

export const TransitionContext = createContext<TransitionContextType>({
  navigate: () => {},
});
export const useTransitionRouter = () => useContext(TransitionContext);

const Transiction = ({ children }: { children: React.ReactNode }) => {
  const [isBlurVisible, setBlurVisible] = useState(false);

  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    setBlurVisible(true);
    setTimeout(() => {}, 1000);
    setBlurVisible(false);
  }, [currentPath]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={currentPath}>
          <motion.div
            initial={{ opacity: 0 }}
            variants={transitionVariants}
            exit={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0 }}
            className="fixed top-0 left-0 w-screen h-screen z-50 bg-[rgba(17,25,40,0.15)] flex backdrop-blur-lg backdrop-saturate-150 pointer-events-none"
          />

          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-red-950 flex items-center justify-center flex-col"
            variants={transitionVariants}
            initial={"initial"}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }}
          >
            <Lottie
              animationData={groovyWalkAnimation}
              className="w-[20rem] h-[20rem]"
            />
          </motion.div>
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-red-900"
            variants={transitionVariants}
            initial={"initial"}
            animate="animate"
            exit="exit"
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-red-800"
            variants={transitionVariants}
            initial={"initial"}
            animate="animate"
            exit="exit"
            transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
      </AnimatePresence>
      {children}
    </>
  );
};

export default Transiction;
