
export default function GeneralInfo({ data, setData}) {

    function handleChange (e) {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value 
        })
    }

    return (
        <div className="flex flex-col gap-4">
            <input 
                type="text" 
                name="name"
                value={data.name}
                placeholder="Your Name"
                className="border p-2 rounded"
                onChange={handleChange}
            />

            <input 
                type="email" 
                name="email"
                value={data.email}
                placeholder="Your Email"
                className="border p-2 rounded"
                onChange={handleChange}
            />

            <input 
                type="text" 
                name="phone"
                value={data.phone}
                placeholder="Your Phone"
                className="border p-2 rounded"
                onChange={handleChange}
            />
        </div>
    )

}