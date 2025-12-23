import profilePic from "./assets/image.png";

function Card(){
    return(
        <div className="cards">
            <img src={profilePic} alt ="profile pic"/>
        </div>
    )
}

export default Card;