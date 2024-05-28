import { motion } from "framer-motion";

function About() {
  return (
    <div id="wrapper" className="w-full h-full grid place-items-center">
      <motion.div
        id="container"
        className="w-[50rem] h-[30rem] border border-[#39AD48] rounded-3xl mt-10 box text-center flex flex-col justify-evenly items-center text-wrap px-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h2 className="text-2xl mb-4">About Me</h2>

        <div>
          <p className="text-lg mb-4">
            Hi, I'm <strong>Mohanram Shanmugam</strong>, a passionate UI/UX
            Designer with over a year of experience at Intellectyx. During my
            time there, I worked on various projects, helping to create
            intuitive and engaging user experiences.
          </p>

          <p className="text-lg mb-4">
            Currently, I'm freelancing and looking for new opportunities to
            bring creative and user-centered designs to life. I enjoy
            collaborating with clients to understand their needs and deliver
            designs that not only meet but exceed their expectations.
          </p>

          <p className="text-lg">
            If you have an exciting project or opportunity, feel free to reach
            out. I'm always open to discussing how I can contribute to your team
            or project.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
