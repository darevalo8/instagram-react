import { StatusCard } from '../status_card/StatusCard'
import { statusList } from '../../services/statusService'
import './StatusBar.css'

export const StatusBar = () => {

    const status = statusList;

    return (
        <div className="status-wrapper">
            {status.map(({id, profileImg, username}) => (
                <StatusCard key={id} profileImg={profileImg} username={username}/>
            ))}
        </div>
    )
}
