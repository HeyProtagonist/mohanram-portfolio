import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectsPayload from "../../Payload/projects-payload";

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
        id="projects-container"
        className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 px-[4rem] overflow-scroll container overflow-x-hidden"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projectsPayload.map(({ displayName, imagePath, URL }) => {
          return (
            <motion.li key={uuidv4()} className="item" variants={item}>
              <Link
                to={URL}
                className="bg-white rounded-lg shadow-md"
                target="_blank"
              >
                <img
                  src={imagePath}
                  alt={displayName}
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
