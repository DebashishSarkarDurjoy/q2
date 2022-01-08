
const popup = ({ prop }) => {

    // const keys = Object.keys(prop);
    // keys.forEach((key) => console.log(key, prop[key]));
   
    return (
        <div className="popup-box">
            <div className="box">
                <h3> ID: <i><u>{prop.id}</u></i> </h3>
                <h4> Name: <i><u>{prop.name}</u></i> </h4>
                <h4> Username: <i><u>{prop.username}</u></i> </h4>
                <h5> Phone: <i><u>{prop.phone}</u></i> </h5>
                <h5> Website: <i><u>{prop.website}</u></i> </h5>
                
            </div>
        </div>
    )
}

export default popup
