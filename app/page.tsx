"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./components/ResumePDF";

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <div
      className={`flex flex-col items-center px-4 sm:px-1 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Dark Mode Toggle Button */}
      <label className="flex items-center cursor-pointer m-4">
        <span className="mr-2 text-sm">{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
        <div className="relative">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="sr-only"
          />
          <div
            className={`w-8 h-4 bg-gray-300 rounded-full shadow-inner ${
              isDarkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`relative top-[-16px] w-4 h-4 bg-black  rounded-full shadow transform transition-transform ${
              isDarkMode ? "translate-x-5 bg-white" : "translate-x-0 bg-black"
            }`}
          ></div>
        </div>
      </label>

      {/* Resume Content */}
      <div
        ref={resumeRef}
        className={`shadow-lg p-6 sm:p-8 rounded-lg w-full max-w-4xl ${
          isDarkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-900"
        }`}
      >
        {/* Header Section */}
        <header className="text-center mb-6">
          <h1 className="text-xl sm:text-2xl font-bold">Azeez Oyegoke</h1>
          <div className={`text-xs sm:text-sm ${isDarkMode ? "text-[white]" : "text-gray-700"}`}>
            <Link
              className={`links hover:underline ${isDarkMode ? "text-[white]" : "text-gray-700"}`}
              href="mailto:oyegoke.a18@example.com"
            >
              oyegoke.a18@gmail.com
            </Link>{" "}
            <Link
              className="links hover:underline"
              href="https://wa.me/2348136023232"
              target="_blank"
            >
              | 08136023232 |
            </Link>{" "}
            <Link
              className="links hover:underline"
              href="https://www.linkedin.com/in/azeez-oyegoke-434716204/"
              target="_blank"
            >
              LinkedIn
            </Link>{" "}
            |
            <Link
              className="links hover:underline"
              href="https://github.com/harteyhitman"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-semibold border-b pb-2">
            Professional Summary
          </h2>
          <p className={`mt-2 text-xs sm:text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
            Highly skilled Frontend Developer with over 3+ years of experience
            in building dynamic and responsive web applications using React,
            Next.js, and TypeScript. Passionate about creating seamless user
            experiences and implementing scalable, maintainable code. Strong
            expertise in WordPress development, design system implementation,
            and performance optimization. Experienced in full-stack development
            with NestJS for backend applications. Adept at collaborating with
            cross-functional teams to deliver high-quality software solutions.
            Currently expanding knowledge in backend development, API design,
            and database management to become a full-stack developer.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-semibold border-b pb-2">
            Technical Skills
          </h2>
          <ul className="list-disc pl-5 mt-2 gap-4 text-xs sm:text-sm">
            <li>
              <strong>Frontend:</strong> React.js, Next.js, TypeScript,
              JavaScript (ES6+), HTML5, CSS3, SCSS, Tailwind CSS
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js, NestJS,
              PostgreSQL, REST API development
            </li>
            <li>
              <strong>State Management:</strong> Zustand, Redux
            </li>
            <li>
              <strong>Tools & Platforms:</strong> Git, GitHub, CI/CD, Webpack,
              Figma, Adobe XD
            </li>
            <li>
              <strong>CMS & WordPress:</strong> WordPress theme and plugin
              development, Elementor, Gutenberg
            </li>
            <li>
              <strong>Other Skills:</strong> UI/UX design principles,
              performance optimization, accessibility best practices
            </li>
          </ul>
        </section>

        {/* Work Experience */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-semibold border-b pb-2">
            Work Experience
          </h2>
          <div className="mt-2">
            <h3 className="font-semibold text-xs sm:text-sm">
              Frontend Developer | Rogue Devtech
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">March 2023 - Present</p>
            <ul className="list-disc pl-5 text-xs sm:text-sm">
              <li>
                Developed and optimized user-friendly interfaces using React and
                Next.js for various clients.
              </li>
              <li>
                Implemented component-based architectures for reusability and
                maintainability..
              </li>
              <li>
                Designed and implemented a scalable dashboard for fintech and
                e-commerce applications..
              </li>
              <li>
                Developed APIs using NestJS for a simple blog application and a
                mental health tracking app.
              </li>
              <li>
                Collaborated with designers to translate UI/UX designs into
                functional web applications.
              </li>
              <li>
                Created and customized WordPress themes and plugins to align
                with client requirements.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold text-xs sm:text-sm">
              Frontend Developer (Mentor Partners Website Redesign)
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">November 2024 - Present</p>
            <ul className="list-disc pl-5 text-xs sm:text-sm">
              <li>
                Spearheaded the redesign of the Mentor Partners website using
                WordPress, ensuring a seamless user experience.
              </li>
              <li>
                Integrated a Learning Management System (LMS) for future
                scalability.
              </li>
              <li>
                Employed an iterative development approach, optimizing page
                speed and accessibility.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold text-xs sm:text-sm">
              Frontend Developer (Pichi Finance App - MVP)
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">August 2024</p>
            <ul className="list-disc pl-5 text-xs sm:text-sm">
              <li>
                Developed a minimum viable product (MVP) for Pichi Finance using
                Next.js and TypeScript.
              </li>
              <li>
                Designed and implemented a reusable SortAndSearch component to
                enhance data filtering.
              </li>
              <li>Improved state management and performance optimization.</li>
            </ul>
          </div>
        </section>

        {/* Notable Projects */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-semibold border-b pb-2">
            Notable Projects
          </h2>
          <div className="mt-2">
            <h3 className="font-semibold text-xs sm:text-sm">Simple Product Store</h3>
            <ul className="list-disc pl-5 text-xs sm:text-sm">
              <li>
                Developed a store that lists user information and products with
                age restrictions.
              </li>
              <li>
                Simulated API calls for asynchronous data fetching and
                processing.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold text-xs sm:text-sm">Depression App </h3>
            <ul className="list-disc pl-5 text-xs sm:text-sm">
              <li>
                Designed and developed a full-stack mental health application
                using NestJS and Next.js.
              </li>
              <li>
                Implemented Zustand for state management and SCSS for styling.
              </li>
              <li>
                Developed an admin page, login, and signup functionalities.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold text-xs sm:text-sm">
              TaskMaster (Software Engineering Capstone Project){" "}
            </h3>
            <ul className="list-disc pl-5 text-xs sm:text-sm">
              <li>
                Built a full-stack task management system using Next.js and mock
                data for backend.
              </li>
              <li>
                Implemented user authentication, task creation, and filtering
                functionalities.
              </li>
              <li>
                Deployed frontend on Vercel/Netlify and backend on Fly.io.
              </li>
            </ul>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-semibold border-b pb-2">
            Education & Certifications
          </h2>
          <ul className="text-xs sm:text-sm">
            <li>High National Diploma, Rufus Giwa Polytechnic Owo – 2017</li>
            <li>Software Engineering Capstone Project, 3mtt – 2024</li>
            <li>Backend Development (Ongoing Study)</li>
          </ul>
        </section>

        {/* Additional Sections */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-semibold border-b pb-2">
            Soft Skills
          </h2>
          <ul className="text-xs sm:text-sm">
            <li>Problem-solving & analytical thinking</li>
            <li>Effective communication & collaboration</li>
            <li>Adaptability & continuous learning</li>
            <li>Attention to detail</li>
            <li>Strong project management skills</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-semibold border-b pb-2">
            Languages
          </h2>
          <ul className="text-xs sm:text-sm">
            <li>English (Fluent)</li>
            <li>Yoruba (Fluent)</li>
            <li>Spanish (Beginner - Learning)</li>
            <li>Arabic (Beginner - Learning)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold border-b pb-2">
            Interests
          </h2>
          <ul className="text-xs sm:text-sm">
            <li>Open-source contributions</li>
            <li>Blogging about web development</li>
            <li>Learning backend technologies</li>
            <li>Content creation on food security & natural herbs</li>
          </ul>
        </section>
      </div>
          {/* Download PDF button */}
          <div className="m-4">
        <PDFDownloadLink
          document={<ResumePDF />}
          fileName="Azeez_Oyegoke_Resume.pdf"
          className="bg-blue-600 text-white px-4 py-2  rounded hover:bg-blue-700 transition"
        >
          {({ loading }) => (loading ? "Preparing document..." : "Download PDF")}
    
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Resume;
