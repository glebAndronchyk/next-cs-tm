import { AnimatePresence, motion } from "framer-motion";
import { SyncLoader } from "react-spinners";

const LoadingSpinner = ({ isShown }: { isShown: boolean }) => {
  return (
    <AnimatePresence>
      {isShown && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute z-30 top-[50%] left-[50%]"
        >
          <SyncLoader color="#CBCBCB" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingSpinner;
