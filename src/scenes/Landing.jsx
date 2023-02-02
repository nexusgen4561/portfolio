import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
      {/* IMAGE SECTION */}
      <div className="md:order-0 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-40 before:absolute before:-top-10 before:-left-20 
          before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2
          before:border-dark-red before:z-[-1]">
            <img
              className="hover:filter rounded-t-[600px] hover:saturate-200 transition duration-500 z-10 max-w-[200px] md:max-w-[500px]"
              src="assets/jericho-3.png"
              alt="profile"
            />
          </div>
        ) : (
          <img
            className="hover:filter rounded-t-[600px] hover:saturate-200 transition duration-500 z-10 max-w-[400px] md:max-w-[600px]"
            src="assets/jericho-3.png"
            alt="profile"
          />
        )}
      </div>

      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 70 },
            visible: { opacity: 1, x: 0 },
          }}>
          <p className="text-5xl font-aleo z-10 text-center text-dark-red md:text-start">
            Jericho {""}
            <span className="xs:relative font-aleo xs:text-dark-red xs-font xs:font-semibold z-20  before:absolute before:-left-[25px] before:-top-[80px] before:z-[-1]">
              Quintanilla
            </span>
          </p>
          <p className="mt-6 py-6 mb-7 font-opensans text-black font-semibold text-l text-center md:text-start">
            Aspiring Software Engineer. Full-Stack Web Developer.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 70 },
            visible: { opacity: 1, x: 0 },
          }}>
          <AnchorLink
            className="bg-gradient-rainbow text-grey rounded-sm py-3 px-7 font-semibold hover:bg-opaque-black hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact">
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainbow py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact">
            <div className="bg-bgcolor text-black hover:text-dark-red transition duration-500 w-full h-full flex items-center justify-center font-inter px-10">
              Let's Talk
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 70 },
            visible: { opacity: 1, x: 0 },
          }}>
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
