
const popup = ({ prop }) => {

    // const keys = Object.keys(prop);
    // keys.forEach((key) => console.log(key, prop[key]));
   
    return (
        <div className="popup-box">
            <div className="box">
                <h3> ID: <i><u>{prop.id}</u></i> </h3>
                <h5> Name: <i><u>{prop.name}</u></i> </h5>
                <h5> Username: <i><u>{prop.username}</u></i> </h5>
                <h5> Phone: <i><u>{prop.phone}</u></i> </h5>
                <h5> Address: <i><u>{prop.address.suite}, {prop.address.street}, {prop.address.city}, {prop.address.zipcode}</u></i> </h5>
                <h5> Company: <i><u>{prop.company.name}</u></i> </h5>
                <h5> Website: <i><u>{prop.website}</u></i> </h5>
            </div>
        </div>
    )
}

export default popup
