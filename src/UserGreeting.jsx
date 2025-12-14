import PropTypes from 'prop-types';

function UserGreeting(props){
    
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>

    const logingPrompt = <h2 className="login-prompt">Please log in to continue {props.username}</h2>

    return(props.isLoggedIn ? welcomeMessage : logingPrompt);
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.default = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting