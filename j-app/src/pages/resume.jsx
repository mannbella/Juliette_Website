const Resume = () => {
    return (
        <div className="hover-3d w-full min-h-screen pt-24 px-4 pb-10 flex justify-center bg-base-100">
            
            <iframe 
                src="/IsabellaMann_Resume.pdf" 
                className="w-full max-w-4xl h-[80vh] rounded-lg shadow-lg border border-base-300" 
                title="Resume"
            />
            
        </div>
    );
};

export default Resume;