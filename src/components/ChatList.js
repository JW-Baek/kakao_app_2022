import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function ChatList({ id, name, message, img }) {
  return (
    <>
      <li>
        <NavLink to={'/chatting'}
                state={{ id, name, img }}>
          <span className="chats_img">
            <img src={img} alt={name} />
          </span>
          <span className="chats_cont">
            <span className="chats_name">{name}</span>
            <span className="chats_latest">{message}</span>
          </span>
          <span className="chats_time"><span>15</span>:<span>30</span></span>
        </NavLink>
      </li>
    </>
  );
}

ChatList.propTypes = {
  id : PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
  message : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired
}

export default ChatList;