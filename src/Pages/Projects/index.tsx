import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PlayAppThumbnail from "../../assets/project-play-app.png";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Projects() {
  return (
    <div id="wrapper" className="w-full h-full pt-[6rem] overflow-hidden">
      <motion.ul
        id="container"
        className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 px-[4rem] overflow-scroll container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((index) => {
          return (
            <motion.li key={index} className="item" variants={item}>
              <Link to="#" className="bg-white rounded-lg shadow-md">
                <img
                  src={PlayAppThumbnail}
                  alt="Gallery Image 1"
                  className="rounded-md w-full h-full object-contain object-center"
                />
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}

export default Projects;
