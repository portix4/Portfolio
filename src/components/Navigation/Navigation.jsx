import './Navigation.css'
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom'
import ProfilePic from './../../assets/profile-pic.jpeg'

const Navigation = () => {
    return (
        <Navbar>
            <div className="header">
                <div className="div-header-logo-img">
                    {/* <div className="profile-pic-png" /> */}
                    <img className='profile-pic' src={ProfilePic} alt="profile picture" />
                </div>
                <Link to={'#'} className="pablo link">PABLO PORTILLO</Link>
                <Link to={'#'} className="list-item-home link">HOME</Link>
                <Link to={'#'} className="list-item-about link">ABOUT</Link>
                <Link to={'#'} className="list-item-projects link">PROJECTS</Link>
                <Link to={'#'} className="list-item-contact link">CONTACT</Link>
            </div >
        </Navbar >
    )
}

export default Navigation