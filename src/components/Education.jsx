
export default function Education({ data, setData }) {

    function handleChange(e){
        const { name, value } = e.target

        setData({
            ...data,
            [name]: value
        })
    }

    return(
        <div className="flex flex-col gap-4">
            <input 
                type="text"
                name="school"
                value={data.school}
                placeholder="Your School"
                className="border p-2 rounded" 
                onChange={handleChange}
            />

            <input 
                type="text"
                name="degree"
                value={data.degree}
                placeholder="Your Degree"
                className="border p-2 rounded" 
                onChange={handleChange}
            />

            <input 
                type="text"
                name="startDate"
                value={data.startDate}
                placeholder="Your Start Date"
                className="border p-2 rounded" 
                onChange={handleChange}
            />

            <input 
                type="text"
                name="endDate"
                value={data.endDate}
                placeholder="Your End Date"
                className="border p-2 rounded" 
                onChange={handleChange}
            />
        </div>
    )
}