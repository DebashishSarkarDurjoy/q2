

const User = ({ name, id, email, uponClick }) => {
    return (
        <div>
            <h1>{name}</h1>
            <h3> {email} </h3>
            <button type="button" onClick={() => uponClick(id)}>Details</button>
        </div>
    )
}

export default User
