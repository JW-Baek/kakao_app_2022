import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

import Nav from '../components/Nav';
import ChatList from '../components/ChatList';
import profileImage from '../data/profileImg.json';

import '../styles/Chats.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faBluetoothB } from '@fortawesome/free-brands-svg-icons';
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'



function Chats() {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const friendsImg = profileImage;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setProfile(null);
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setProfile(response.data); 
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!profile) return null;

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
          <h1>Chats <FontAwesomeIcon icon={faCaretDown} /></h1>
          <div className="left_item">
            <NavLink to="/">Edit</NavLink>
          </div>
          <div className="right_item">
            <FontAwesomeIcon icon={faCog} />
          </div>
        </div>

      </header>

      <main>

        <form className="search_box">
          <fieldset className="search_inner">
            <legend className="blind">검색창</legend>
            <FontAwesomeIcon className='icon' icon={faSearch} />
            <input type="search" name="search" id="search" placeholder="Find friends, Chats, Plus Friends" />
          </fieldset>
        </form>

        <section className="main_section">
          <header className="blind"><h2>Friends</h2></header>

          <ul>
            {profile.map((chat, idx) => (
              <ChatList
                key = {chat.id}
                id = {chat.id}
                name = {chat.name}
                website = {chat.website}
                img = {friendsImg[idx].image}
                message = {friendsImg[idx].message}
              />
            ))}
          </ul>
        </section>

        <div className="chat_fa_btn">
          <Link to=""><FontAwesomeIcon icon={faComment} /></Link>
        </div>

      </main>
      <Nav />
    </>
  );
}

export default Chats;