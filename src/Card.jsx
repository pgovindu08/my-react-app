import profile from './assets/profilePic.webp'
function Card(){
    return(
        <div className="card">
            <img className="cardImage" src = {profile} alt="profile picture"></img>
            <h2 className='card-title'>Pranav Govindu</h2>
            <p className='card-text'>An undergrad at UTK majoring in Computer Science</p>
        </div>
    );
}

export default Card