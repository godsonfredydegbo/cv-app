
export default function Experience({data, setData}) {
    function handleChange(e){
        const {name, value} = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    return(
        <div className="flex flex-col gap-4">
            <input 
                type="text"
                name="company"
                value={data.company}
                placeholder="Your Company"
                className="border p-2 rounded" 
                onChange={handleChange}
            />

            <input 
                type="text"
                name="position"
                value={data.position}
                placeholder="Your Position"
                className="border p-2 rounded" 
                onChange={handleChange}
            />

            <input 
                type="text"
                name="responsibilities"
                value={data.responsibilities}
                placeholder="Your Responsibilities"
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