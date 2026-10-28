import "../styles/home.css"; 
import is from "../assets/is_dark.png";
import dsi from "../assets/dsi_dark.png";
import nasa_logo from "../assets/meatball.jpg"
import { TypingAnimation } from "@/components/ui/typing-animation";
import Application from "@/components/application_template";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const Experience = () => {
  return (
    <div className="flex flex-col">
        
        <div className="relative z-10 w-full flex flex-row justify-center pl-44 pt-20">
            
            <div className="flex flex-col ">
                <div className="flex flex-col items-center scale-[0.7] origin-top-left pt-32 pr-16">
            
                    <div className="relative mockup-phone border-[#AA336A] transition-all duration-500 ease-in-out hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(170,51,106,0.5)] cursor-pointer">
                        <a 
                        href="https://www.instagram.com/osuimpactstudio/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-20 block"
                        aria-label="View Project"
                        ></a>
                        
                        <div className="mockup-phone-camera"></div>
                        <div className="mockup-phone-display">
                            <img alt="wallpaper" src={is} />
                        </div>
                    </div>

                    <h1 className="mt-6 text-4xl font-bold transition-all duration-500 ease-in-out hover:-translate-y-4 cursor-pointer">
                        <a 
                        href="https://www.instagram.com/osuimpactstudio/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="View Project"
                        className="relative z-20"
                        > @osuimpactstudio </a>
                    </h1>
            
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col items-center scale-[0.7] origin-top-left pt-32 pr-16">
            
                    <div className="relative mockup-phone border-[#AA336A] transition-all duration-500 ease-in-out hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(170,51,106,0.5)] cursor-pointer">
                        <a 
                        href="https://www.instagram.com/osu_designforsocialimpact/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-20 block"
                        ></a>
                        
                        <div className="mockup-phone-camera"></div>
                        <div className="mockup-phone-display">
                            <img alt="wallpaper" src={dsi} />
                        </div>
                    </div>

                    <h1 className="mt-6 text-4xl font-bold transition-all duration-500 ease-in-out hover:-translate-y-4 cursor-pointer">
                        <a 
                        href="https://www.instagram.com/osu_designforsocialimpact/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative z-20"
                        > @osu_designforsocialimpact </a>
                    </h1>
            
                </div>
            </div>
        </div>

        <div className="px-32 pb-16 -mt-48 pointer-events-none relative z-0">
           <div className="mockup-browser bg-white w-full h-565 border-4 border-base-300 pointer-events-auto">
                <div className="mockup-browser-toolbar">
                    <div className="input"> 
                        https://www.linkedin.com/in/juliettevalverde04/ 
                    </div>
                </div>
                
                <div className="grid place-content-center h-80 pt-265">

                    {/** nasa fall-winter 2026-2027 */}
                    <Application 
                        company_logo={nasa_logo} 
                        company="NASA, Johnson Space Center"
                        title="Multimedia Production Intern"
                        location="Houston, TX" duration="2 years"
                        description="Hi! I'm a digital marketer and mutltimedia specialist who is passionate about producing engaging, 
                            audience-focused content from concept to excecution. 
                            Drawing on my experience driving impactful campaigns for organizations 
                            like NASA and Oregon State University, I am excited to translate creative
                            ideas into dynamic multimedia experiences."
                        b1="first responsibility"
                        b2="second responsibility"
                        b3="third responsibility"
                    />

                    {/** impact studio*/}
                    <Application 
                        company_logo={nasa_logo} 
                        company="Impact Studio, Oregon State University"
                        title="Marketing Assistant"
                        location="Corvallis, OR" duration="2 years"
                        description="Hi! I'm a digital marketer and mutltimedia specialist who is passionate about producing engaging, 
                            audience-focused content from concept to excecution. 
                            Drawing on my experience driving impactful campaigns for organizations 
                            like NASA and Oregon State University, I am excited to translate creative
                            ideas into dynamic multimedia experiences."
                        b1="first responsibility"
                        b2="second responsibility"
                        b3="third responsibility"
                    />

                    {/** nasa fall 2025*/}
                    <Application 
                        company_logo={nasa_logo} 
                        company="NASA, Johnson Space Center"
                        title="Spacesuit & Communications Intern"
                        location="Houston, TX" duration="2 years"
                        description="Hi! I'm a digital marketer and mutltimedia specialist who is passionate about producing engaging, 
                            audience-focused content from concept to excecution. 
                            Drawing on my experience driving impactful campaigns for organizations 
                            like NASA and Oregon State University, I am excited to translate creative
                            ideas into dynamic multimedia experiences."
                        b1="first responsibility"
                        b2="second responsibility"
                        b3="third responsibility"
                    />

                    {/** multnomah county */}
                    <Application 
                        company_logo={nasa_logo} 
                        company="County of Multnomah"
                        title="Central HR Video & Marketing Intern"
                        location="Portland, OR" duration="2 years"
                        description="Hi! I'm a digital marketer and mutltimedia specialist who is passionate about producing engaging, 
                            audience-focused content from concept to excecution. 
                            Drawing on my experience driving impactful campaigns for organizations 
                            like NASA and Oregon State University, I am excited to translate creative
                            ideas into dynamic multimedia experiences."
                        b1="first responsibility"
                        b2="second responsibility"
                        b3="third responsibility"
                    />

                    {/**osu bachelor's 2022-2026*/}
                    <Application 
                        company_logo={nasa_logo} 
                        company="Oregon State University"
                        title="Bachelor's of Science in Marketing"
                        location="Corvallis, OR" duration="4 years"
                        description="Hi! I'm a digital marketer and mutltimedia specialist who is passionate about producing engaging, 
                            audience-focused content from concept to excecution. 
                            Drawing on my experience driving impactful campaigns for organizations 
                            like NASA and Oregon State University, I am excited to translate creative
                            ideas into dynamic multimedia experiences."
                        b1="first responsibility"
                        b2="second responsibility"
                        b3="third responsibility"
                    />
                </div>
            </div>
        </div>

    </div>    
  );
};

export default Experience;