import { useState } from "react";
import { motion } from "framer-motion";

const paraStyle = "prose lg:prose-lg dark:prose-invert mx-auto px-4 py-4";

const AboutPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const toggleContent = () => {
    setIsHidden(!isHidden);
  };

  const sharedButtonClass =
    "px-6 py-3 border-2 border-[#808080] text-black rounded-lg hover:bg-[#808080] hover:text-white transition-colors";

  if (isHidden) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          I&#39;m also a writer at heart
        </h1>
        <p className="max-w-2xl mb-8 text-lg">
          Before I ever wrote a line of code, I earned a Bachelor&#39;s degree
          in English. I fell in love with stories, syntax, and the quiet power
          of well-chosen words. That love never left—it just found a new home in
          clean code, thoughtful documentation, and user-friendly interfaces.
        </p>
        <p className="max-w-2xl mb-8 text-lg">
          So while my days are now filled with React components and terminal
          commands, I still geek out over a perfectly structured sentence or a
          clever metaphor. Turns out, programming and poetry aren&#39;t so
          different—both are about creating something meaningful from logic and
          rhythm.
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">An artist</h1>
        <p className="max-w-2xl mb-8 text-lg">
          My passion for creation extends beyond code into the visual arts. As a
          graphic designer, I enjoy bringing ideas to life through digital
          media, while painting allows me a more traditional outlet for creative
          expression. I believe that this dual focus on both the logical world
          of programming and the creative world of art gives me a unique
          perspective on my work and a deep appreciation for the beauty of
          well-crafted design in all its forms.
        </p>
        <button onClick={toggleContent} className={sharedButtonClass}>
          Go back
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1
        className="px-8 text-3xl font-extrabold text-[#808080] flex justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        This is my
        <div className="relative ml-2 h-10 w-24">
          <motion.span
            className="text-black absolute"
            animate={{
              opacity: isHovered ? 0 : 1,
              y: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            Lore
          </motion.span>

          <motion.span
            className="text-black absolute"
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
          >
            Story
          </motion.span>
        </div>
      </h1>

      <div className={paraStyle}>
        <p className="py-1">
          I am a software developer, my core motivation is the pursuit of
          learning, I'm learning daily. This curiosity is what first drew me to
          the worlds of open-source and the Linux ecosystem.
        </p>
        <p className="py-1">
          About four years ago, I began a deep dive into{" "}
          <span className="italic">Javascript</span> and{" "}
          <span className="italic">Typescript</span> that evolved into a passion
          for full-stack web development. While I've explored Angular and
          Vue.js, I found that React truly clicked for me. Coming from a C
          background, its structured, component-based architecture and
          declarative approach felt intuitive and powerful.
        </p>
        <p className="py-1">
          Since then, I've focused on exploring the modern web stack. I am
          proficient in developing both front-end and back-end solutions,
          utilizing a range of tools from specialized libraries like Redux,
          Axios, and Framer Motion, to comprehensive frameworks such as Next.js
          and Express.js. My back-end skills also extend to Python, where I have
          experience with Django and Flask.
        </p>
      </div>
      <div className={paraStyle}>
        <p className="py-1">
          Beyond web development, I have a strong background in embedded systems
          and low-level languages. I used and still enjoy to code things for the
          Arduino platform with C++. It really made me grasp how to manage
          performance in such a limited-resource device; memory management was a
          must to achieve smooth performance. It was really necessary in the
          understanding of how the software interacts with hardware.
        </p>
        <p className="py-1">
          Also, during my time as a student at{" "}
          <a
            href="https://www.42network.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000080] hover:underline"
          >
            42 Network
          </a>
          , I had an intensive year and a half of C programming. The
          project-based curriculum allowed me to develop strong technical
          foundations, from building my own C functions library from scratch to
          creating graphical programs. The fast-paced environment significantly
          sharpened both my technical abilities and essential soft skills like
          problem-solving, discipline, and collaboration.
        </p>
      </div>
      <div className={paraStyle}>
        <p className="py-1">
          I'm always there to explore new corners of the tech world. This has
          led me to build mobile apps with Dart and Flutter, experiment with
          game development in Unity and C#, and even use Lua to customize my
          Debian setup to be just right. I also automated a lot of tasks using
          n8n workflows
        </p>
        <p className="py-1">
          When I'm not in my code editor, I'm often diving into the world of
          network security. I find the challenge of ethical hacking and testing
          network defenses to be a captivating puzzle—and don't worry, my
          methods are strictly professional!
        </p>
        <p className="py-1">
          I also have some DevOps knowledge focused on automating and
          streamlining the software development lifecycle. My experience
          includes implementing CI/CD pipelines using tools like GitHub Actions
          to automate testing and deployments. I am proficient with
          containerization technologies such as Docker for creating consistent
          development environments and have experience orchestrating services
          with Docker Compose.
        </p>
      </div>
      <div className="flex justify-center mb-6">
        <button onClick={toggleContent} className={sharedButtonClass}>
          My Other Side
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
