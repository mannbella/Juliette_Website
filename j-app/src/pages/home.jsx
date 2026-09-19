import React from "react";
import "../styles/home.css"; 
import profilePic from "../assets/juliette.JPEG";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <> 

    <div className="flex flex-row items-center w-full min-h-screen">
      <div className="flex-1 flex p-4 scale-75">
        <div className="mockup-phone border-[#AA336A]">
          <div className="mockup-phone-camera"></div>
          <div className="mockup-phone-display">
            <img alt="wallpaper" src={profilePic} />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="status-tag text-center pl-8">
          HOUSTON, TX • OPEN TO OPPORTUNITIES
        </div>

        <div className="flex-1 flex top-1/3 text-9xl text-center font-bold pr-24 italic hover-woosh">
          <h1>JULIETTE<br />VALVERDE</h1>
        </div>

        <div className="status-tag pt-9 text-center pr-16">
          MULTIMEDIA PRODUCTION INTERN @ NASA JSC
        </div>
      </div>

    </div>

    
      <div className="carousel carousel-end">
        <div className="carousel-item relative group">
          <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Drink" />
          
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-2xl font-bold text-center">ice cream cone</span>
          </div>
        </div>

        <div className="carousel-item relative group">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Drink" />

          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-2xl font-bold text-center">pink grapes</span>
          </div>
        </div>

        <div className="carousel-item relative group">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Drink" />

          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-2xl font-bold text-center">lemon</span>
          </div>
        </div>

        <div className="carousel-item relative group">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Drink" />

          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-2xl font-bold text-center">blue orange</span>
          </div>
        </div>

        <div className="carousel-item relative group">
          <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Drink" />

          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-2xl font-bold text-center">pineapple</span>
          </div>
        </div>

        <div className="carousel-item relative group">
          <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Drink" />
          
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-2xl font-bold text-center">cherry</span>
          </div>
        </div>

        <div className="carousel-item relative group">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            alt="Drink" />
        
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-2xl font-bold text-center">strawberry</span>
          </div>
        </div>
      </div>

      <section className="about-content">
          <div className="bg-base-200 flex flex-col">
            <div className="w-full text-white py-16 px-4 flex flex-col items-center">
              <h1>About Me</h1>
              <p className="about-subtitle px-32 bg-AA336A">
                I'm a Software and QA Automation Engineer with a B.S. in Computer Science, 
                specializing in automated data pipelines, generative AI validation, 
                and complex hardware-software integrations. <br />
                <br />
                My engineering philosophy is rooted in building scalable and human-centered solutions.
                Throughout my career, I have specialized in translating ambiguous requirements into 
                concrete technological systems across highly diverse environments. At Meta, I have validated
                frontier generative AI ecosystems, architected automated prompt-generation systems, and engineered
                multi-step LLM workflows. At Trimble, I scaled enterprise-level UI and API testing frameworks
                to ensure seamless backend integration and continuous software delivery. <br />
                <br />
                Beyond quality assurance, I am deeply passionate about creating and utilizing technology that has real, community-focused impacts.
                My work as a Systems Data Engineer at the Sustainable, Healthy, and Resilient Buildings Lab involved managing real-time telemetry and data
                pipelines for networks of environmental sensors. Additionally, my experience engineering the UI/UX for Vibrosonics, an open-source wearable device
                that translates sound into tactile vibrations for the hard-of-hearing community, solidified my commitment to functional accessibility and inclusive design. <br />
                <br />
                I am driven by the opportunity to solve interdisciplinary challenges to better the communities around me. As a Portland local, I bring a highly collaborative, adaptable, 
                and forward-thinking approach to every technical team I join.
              </p>
            </div>
          </div>
        </section>
    </> 
  );
}

export default Home;