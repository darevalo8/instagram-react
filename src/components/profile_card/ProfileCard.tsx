import "./ProfileCard.css"

interface ProfileCardInterface {
    name?: string,
    username?: string,
    img?: string,
    mySelf?: boolean
}

export const ProfileCard = ({name="", username="", img="", mySelf=false}: ProfileCardInterface) => {
    return (
        <div className="profile-card">
            <div className="profile-pic">
                <img src={img} alt="" />
            </div>
            <div className="expand">
                <p className="username">{username}</p>
                <p className="sub-text">{name}</p>
            </div>
            <button className="change-btn">
                {mySelf? "Cambiar": "Seguir"}
            </button>
        </div>
    )
}
