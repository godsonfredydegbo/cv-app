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


    return (
        <div className="p-6">
            <h1>Hello</h1>
            <GeneralInfo
                data={generalInfo}
                setData={setGeneralInfo}
            />
        </div>
    );
}

export default App
