import myPhoto from "../assets/my photo/my photo.png";
import bg from "../assets/my photo/bg.png";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import scrollLottie from "../assets/lottie/scroll down lottie.json";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div
        className="for-left h-screen md:w-1/2 text-white flex flex-col justify-center pl-20"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <h3 className="text-2xl text-[#1e293b] font-bold">Hello</h3>
        <h1 className="text-6xl font-bold">
          I am <br />
          Radoan Ahmed
        </h1>
        <p className="text-3xl font-bold">
          <Typewriter
            options={{
              strings: [
                "A Web Developer...",
                "A Full Stack Developer...",
                "A Frontend Developer...",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <div className="social flex gap-3 mt-5 text-4xl text-[#1e293b]">
          <div className="cursor-pointer">
            <a href="https://web.facebook.com/radoan.ahmed.585" target="blank">
              <FaFacebookSquare />
            </a>
          </div>
          <div className="cursor-pointer">
            <a href="https://github.com/red-one12" target="blank">
              <FaGithub />
            </a>
          </div>
          <div className="cursor-pointer">
            <a href="https://www.linkedin.com/in/radoan-ahmed-b7112534b/">
            <ImLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="for-right h-screen md:w-1/2 bg-white flex justify-center items-center relative">
        <img src={myPhoto} alt="My Photo" />
        <div className="hidden md:block absolute -bottom-8 -left-11">
          <Lottie animationData={scrollLottie} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Hero;
