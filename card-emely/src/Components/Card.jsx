import './Card.css'
import foto from '../Components/foto.jpeg';

const Card = ({titulo}) => {

    return (
        <>
            <div class="container">
      <div class="cover-photo">
        <img src={foto} alt="" />
      </div>
      <div class="profile-name">Emely Lovo</div>
      <p class="about">User Interface Designer and<br/>front-end developer</p>
      <button class="msg-btn">Message</button>
      <button class="follow-btn">Following</button>
      <div>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-youtube"></i>
        <i class="fab fa-twitter"></i>
      </div>
    </div>
    </>
    )
 }      
export default Card;


