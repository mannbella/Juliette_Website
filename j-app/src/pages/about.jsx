import "../styles/home.css"; 
import photo from "../assets/headshot.png"

const About = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

        <div class="chat chat-start p-4">
            <div class="chat-bubble">
                omg Bella's so well rounded
            </div>
        </div>
        
        {/**first section */}
        <li>
            <div className="timeline-middle md:text-end">
                <div className="flex flex-col xl:flex-row gap-6 items-center xl:items-start justify-end">
                    

                    <div className="card bg-base-100 h-155 w-96 shadow-sm">
                        <figure>
                            <img
                            src={aoii}
                            alt="AOII" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            She's Greek!
                            </h2>
                            <p>Not literally. But, she is a fresh alumn of Alpha Omicron Pi, Alpha Rho Chapter!</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
        </li>

        {/**second section */}
        <li>
            <hr />

            <div className="timeline-middle mb-10 md:text-end">
                <div className="flex flex-col xl:flex-row gap-6 items-center xl:items-start justify-end">
                    <div className="card bg-base-100 h-94 w-80 shadow-md shrink-0">
                        <figure>
                            <img src={japan} 
                            alt="Japan" />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-sm">She's Well Traveled!</h2>
                            <p className="text-xs">A true adventurer, she has traveled to Japan and Spain in the last 6 months, and hopes to visit more incredible countries soon!</p>
                        </div>
                    </div>

                    
                </div>
            </div>

            <hr />
        </li>

        {/**third section */}
        <li>
            <hr />
            <div className="timeline-middle mb-10 md:text-end">
                    <div className="flex flex-col xl:flex-row gap-6 items-center xl:items-start justify-end">
                        
                        <div className="card bg-base-100 h-99 w-96 shadow-sm">
                            <figure>
                                <img
                                src={hiking}
                                alt="Hiking" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                She's Outdoorsy!
                                </h2>
                                <p>Born and raised in the PNW, she loves a good hike, campsite, or off-roading adventure!</p>
                            </div>
                        </div>
                    </div>
                </div>
            <hr />
        </li>

        {/**fourth section */}
        <li>
            <hr />
                <div className="timeline-middle mb-10 md:text-end">
                    <div className="flex flex-col xl:flex-row gap-6 items-center xl:items-start justify-end">
                        <div className="card bg-base-100 w-80 h-100 shadow-md shrink-0">
                            <figure>
                                <img src={grad} 
                                alt="Grad" />
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-sm">She's Well Educated!</h2>
                                <p className="text-xs">A curious mind everywhere she goes, she knows her stuff!</p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            <hr />
        </li>
    </ul>
  );
};

export default About;