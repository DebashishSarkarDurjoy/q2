import Popup from "reactjs-popup";


const popup = ({ id }) => {
    return (
        <Popup position="center">
            <div>Popup content here {id}!!</div>
        </Popup>
    )
}

export default Popup
