function UserGreeting(){
    if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
}

export default UserGreeting