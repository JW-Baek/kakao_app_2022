import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Nav from '../components/Nav';

import '../styles/Find.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faBluetoothB } from '@fortawesome/free-brands-svg-icons';
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Find() {
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
          <h1>Find</h1>
          <div className="left_item">
            <NavLink to="/">Edit</NavLink>
          </div>
          <div className="right_item">
            <FontAwesomeIcon icon={faCog} />
          </div>
        </div>
      </header>

      <main>

        <ul className="find_method">
          <li>
            <Link to="">
              <span><FontAwesomeIcon icon={faAddressBook} /></span>
              Find
            </Link>
          </li>

          <li>
            <Link to="">
            <span><FontAwesomeIcon icon={faQrcode} /></span>
              QR Code  
            </Link>
          </li>

          <li>
            <Link to="">
              <span><FontAwesomeIcon icon={faMobileAlt} /></span>
              Shake
            </Link>
          </li>

          <li>
            <Link to="">
              <span><FontAwesomeIcon icon={faEnvelope} /></span>
              Invite via SNS
            </Link>
          </li>
        </ul>

        <section className="recommend_section">
          <header><h2>Recommended Friends</h2></header>
          <ul>
            <li>You have no recommended friends.</li>
          </ul>
        </section>

      </main>
      
      <Nav />
    </>
  );
}

export default Find;