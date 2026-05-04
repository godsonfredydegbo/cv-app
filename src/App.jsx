import { useState } from "react" 
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVPreview from "./components/CVPreview";

function App() {
    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [education, setEducation] = useState({
        school: "",
        degree: "",
        startDate: "",
        endDate: ""
    })

    const [experience, setExperience] = useState({
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
    })

    const [isEditing, setIsEditing] = useState("true")


    return (
    
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">

                {isEditing ? (
                    <>
                        <h1 className="text-2xl font-bold mb-4">Edit your CV</h1>

                        <GeneralInfo
                            data={generalInfo}
                            setData={setGeneralInfo}
                        />
                        <Education
                            data={education}
                            setData={setEducation}
                        />
                        <Experience
                            data={experience}
                            setData={setExperience}
                        />

                        <button 
                            onClick={() => setIsEditing(false)}
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-6"
                        >
                            Submit
                        </button>
                    </>
                ) : (
                    <>
                        <CVPreview
                            generalInfo={generalInfo}
                            education={education}
                            experience={experience}
                        />
                        
                        <button 
                            onClick={() => setIsEditing(true)}
                            className="bg-gray-500 text-white px-4 py-2 rounded mt-6"
                            >
                                Edit
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default App
