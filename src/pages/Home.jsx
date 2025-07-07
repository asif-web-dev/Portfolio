// src/pages/Home.jsx
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {

  return (
    <div className="h-screen flex flex-col justify-center items-start bg-cover bg-center p-6">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Asif
      </h1>
      <h2 className="text-2xl text-gray-700 dark:text-gray-300">
        I’m <span className="text-blue-500">
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
