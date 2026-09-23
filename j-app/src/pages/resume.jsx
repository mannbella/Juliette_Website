import jvRes from "../assets/JulietteValverdeResume.pdf";

const Resume = () => {
    return (
        <div className="hover-3d w-full min-h-screen pt-24 px-4 pb-10 flex justify-center bg-base-100">
            
            <iframe 
                src={jvRes}
                className="w-full max-w-4xl h-[80vh] rounded-lg shadow-lg border border-base-300 transition-all duration-500 ease-in-out hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(170,51,106,0.5)] cursor-pointer" 
                title="Resume"
            />
            
        </div>
    );
};

export default Resume;