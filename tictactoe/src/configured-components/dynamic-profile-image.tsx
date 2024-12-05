import "../styling/style.css"
import React, { useState } from "react"

export default interface User {
    name: string;
    message: string;
    profile_pic_url: string;
    image_size: number;
}

export function UserProfile({user}: {user:User})
{
    const[isHovered, setIsHovered] = useState<boolean>(true);

    function handleMouseEnter()
    {
        setIsHovered(true);
    }

    function handleMouseExit()
    {
        setIsHovered(false);
    }


    return (
        <div>
            <img
            src={user.profile_pic_url}
            alt={user.message}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseExit}
            className="avatar"
            />
            {isHovered && (
                <div className="info-card">
                    <p
                    className="p-customize">{user.message}</p>
                </div>
            )}
                
        </div>
    );


}

