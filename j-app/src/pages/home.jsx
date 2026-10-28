import React from "react";
import "../styles/home.css"; 
import { NavLink } from "react-router-dom";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { KineticText } from "@/components/ui/kinetic-text";
import pool from "../assets/pool.JPEG";
import rover from "../assets/rover.JPEG";
import table from "../assets/table.JPEG";
import headshot from "../assets/Jheadshot.JPEG"

function Home() {
  return (
    <> 

    <div className="flex flex-col justify-center items-center w-full min-h-[80vh] pt-10">
      <div className="flex flex-col items-center">
        <h1 className="flex flex-col items-center text-8xl text-center font-['Montserrat'] font-bold leading-none pt-30">
          <KineticText text="JULIETTE" />
          <KineticText text="VALVERDE" />
        </h1>

        <div className="status-tag text-center font-['Montserrat']">
          <TypingAnimation>MULTIMEDIA PRODUCTION INTERN @ NASA JSC</TypingAnimation>
        </div>
      </div>

      <div className="flex flex-row gap-16 justify-center pt-10">
        <div className="flex justify-start">
          <img 
            src={headshot}
            alt="Headshot"
            className="w-90 h-90 rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col items-end pt-20">
            <p className="subtitle w-120">
              Hi! I'm a digital marketer and mutltimedia specialist who is passionate about 
              producing engaging, audience-focused content from concept to excecution. 
              Drawing on my experience driving impactful campaigns for organizations like 
              NASA and Oregon State University, I am excited to translate creative 
              ideas into dynamic multimedia experiences.
            </p>

            <a 
            href="https://www.linkedin.com/in/juliettevalverde04/" 
            className="btn hover:bg-[#AA336A]" 
            target="_blank" 
            rel="noreferrer"
            >
              My LinkedIn
            </a>
        </div>
      </div>
    

    <div className="flex flex-row gap-16 justify-center pt-24">
      <NavLink to="/experience">
        <div className="flex flex-col items-center">
          <div className="relative group aspect-square border-18 border-base-200 w-86 h-86">
            <img 
              src={pool} 
              alt="Pool" 
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="mt-6 text-2xl font-bold transition-all duration-500 ease-in-out hover:-translate-y-4">
            Learn about my experience here!
          </h1>
        </div>
      </NavLink>

      <NavLink to="/resume">
        <div className="flex flex-col items-center">
          <div className="relative group aspect-square border-18 border-base-200 w-86 h-86">
            <img 
              src={table}
              alt="Table" 
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="mt-6 text-2xl font-bold transition-all duration-500 ease-in-out hover:-translate-y-4 cursor-pointer">
            Look at my resume here!
          </h1>
        </div>
      </NavLink>

      <NavLink to="/contact">
        <div className="flex flex-col items-center">
          <div className="relative group aspect-square border-18 border-base-200 w-86 h-86">
            <img 
              src={rover}
              alt="Rover"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-center mt-6 text-2xl font-bold transition-all duration-500 ease-in-out hover:-translate-y-4 cursor-pointer">
            Contact me here!
          </h1>
        </div>
      </NavLink>

    </div>

      <section className="about-content pt-24">
          <div className="flex flex-col">
            <div className="w-full text-white py-16 px-4 flex flex-col items-center">
              <h1>About Me</h1>
              <p className="about-subtitle px-32 bg-AA336A text-center">
                Marketing and video editor with experience producing engaging social media content and professional video productions for 
                Oregon State University, NASA Johnson Space Center, and Multnomah County. Skilled in creating videos from concept to final edit 
                using Adobe Premiere Pro and Final Cut Pro, with experience developing content for Instagram, TikTok, LinkedIn, and YouTube. 
                Passionate about creating audience-focused content that captures attention and drives engagement. 
              </p>
            </div>
          </div>
        </section>

      </div>
    </> 
  );
}

export default Home;