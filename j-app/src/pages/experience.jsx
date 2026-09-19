import "../styles/home.css"; 

const Experience = () => {
  return (
    <div className="w-full overflow-x-hidden px-2">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-full">
            
            {/**first section */}
            <li>
                <div className="timeline-start pt-4 pr-2 md:pr-8 xl:pr-36 w-full flex justify-end">
                    <div className="flex flex-col gap-4 items-end pr-0 w-full">
                        <div className="hover-3d w-full flex justify-end">
                            <div className="mockup-code bg-white text-black w-[85vw] max-w-[320px] xl:max-w-[420px] border border-gray-200 hover:bg-[#2038ae] hover:text-white shadow-xl text-xs xl:text-base">
                                <pre data-prefix="$"><code>Meta</code></pre>
                                <pre data-prefix="$"><code>June 2026 - September 2026</code></pre>
                                <pre data-prefix="$" className="bg-[#7f93f7]"><code>Quality Assurance Engineer</code></pre>
                                <pre data-prefix=">"><code>Spearheaded testing for AI models.</code></pre>
                                <pre data-prefix=">"><code>Evaluating prompt architecture for games.</code></pre>
                                <pre data-prefix=">"><code>Validated AI accuracy and logic.</code></pre>
                            </div>
                        </div>

                        <div className="hover-3d w-full flex justify-end">
                            <div className="mockup-code bg-white text-black w-[85vw] max-w-[320px] xl:max-w-[420px] border border-gray-200 hover:bg-[#2038ae] hover:text-white shadow-xl text-xs xl:text-base">
                                    <pre data-prefix="$"><code>Vibrosonics - <strong>Project</strong></code></pre>
                                    <pre data-prefix="$"><code>September 2025 - June 2026</code></pre>
                                    <pre data-prefix="$" className="bg-[#7f93f7] "><code>UI/UX Developer</code></pre>
                                    <pre data-prefix="$" className="hover:bg-[#7f93f7]">
                                        <code>
                                            <a 
                                                href="https://github.com/udellc/Vibrosonics" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="hover:underline"
                                            >
                                                github.com/Vibrosonics
                                            </a>
                                        </code>
                                    </pre>
                                    <pre data-prefix=">"><code>Built wearable audio-to-haptic device.</code></pre>
                                    <pre data-prefix=">"><code>Developed React/Preact WiFi dashboard.</code></pre>
                            </div>
                        </div>

                        <div className="hover-3d w-full flex justify-end">
                            <div className="mockup-code bg-white text-black w-[85vw] max-w-[320px] xl:max-w-[420px] border border-gray-200 hover:bg-[#2038ae] hover:text-white shadow-xl text-xs xl:text-base">
                                <pre data-prefix="$"><code>Trimble</code></pre>
                                <pre data-prefix="$"><code>June 2025 - September 2025</code></pre>
                                <pre data-prefix="$" className="bg-[#7f93f7]"><code>Software Testing Engineer Intern</code></pre>
                                <pre data-prefix=">"><code>Engineered RESTful API endpoints.</code></pre>
                                <pre data-prefix=">"><code>Authored 200+ automated API and UI tests.</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="font-sans-serif timeline-end text-left pt-4 pl-4 md:pl-8 xl:pl-36 text-[#2038ae] w-full">
                    <h1 className="text-xl xl:text-4xl">previously</h1>
                    <span className="hover-woosh cursor-default block">
                        <h1 className="text-3xl xl:text-7xl italic animate-woosh woosh-delay-2 leading-tight">Quality Assurance<br /> Engineer</h1>
                    </span>
                    <h1 className="text-xl xl:text-4xl">at Meta</h1>
                </div>
                <hr />
            </li>

            {/**second section */}
            <li>
                <hr />
                <div className="timeline-end mb-10 text-left md:text-start pt-4 pl-4 md:pl-8 xl:pl-36 w-full flex justify-start">
                    <div className="flex flex-col gap-4 items-start pl-0 w-full">
                        <div className="hover-3d w-full flex justify-start">
                            <div className="mockup-code bg-white text-black w-[85vw] max-w-[320px] xl:max-w-[440px] border border-gray-200 hover:bg-[#2038ae] hover:text-white shadow-xl text-xs xl:text-base">
                                <pre data-prefix="$"><code>Alpha Omicron Pi - <strong>Project</strong></code></pre>
                                <pre data-prefix="$"><code>December 2024 - December 2025</code></pre>
                                <pre data-prefix="$" className="bg-[#7f93f7]"><code>Data Analyst</code></pre>
                                <pre data-prefix="$" className="hover:bg-[#7f93f7]">
                                    <code>
                                        <a 
                                            href="https://github.com/mannbella/recruitment_project" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            github.com/RecruitmentProject
                                        </a>
                                    </code>
                                </pre>
                                <pre data-prefix=">" className="whitespace-normal break-words px-4"><code>Engineered Python processing pipelines.</code></pre>
                                <pre data-prefix=">" className="whitespace-normal break-words px-4"><code>Converted data into strategic insights.</code></pre>
                            </div>
                        </div>

                        <div className="hover-3d w-full flex justify-start">
                            <div className="mockup-code bg-white text-black w-[85vw] max-w-[320px] xl:max-w-[440px] border border-gray-200 hover:bg-[#2038ae] hover:text-white shadow-xl text-xs xl:text-base">
                                <pre data-prefix="$"><code>SHRB Lab</code></pre>
                                <pre data-prefix="$"><code>February 2024 - June 2026</code></pre>
                                <pre data-prefix="$" className="bg-[#7f93f7]"><code>Systems Data Engineer</code></pre>
                                <pre data-prefix=">" className="whitespace-normal break-words px-4"><code>Automated data ingestion for 50+ sensors.</code></pre>
                                <pre data-prefix=">" className="whitespace-normal break-words px-4"><code>Created high-volume visual analytics.</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="timeline-start text-left md:text-right pt-4 pr-4 md:pr-8 xl:pr-36 text-[#2038ae] w-full">
                    <h1 className="text-xl xl:text-4xl">worked at the </h1>
                    <span className="hover-woosh cursor-default block">
                        <h1 className="text-4xl xl:text-7xl italic animate-woosh woosh-delay-2 leading-tight">SHRB Lab</h1>
                    </span>
                    <h1 className="text-xl xl:text-4xl">for over two years</h1>
                </div>
                <hr />
            </li>

            {/**third section */}
            <li>
                <hr />
                <div className="timeline-start mb-10 pt-4 pr-4 md:pr-8 xl:pr-36 w-full flex justify-end">
                    <div className="flex flex-col gap-4 items-end pr-0 w-full">
                        <div className="hover-3d w-full flex justify-end">
                            <div className="mockup-code bg-white text-black w-[85vw] max-w-[320px] xl:max-w-[420px] border border-gray-200 hover:bg-[#2038ae] hover:text-white shadow-xl text-xs xl:text-base">
                                <pre data-prefix="$"><code>NASA</code></pre>
                                <pre data-prefix="$"><code>June 2023 - August 2023</code></pre>
                                <pre data-prefix="$" className="bg-[#7f93f7]"><code>Software Development Intern</code></pre>
                                <pre data-prefix=">"><code>Visualized TEMPO satellite data.</code></pre>
                                <pre data-prefix=">"><code>Integrated atmospheric data to ArcGIS.</code></pre>
                            </div>
                        </div>

                        <div className="hover-3d w-full flex justify-end">
                            <div className="mockup-code bg-white text-black w-[85vw] max-w-[320px] xl:max-w-[420px] border border-gray-200 hover:bg-[#2038ae] hover:text-white shadow-xl text-xs xl:text-base">
                                <pre data-prefix="$"><code>URSA</code></pre>
                                <pre data-prefix="$"><code>February 2023 - June 2023</code></pre>
                                <pre data-prefix="$" className="bg-[#7f93f7]"><code>Undergraduate Researcher</code></pre>
                                <pre data-prefix=">"><code>Facilitated HCI wearable research.</code></pre>
                                <pre data-prefix=">"><code>Synthesized qualitative datasets.</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="timeline-end text-left pt-4 pl-4 md:pl-8 xl:pl-36 text-[#2038ae] w-full">
                    <h1 className="text-xl xl:text-4xl">interned at</h1>
                    <span className="hover-woosh cursor-default block">
                        <h1 className="text-4xl xl:text-7xl italic animate-woosh woosh-delay-2 leading-tight">NASA Langley</h1>
                    </span>
                    <h1 className="text-xl xl:text-4xl">my freshman year</h1>
                </div>
                <hr />
            </li>

            {/**fourth section */}
            <li>
                <hr />
                <div className="timeline-end mb-10 text-left md:text-start pt-4 pl-4 md:pl-8 xl:pl-36 w-full flex justify-start">
                    <div className="flex flex-col gap-4 items-start pl-0 w-full">
                        <div className="hover-3d w-full flex justify-start">
                            <div className="mockup-code bg-white text-black w-[85vw] max-w-[320px] xl:max-w-[440px] border border-gray-200 hover:bg-[#2038ae] hover:text-white shadow-xl text-xs xl:text-base">
                                <pre data-prefix="$"><code>Oregon State University</code></pre>
                                <pre data-prefix="$"><code>September 2022 - June 2026</code></pre>
                                <pre data-prefix="$" className="bg-[#7f93f7]"><code>Bachelor's of Science in Computer Science</code></pre>
                                <pre data-prefix=">"><code>Emphasis in Data Science</code></pre>
                                <pre data-prefix=">"><code>3.07 GPA</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="timeline-start text-left md:text-right pt-4 pr-4 md:pr-8 xl:pr-36 pb-8 text-[#2038ae] w-full">
                    <h1 className="text-xl xl:text-4xl">graduated from </h1>
                    <span className="hover-woosh cursor-default block">
                        <h1 className="text-3xl xl:text-7xl italic animate-woosh woosh-delay-2 leading-tight">Oregon State<br/>University</h1>
                    </span>
                    <h1 className="text-xl xl:text-4xl">in June 2026</h1>
                </div>
                <hr />
            </li>
        </ul>
    </div>
  );
};

export default Experience;