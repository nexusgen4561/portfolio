import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 70 },
            visible: { opacity: 1, x: 0 },
          }}>
          <p className="font-inter text-black opacity-80 font-semibold text-4xl mb-5">
            MY <span className="text-dark-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugit
            recusandae aliquid quam molestiae exercitationem, totam excepturi
            porro odio
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-40 before:absolute before:-top-10 before:-left-20 before:w-full before:h-full before:border-2 before:border-dark-red before:z-[-1]">
              <img
                className="max-w-[400px] md:max-w-[600px] z-10"
                src="assets/skills-image.png"
                alt="profile"
              />
            </div>
          ) : (
            <img className="z-10" src="assets/skills-image.png" alt="profile" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between md:ml-16 mt-12 gap-32 text-center">
        {/* HTML */}
        <motion.div
          className="md:w-1/4 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="h-52">
            <div className="z-10">
              <FontAwesomeIcon
                icon="fa-brands fa-html5"
                className="hover:filter rounded-t-[600px] hover:saturate-200 transition duration-500 text-html text-9xl opacity-75 mb-5"></FontAwesomeIcon>
              <p className="font-opensans text-dark-red font-semibold text-3xl">
                HTML
              </p>
              <p className="font-opensans text-black opacity-60 font-semibold text-s mt-5"></p>
            </div>
            {/* <div className="w-1/2 md:w-3/4 h-32 bg-white absolute right-0 top-0 z-[-1]" /> */}
          </div>
        </motion.div>
        {/* CSS */}
        <motion.div
          className="md:w-1/4 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="h-52">
            <div className="z-10">
              <FontAwesomeIcon
                icon="fa-brands fa-css3-alt"
                className="hover:filter rounded-t-[600px] hover:saturate-200 transition duration-500 text-css text-9xl opacity-75 mb-5"></FontAwesomeIcon>
              <p className="font-opensans text-dark-red font-semibold text-3xl">
                CSS
              </p>
              <p className="font-opensans text-black opacity-60 font-semibold text-s mt-5"></p>
            </div>
            {/* <div className="w-1/2 md:w-1/4 h-32 bg-beige absolute right-0 top-0 z-[-1]" /> */}
          </div>
        </motion.div>
        {/* JAVASCRIPT */}
        <motion.div
          className="md:w-1/4 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="h-52">
            <div className="z-10">
              <FontAwesomeIcon
                icon="fa-brands fa-square-js"
                className="hover:filter rounded-t-[600px] hover:saturate-200 transition duration-500 text-javascript text-9xl opacity-75 "></FontAwesomeIcon>
              <p className="font-opensans text-dark-red font-semibold text-3xl mt-5">
                JavaScript
              </p>
              <p className="font-opensans text-black opacity-60 font-semibold text-s mt-5"></p>
            </div>
            {/* <div className="w-1/2 md:w-1/4 h-32 bg-opaque-black absolute right-0 top-0 z-[-1]" /> */}
          </div>
        </motion.div>
        {/* PYTHON */}
        <motion.div
          className="md:w-1/4 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="h-52">
            <div className="z-10">
              {/* <FontAwesomeIcon
                icon="fa-brands fa-python"
                className="text-css text-9xl opacity-75 float-right"></FontAwesomeIcon> */}
              <img
                className="hover:filter hover:saturate-200 transition duration-500 z-10 max-w-[120px] md:max-w-[120px] ml-8 mt-1"
                src="assets/python.png"
                alt="profile"
              />
              <p className="font-opensans text-dark-red font-semibold text-3xl mt-5">
                Python
              </p>
              <p className="font-opensans text-black opacity-60 font-semibold text-s mt-5"></p>
            </div>
            {/* <div className="w-1/2 md:w-1/4 h-32 bg-opaque-black absolute right-0 top-0 z-[-1]" /> */}
          </div>
        </motion.div>
      </div>

      <div className="md:flex md:justify-between md:ml-16 mt-12 gap-32 text-center">
        {/* C++/C# */}
        <motion.div
          className="md:w-1/4 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="h-52">
            <div className="z-10">
              <FontAwesomeIcon
                icon="fa-solid fa-c"
                className="hover:filter rounded-t-[600px] hover:saturate-200 transition duration-500 text-css text-9xl opacity-75 mb-5"></FontAwesomeIcon>
              <p className="font-opensans text-dark-red font-semibold text-3xl">
                C++/C#
              </p>
              <p className="font-opensans text-black opacity-60 font-semibold text-s mt-5"></p>
            </div>
            {/* <div className="w-1/2 md:w-3/4 h-32 bg-white absolute right-0 top-0 z-[-1]" /> */}
          </div>
        </motion.div>
        {/* DATABASES */}
        <motion.div
          className="md:w-1/4 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="h-52">
            <div className="z-10">
              <FontAwesomeIcon
                icon="fa-solid fa-database"
                className="hover:filter rounded-t-[600px] hover:saturate-200 transition duration-500 text-database text-9xl opacity-75 mb-5"></FontAwesomeIcon>
              <p className="font-opensans text-dark-red font-semibold text-3xl">
                Databases
              </p>
              <p className="font-opensans text-black opacity-60 font-semibold text-s mt-5"></p>
            </div>
            {/* <div className="w-1/2 md:w-1/4 h-32 bg-beige absolute right-0 top-0 z-[-1]" /> */}
          </div>
        </motion.div>
        {/* DEPLOYMENT */}
        <motion.div
          className="md:w-1/4 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="h-52">
            <div className="z-10">
              <FontAwesomeIcon
                icon="fa-solid fa-box-open"
                className="hover:filter rounded-t-[600px] hover:saturate-200 transition duration-500 text-container text-9xl opacity-75 "></FontAwesomeIcon>
              <p className="font-opensans text-dark-red font-semibold text-3xl mt-5">
                Deployment
              </p>
              <p className="font-opensans text-black opacity-60 font-semibold text-s mt-5"></p>
            </div>
            {/* <div className="w-1/2 md:w-1/4 h-32 bg-opaque-black absolute right-0 top-0 z-[-1]" /> */}
          </div>
        </motion.div>
        {/* DATA ANALYTICS */}
        <motion.div
          className="md:w-1/4 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="h-52">
            <div className="z-10">
              <FontAwesomeIcon
                icon="fa-solid fa-chart-pie"
                className="hover:filter rounded-t-[600px] hover:saturate-200 transition duration-500 text-analytics text-9xl opacity-75 "></FontAwesomeIcon>
              <p className="font-opensans text-dark-red font-semibold text-3xl mt-6">
                Analytics
              </p>
              <p className="font-opensans text-black opacity-60 font-semibold text-s mt-5"></p>
            </div>
            {/* <div className="w-1/2 md:w-1/4 h-32 bg-opaque-black absolute right-0 top-0 z-[-1]" /> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
