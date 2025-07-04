import React from "react";

export default function About() {
  return (
    <>
      <h1 className="w-full text-center text-5xl font-serif py-2 shadow-sm">About Me</h1>
      <div className="container mx-auto py-10 font-serif px-5">
        <ul className="list-disc list-inside text-slate-700 space-y-3 text-lg my-8">
          <li>Developed 4+ real-world web apps using React & Tailwind CSS</li>
          <li>
            Built a modern e-commerce site{" "}
            <strong className="text-orange-600">BalajiMart</strong> using MERN
            Stack
          </li>
          <li>
            Implemented secure login system using <strong>JWT</strong> and{" "}
            <strong>bcrypt</strong>
          </li>
          <li>
            Added full <strong>Admin Panel</strong> for product, order & user
            management
          </li>
          <li>
            Used <strong>Redux Toolkit</strong> for global state management
          </li>
          <li>
            Integrated REST APIs using Node.js, Express.js, and MongoDB Atlas
          </li>
          <li>
            Deployed backend on{" "}
            <strong className="text-blue-700">Render</strong> and frontend on{" "}
            <strong className="text-blue-700">Netlify</strong>
          </li>
          <li>
            Created personal portfolio, to-do app & landing page UI using React
          </li>
          <li>
            Comfortable with Git, GitHub, and responsive design best practices
          </li>
        </ul>

        <p className="text-lg text-slate-700 leading-7">
          I'm a passionate{" "}
          <span className="font-semibold text-orange-600">
            Frontend Developer
          </span>{" "}
          currently leveling up as a{" "}
          <span className="underline font-medium">Full Stack Developer</span>. I
          enjoy converting ideas into responsive, high-performing, and secure
          web apps. From UI design to authentication and backend integration — I
          love building real-world digital solutions.
        </p>

        <p className="text-md italic mt-4 text-slate-600">
          ⚡ <strong>BalajiMart</strong> is my most advanced project — featuring
          MERN stack, Admin Authority, secure JWT-based login, and complete
          deployment. It reflects my ability to manage real-world app complexity
          with clean code and professional standards.
        </p>

        <div className="mt-6">
          <a
            href="https://balajimart.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md transition"
          >
            🔗 Visit BalajiMart Live
          </a>
        </div>
        <h2 className="text-2xl font-semibold mt-8 text-orange-600">
          Education
        </h2>
        <ul className="list-disc list-inside text-slate-700 mt-2">
          <li>
            Bachelor of Computer Applications (BCA) – [Shekhawati Group Of
            Institution Sikar]
          </li>
          <li>Year: 2022 – Present</li>
        </ul>
        <p className="text-lg text-slate-700 leading-7 mt-7">
          I'm a BCA student at{" "}
          <span className="font-semibold text-orange-600">
            Shekhawati Group of Institution, Sikar
          </span>
          , and a self-taught Frontend Developer passionate about crafting
          real-world applications using <strong>React</strong> and{" "}
          <strong>Tailwind CSS</strong>.
        </p>
      </div>
    </>
  );
}
