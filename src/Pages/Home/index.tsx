import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DisplayPicture from "../../assets/image.png";

const contactList = [
  {
    id: "mail-address",
    label: "Mail Me",
    link: "mailto:mohanshan99@gmail.com",
    displayName: "mohanshan99@gmail.com",
  },
  {
    id: "phone-number",
    label: "Call Me",
    link: "tel:+917867977363",
    displayName: "+91 7867 977 363",
  },
  {
    id: "location-map-link",
    label: "Location",
    link: "https://maps.app.goo.gl/fTi9fGCHpKu4vxp97",
    displayName: "Karur, Tamil Nadu",
  },
];

function Home() {
  return (
    <div id="wrapper" className="w-full h-full">
      <div id="container" className="w-full h-full">
        <div
          id="section-one"
          className="h-[80%] flex flex-col justify-end pl-10"
        >
          <div
            id="quick-bit"
            className="h-[70%] flex justify-start items-start"
          >
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              id="info"
              className="w-[50%] text-pretty h-full flex flex-col items-start justify-start"
            >
              <p id="welcome-text" className="text-sm text-gray-500">
                Hi There 👋,
              </p>

              <p
                id="who-i-am"
                className="text-4xl font-semibold text-[#39AD48] my-6"
              >
                I am Mohanram Shanmugam
              </p>

              <p id="who-i-am" className="text-2xl my-1">
                UI/UX Designer
              </p>

              <p id="my-moto" className="my-1 text-sm w-[33rem] leading-loose">
                I focus on understanding the user's needs and problems. Then, I
                identify the right solution to provide a usable product. My goal
                is to provide an inclusive and accessible UI/UX.
              </p>

              <button
                type="button"
                className="my-10 bg-[#39AD48] text-white px-6 py-3 font-LeagueSpartan rounded-lg border-2 border-[#39AD48] transition-all duration-300 hover:bg-transparent hover:text-[#39AD48] hover:border-[#39AD48] focus:outline-none"
              >
                View Resume
              </button>
            </motion.div>

            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              id="cool-pic"
              className="w-[50%] h-full pr-[4rem]"
            >
              <img
                src={DisplayPicture}
                alt="display-picture"
                className="w-full h-full object-contain object-center"
              />
            </motion.div>
          </div>
        </div>

        <div
          id="section-two"
          className="h-[20%] flex justify-start items-center gap-[4rem] pl-10 font-LeagueSpartan"
        >
          {contactList.map(({ id, label, displayName, link }) => {
            return (
              <div
                key={id}
                id="contact"
                className="border-0 border-l-[1px] border-l-slate-600 pl-5"
              >
                <Link to={link} target="_blank">
                  <div id="divider" className=""></div>

                  <p className="font-RobotoSlab text-sm">{label}</p>

                  <p className="text-gray-600 dark:text-[#39AD48]">
                    {displayName}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
