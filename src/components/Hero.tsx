import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { GithubIcon, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-4 dark:text-textLight text-gray-900">
            Hi, I'm <span className="text-accent">Ravi Karmakar</span>
          </h1>
          <div className="text-xl md:text-2xl mb-6 dark:text-textLight/80 text-gray-700">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Expert",
                2000,
                "UI/UX Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="dark:text-textLight/70 text-gray-600 mb-8 text-lg">
            Crafting beautiful web experiences with modern technologies.
            Specialized in building full-stack applications with the MERN stack.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </motion.button>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/ravikarmakar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 dark:bg-secondary/20 bg-gray-100 rounded-full dark:text-accent text-primary hover:bg-gray-200 dark:hover:bg-secondary/30 transition-colors"
              >
                <GithubIcon size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 dark:bg-secondary/20 bg-gray-100 rounded-full dark:text-accent text-primary hover:bg-gray-200 dark:hover:bg-secondary/30 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square">
            <img
              src="https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="rounded-full w-full h-full object-cover border-4 border-accent shadow-xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
