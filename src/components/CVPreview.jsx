import { useState,useEffect } from "react"; 

export default function CVPreview({ generalInfo, education, experience }) {
    return(
        <div className="bg-white p-6 shadow-md mt-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold">{generalInfo.name}</h2>
                <p>{generalInfo.email}</p>
                <p>{generalInfo.phone}</p>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold">Education</h3>
                <p><strong>School:</strong> {education.school} </p>
                <p><strong>Degree:</strong> {education.degree} </p>
                <p>
                    <strong>Dates:</strong> {education.school} 
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold">Experience</h3>
                <p><strong>Company:</strong> {experience.company} </p>
                <p><strong>Position:</strong> {experience.position} </p>
                <p><strong>Responsibilities:</strong> {experience.responsibilities} </p>
                <p>
                    <strong>Dates:</strong> {experience.startDate} - {experience.endDate} 
                </p>
            </div>
        </div>
    )
}