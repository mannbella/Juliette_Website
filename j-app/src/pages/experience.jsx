import "../styles/home.css"; 
import is from "../assets/is_dark.png";
import dsi from "../assets/dsi_dark.png";

const Experience = () => {
  return (
    <div className="w-full overflow-x-hidden px-2 flex flex-row justify-center pl-44">
        <div className="flex flex-col ">
            <div className="flex flex-col items-center scale-70 origin-top-left pt-32 pr-16">
        
                <div className="relative mockup-phone border-[#AA336A] transition-all duration-500 ease-in-out hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(170,51,106,0.5)] cursor-pointer">
                    <a 
                    href="https://www.instagram.com/osuimpactstudio/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 block"
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
                    > @osuimpactstudio </a>
                    </h1>
        
            </div>
        </div>

        <div className="flex flex-col">
            <div className="flex flex-col items-center scale-70 origin-top-left pt-32 pr-16">
        
                <div className="relative mockup-phone border-[#AA336A] transition-all duration-500 ease-in-out hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(170,51,106,0.5)] cursor-pointer">
                    <a 
                    href="https://www.instagram.com/osu_designforsocialimpact/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 block"
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
                    > @osu_designforsocialimpact </a>
                </h1>
        
            </div>
        </div>

    </div>
  );
};

export default Experience;