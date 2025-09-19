import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpotify,
  faSoundcloud,
  faApple,
  faYoutube,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

export default function IconLinks({ links, className }) {
  const iconMap = {
    spotify: faSpotify,
    soundcloud: faSoundcloud,
    apple: faApple,
    youtube: faYoutube,
    instagram: faInstagram,
    twitter: faTwitter
  };

  return (
    <div className={`icon-links ${className || ''}`}>
      {links.map((link, i) => (
        <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={iconMap[link.icon]} size="2x" />
        </a>
      ))}
    </div>
  );
}
