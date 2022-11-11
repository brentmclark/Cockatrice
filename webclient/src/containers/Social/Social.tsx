import KebabIcon from '@material-ui/icons/MoreVert';
import SendIcon from '@material-ui/icons/Send';

import './Social.css'


const buddies = [
    {
        name: 'Brent',
        availability: 'Looking For Games',
        online: true,
        avatar: 'https://placekitten.com/40/40'
    }
]

function Relationships(props) {
    return (
        <section className="social__container">
            <div className="buddies__container">
                <h2>Buddies</h2>
                <div>Search Bar</div>
                {buddies.map(buddy => <Buddy buddy={buddy} />)}
            </div>
        </section>
    )
}

function Buddy(props) {
    const {avatar, name, availability, online} = props.buddy
    return (
        <div className="buddy__container">
            <div className="buddy__avatar">
                <img src={avatar} />
            </div>
            <div className="buddy__details">
                <h4>{name}</h4>
                {online && <p>{availability}</p>}
            </div>
            <div className="buddy__controls">
                <SendIcon />
                <KebabIcon />
            </div>
        </div>
    )
}

export default Relationships