export default function Footer() {
    return (
        <div>
            <div className="w-full h-auto md:flex bg-white">
                <div className="md:w-1/2 m-5">
                    <div className="w-auto h-auto flex flex-col items-center">
                        <div className="flex gap-1">
                            <img className="w-16 h-16" src="src/assets/RUHREClogo.png" alt="RUREClogo"/>
                            <h1 className="text-6xl font-bold">RUSREC</h1>
                        </div>
                        <div className="flex flex-col gap-2 my-5">
                            <div>
                                <p className="text-lg">Please send us your ideas or suggestions! Any feedback would be
                                    appreciated.</p>
                            </div>
                            <div className="flex">
                                <img className="w-6 h-6" src="src/assets/location_icon.png" alt="icon"/>
                                <p className="text-lg"><b>RUSREC</b>, Faculty of Science, University of Ruhuna, Matara,
                                    Srilanka 81000</p>
                            </div>
                            <div className="flex items-center">
                                <img className="w-6 h-6" src="src/assets/mail_icon.png" alt="icon"/>
                                <a target="_blank" href="rusrecscifac@gmail.com"
                                   className="text-lg underline">rusrecscifac@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <a target="_blank" href="https://www.youtube.com/c/RuhunaScienceResearchCircle">
                                <img className="w-10 h-10" src="src/assets/youtube_icon.png" alt="youtubeicon"/>
                            </a>
                            <a target="_blank" href="https://www.facebook.com/RuhunaScienceResearchCircle/">
                                <img className="w-10 h-10" src="src/assets/facebook_icon.png" alt="youtubeicon"/>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/company/rusrec">
                                <img className="w-10 h-10" src="src/assets/linkedin_icon.png" alt="youtubeicon"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 flex m-5 md:border-l-[3px] md:border-[#D9D9D9]">
                    <div className="w-1/2 flex justify-center">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                            <a href="">Home</a>
                            <a href="">Past Symposia</a>
                            <a href="">Other Projects</a>
                            <a href="">Meet The Team</a>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold mb-2">Popular Links</h3>
                            <a target="_blank" href="https://www.ruh.ac.lk/index.php/en/">University of Ruhuna</a>
                            <a target="_blank" href="https://alpha.ruh.ac.lk/FacultyofScience/">Faculty of Science,
                                UOR</a>
                            <a target="_blank" href="https://www.lib.ruh.ac.lk/">UOR Library</a>
                            <a target="_blank" href="https://www.researchgate.net/">ResearchGate®</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D9D9D9] p-3">
                <p className="text-center">
                    &copy;Copyright <b>2024-2033 RUSREC</b> - All Right Reserved
                </p>
            </div>
        </div>
    );
}