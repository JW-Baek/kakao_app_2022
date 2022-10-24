import React from 'react';
import { useLocation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

import '../styles/Chatting.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faBluetoothB } from '@fortawesome/free-brands-svg-icons';
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';



function Chatting() {
  const location = useLocation();
  const { name, img } = location.state;
  return (
    <>
      <header className="chatting">
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
          <h1>{name}</h1>
          <div className="left_item">
            <NavLink to="/chats"><FontAwesomeIcon icon={faAngleLeft} /></NavLink>
          </div>
          <div className="right_item">
            <span><FontAwesomeIcon icon={faSearch} /></span>
            <span><FontAwesomeIcon icon={faBars} /></span>
          </div>
        </div>
      </header>

      <main className="chatting">

        <span className="date_info">Monday, October 25, 2021</span>

        <div className="chat_box my">
          <span className="chat">Hello!</span>
          <span className="chat">Hello! This is a test message. Hello!</span>
          <span className="chat">This is a test message.</span>
          <span className="chat_time"><span>16</span>:<span>30</span></span>
        </div>

        <div className="chat_box other">

          <div className="other_info">
            <Link to="">
              <span className="profile_img"><img src={img} alt="profile img" /></span>
            </Link>
            <span className="profile_name">{name}</span>
          </div>

          <span className="chat">And this is an answer</span>
          <span className="chat">And this is an answer And this is an answer</span>
          <span className="chat">And this is an answer</span>
          <span className="chat_time"><span>17</span>:<span>10</span></span>
        </div>
      </main>

      <footer>
        <span className="plus_btn"><Link to=""><FontAwesomeIcon icon={faPlus} /></Link></span>

        <form action="/" method="post">
          <fieldset className="text_box">
            <legend className="blind">채팅 입력창</legend>
            <label className="blind">채팅 입력</label>
            <input type="text" id="chatting" className="text_field" />
            <span className="emoticon_btn"><Link to=""><FontAwesomeIcon icon={faSmile} /></Link></span>
            <span className="voice_btn"><Link to=""><FontAwesomeIcon icon={faMicrophone} /></Link></span>
          </fieldset>
        </form>
        
      </footer>
    </>
  );
}

export default Chatting;