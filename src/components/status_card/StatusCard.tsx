import './StatusCard.css'

interface StatusCardInterface {
    profileImg?: string
    username?: string
}

export const StatusCard = ({ profileImg = "", username = "" }: StatusCardInterface) => {
    return (
        <div className="status-card">
            <div className="profile-pic">
                <div className="background-white">
                    <img src={profileImg} alt="" />
                </div>
            </div>
            <p className="username">{username}</p>
        </div>
    )
}
