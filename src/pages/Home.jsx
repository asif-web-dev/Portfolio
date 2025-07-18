
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
      style={{
        backgroundImage: "url('/bg-home.jpg')",
        margin: 0,
        padding: 0,
      }}
    >
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg leading-snug">
        Hi, I'm <span className="text-gray-900">Asif</span>
      </h1>

      <h2 className="text-lg sm:text-2xl md:text-3xl text-white font-medium drop-shadow-md max-w-md sm:max-w-none">
        I’m{" "}
        <span className="text-gray-900 font-semibold">
          <Typewriter
            words={['a Frontend Developer', 'a React Developer', 'a Web Designer']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>
    </div>
  );
};

export default Home;
