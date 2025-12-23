import profilePic from './assets/image.png'

function Card(){

    return(
        <div className='card'>
            <img className="card-Image" src={profilePic} alt='profile pic'></img>
            <h2 className="gammer-name">Lakiki</h2>
            <p className="about-gamer">Giant Programmer</p>
        </div>
    );
}

export default Card