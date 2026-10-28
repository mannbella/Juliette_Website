import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/header.css";

const Application = ({company_logo, company, title, location, duration, description, b1, b2, b3}) => {
    return (
        <div>
            <div className="flex flex-row gap-16 justify-center">
                <div className="flex justify-start">
                    <img 
                    src={company_logo}
                    alt="CompanyLogo"
                    className="w-90 h-90 rounded-full object-cover"
                    />
                </div>
        
                <div className="flex flex-col pt-20">
                    <h1>{company}</h1>
                    <h1 className="text-2xl"><strong>{title}</strong></h1>
                    <h1 className="italic">{location} • {duration}</h1>
                    <p className="subtitle w-160 pt-2">
                        {description}
                        <div className="pl-16">
                            <li>{b1}</li>
                            <li>{b2}</li>
                            <li>{b3}</li>
                        </div>
                    </p>
                </div>
            </div>
        </div> 
    );
};

export default Application;