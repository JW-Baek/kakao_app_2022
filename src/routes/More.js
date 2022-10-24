import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import profileImage from '../data/profileImg.json';

import '../styles/More.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faBluetoothB } from '@fortawesome/free-brands-svg-icons';
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faWonSign } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';



function More() {
  const myImages = profileImage[0];
  return (
    <>
      <header className="header">
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
          <h1>More</h1>
          <div className="left_item"></div>
          <div className="right_item"><FontAwesomeIcon icon={faCog} /></div>
        </div>
      </header>

      <main>
        <section className="user_info">

          <h2 className="blind">사용자 정보</h2>

          <span className="profile_img">
            <img src={myImages.image} alt="My name" />
          </span>

          <span className="profile_info">
            <span className="profile_name">My Name</span>
            <span className="profile_email">Userid@gmail.com</span>
          </span>

          <span className="chat_img">
            <Link to="">
              <FontAwesomeIcon icon={faComment} />
            </Link>
          </span>
        </section>

        <section className="user_menu">
          <h2 className="blind">사용자 메뉴</h2>

          <ul>
            <li>
              <Link to="">
                <span><FontAwesomeIcon icon={faSmile} /></span>
                Emoticons
              </Link>
            </li>

            <li>
              <Link to="">
                <span><FontAwesomeIcon icon={faPalette} /></span>
                Themes
              </Link>
            </li>

            <li>
              <Link to="">
                <span><FontAwesomeIcon icon={faHandPeace} /></span>
                Plus Friends
              </Link>
            </li>

            <li>
              <Link to="">
                <span><FontAwesomeIcon icon={faUserCircle} /></span>
                Account
              </Link>
              </li>
          </ul>
        </section>

        <section className="plus_friends">
          <header>
            <h2>Plus Friends</h2>
            <span><FontAwesomeIcon icon={faInfoCircle} /> Learn More</span>
          </header>

          <ul className="plus_list">
            <li>
              <Link to="">
                <span><FontAwesomeIcon icon={faUtensils} /></span>
                Order
              </Link></li>

            <li>
              <Link to="">
                <span><FontAwesomeIcon icon={faHome} /></span>
                Store
              </Link>
            </li>

            <li>
              <Link to="">
                <span><FontAwesomeIcon icon={faTv} /></span>
                TV Channel/Radio
              </Link>
            </li>

            <li>
              <Link to="">
                <span><FontAwesomeIcon icon={faPencilAlt} /></span>
                Creation
              </Link>
            </li>

            <li>
              <Link to="">
                <span><FontAwesomeIcon icon={faGraduationCap} /></span>
                Education
              </Link>
            </li>

            <li>
              <Link to="">
                <span><FontAwesomeIcon icon={faUniversity} /></span>
                Politics/Society
              </Link>
            </li>

            <li>
              <Link to="">
                <span><FontAwesomeIcon icon={faWonSign} /></span>
                Finance
              </Link>
            </li>

            <li>
              <Link to="">
                <span><FontAwesomeIcon icon={faVideo} /></span>
                Movies/Music
              </Link>
            </li>
          </ul>
        </section>

        <section className="more_app">
          <h2 className="blind">앱 더보기</h2>
          <ul>
            <li><Link to=""><span className="app_icon"></span>Kakao Story</Link></li>
            <li><Link to=""><span className="app_icon"></span>Path</Link></li>
            <li><Link to=""><span className="app_icon"></span>Kakao Friends</Link></li>
          </ul>
        </section>
      </main>

      <Nav />
    </>
  );
}

export default More;