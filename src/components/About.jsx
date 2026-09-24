
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 py-16">
      <h2 className="mb-10 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="w-full flex justify-center"
      >
        <p className="max-w-2xl text-center leading-7">
          {ABOUT_TEXT}
        </p>
      </motion.div>
    </div>
  );
};

export default About;
