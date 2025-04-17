import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import groovyWalkAnimation from "@/animation/groovyWalk.json";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

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
  const [isTransitionPath, setTransitionPath] = useState("");
  const [transitionKey, setTransitionKey] = useState(0);
  const router = useRouter();
  const currentPath = usePathname();

  const navigate = async (url: string) => {
    if (url === currentPath) {
      return;
    }
    setTransitionPath(url);
    setTransitionKey((prev) => prev + 1);
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => router.push(isTransitionPath)}
      >
        <motion.div key={transitionKey}>
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
    </TransitionContext.Provider>
  );
};

export default Transiction;
