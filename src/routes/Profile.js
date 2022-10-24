import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import profileImage from '../data/profileImg.json';

import '../styles/Profile.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faBluetoothB } from '@fortawesome/free-brands-svg-icons';
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';



function Profile() {
  const myProfile = profileImage[0].image;
  return (
    <>
      <header className="header_profile">
        <div className="status_bar">

          <div className="left_item">
            <FontAwesomeIcon icon={faPlane} />
            <FontAwesomeIcon icon={faWifi} />
          </div>

          <div className="center_item">
            <span>15</span>:<span>30</span>
          </div>

          <div className="right_item">
            <FontAwesomeIcon icon={faMoon} />
            <FontAwesomeIcon icon={faBluetoothB} />
            <span>100%</span>
            <FontAwesomeIcon icon={faBatteryFull} />
          </div>
        </div>

        <div className="title_bar">
          <div className="left_item">
            <NavLink to="/"><FontAwesomeIcon icon={faXmark} /></NavLink>
          </div>
          <div className="right_item"><FontAwesomeIcon icon={faUser} /></div>
        </div>
      </header>

      <main className="main">
        <div className="background"></div>

        <section className="profile">

          <div className="profile_img">
            <img src={myProfile} alt="profile images" />
          </div>

          <div className="profile_cont">
            <span className="profile_name">My Name</span>
            <input type="email" className="profile_email" placeholder="UserID@gmail.com" />
            <ul className="profile_menu">
              <li><Link to="">
                <span className="icon"><FontAwesomeIcon icon={faComment} /></span>
                My Chatroom
              </Link></li>
              <li><Link to=""><span className="icon"><FontAwesomeIcon icon={faPencilAlt} /></span>Edit Profile</Link></li>
            </ul>
          </div>

        </section>
      </main>
    </>
  );
}

export default Profile;