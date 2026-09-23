import "../styles/home.css"; 
import is from "../assets/is_dark.png";
import dsi from "../assets/dsi_dark.png";

const Experience = () => {
  return (
    <div className="flex flex-col">
        
        <div className="relative z-10 w-full flex flex-row justify-center pl-44">
            
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
           <div className="mockup-browser bg-base-100 w-full border-4 border-base-300 pointer-events-auto">
                <div className="mockup-browser-toolbar">
                    <div className="input">https://urmom.com</div>
                </div>
                <div className="grid place-content-center h-80">put something here?</div>
            </div>
        </div>

    </div>    
  );
};

export default Experience;