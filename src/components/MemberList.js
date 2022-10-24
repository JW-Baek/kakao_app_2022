import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MemberList({ id, name, email, img, bio }) {
  return (
    <>
      <li>
        <Link to={'/chatting'}
              state={{ name, email, img }}>
          <span className="profile_img">
            <img src={img} alt={name} />
          </span>
          <span className="profile_name">{name}</span>
          <span className="profile_messages">{bio}</span>
        </Link>
      </li>
    </>
  );
}

MemberList.propTypes = {
  id : PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
  email : PropTypes.string.isRequired,
  bio : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired
}

export default MemberList;