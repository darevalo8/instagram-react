import { ProfileCard } from '../profile_card/ProfileCard'
import { suggestionsList } from '../../services/suggestionsService'
import { user } from '../../services/userService'
import './Suggestions.css'

export const Suggestions = () => {

    const suggestions = suggestionsList;

    return (
        <div className="fixed">
            <ProfileCard name={user.name} username={user.username} img={user.profilePic} mySelf={true}/>
            <p className="suggestion-text">Sugerencias para ti <span className="all-suggestions">Ver todo</span></p>
            {suggestions.map((profile) => 
                (<ProfileCard key={profile.id} name={profile.name} username={profile.username} img={profile.img}/>))}
        </div>
    )
}
