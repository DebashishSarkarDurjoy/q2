import Popup from "./Popup"
import { useState } from "react";

const User = ({ prop }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const uponClick = (prop) => {
        console.log(prop.name);
        setIsOpen(!isOpen);
    }


    return (
        <div>
            <h1>{prop.name}</h1>
            <button type="button" onClick={() => uponClick(prop)}>Details</button>
            
            {isOpen && 
                <><Popup prop={prop} />
                <button className="close-icon" type="button" onClick={() => uponClick(prop)}>X</button></>
            }
        </div>
    )
}

export default User
