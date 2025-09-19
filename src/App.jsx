import React, { useState } from 'react';
import Card from './components/Card.jsx';
import IconLinks from './components/IconLinks.jsx';
import './App.css';

const mainLinks = [
  { 
    href: 'https://soundcloud.com/pghmoor/sets/testdummy?si=064bd81e2d574d269af4e29cff5a769b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', 
    icon: 'soundcloud' 
  }
];

const cardData = [
  { 
    title: "z4ck n' cody (makkgin)",
    links: [
      { href: 'https://soundcloud.com/pghmoor/zach-n-cody-p-makkgin-3?in=pghmoor/sets/testdummy&si=bbd51f6bc05c4c538216dd93d6f37867&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: 'soundcloud' }
    ]
  },
  { 
    title: 'br4gg1n r1ghts (perc40)', 
    links: [
      { href: 'https://soundcloud.com/pghmoor/braggin-rights-p-perc40-1?in=pghmoor/sets/testdummy&si=ce1adf9fa5674597a80d950a42d6f703&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: 'soundcloud' }
    ]
  },
  {
    title: 'Oms (makkgin)',
    links: [
      { href: 'https://soundcloud.com/pghmoor/oms-p-makkgin-3?in=pghmoor/sets/testdummy&si=28b3214b230141f3ba3cc2ce9737dadf&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: 'soundcloud' }
    ]
  },
  {
    title: 'f4m1ly guy (perc40)',
    links: [
      { href: 'https://soundcloud.com/pghmoor/hard-2-see-p-perc40-3?in=pghmoor/sets/testdummy&si=2fead2b658be4bd18a7508e4f50ab8f8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: 'soundcloud' }
    ]
  },
  {
    title: 'tr13d 3v3ryth1ng (makkgin)',
    links: [
      { href: 'https://soundcloud.com/pghmoor/tried-everything-p-makk?in=pghmoor/sets/testdummy&si=45131755fa9a4f6c97c327b7f303cc9b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: 'soundcloud' }
    ]
  },
  {
    title: 'p0pp1n t4gs (perc40)',
    links: [
      { href: 'https://soundcloud.com/pghmoor/p0pp1n-t4gs-perc40?in=pghmoor/sets/testdummy&si=6d80d09d9dba4a2092ca45cb3b6e312e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: 'soundcloud' }
    ]
  },
  {
    title: 'd0 0r d13 (moor)',
    links: [
      { href: 'https://soundcloud.com/pghmoor/rest-p-me-v2?in=pghmoor/sets/testdummy&si=df30646984e34105831ecb6c62142175&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: 'soundcloud' },
    ]
  },
  {
    title: "m0sh1n' (makkgin)",
    links: [
      { href: 'https://soundcloud.com/pghmoor/moshing-p-makkgin-1?in=pghmoor/sets/testdummy&si=c6bd334f8888406eb9b28112ae7c7ada&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: 'soundcloud' },
    ]
  },
  {
    title: 'pr0ud (makkgin)',
    links: [
      { href: 'https://soundcloud.com/pghmoor/proud-p-makkgin-2?in=pghmoor/sets/testdummy&si=8219dce932884ed8b2b00eb315e3aae1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: 'soundcloud' },
    ]
  }
];

const footerLinks = [
  { href: 'https://www.instagram.com/reallnikka123/', icon: 'instagram' },
  { href: 'https://soundcloud.com/pghmoor', icon: 'soundcloud' },
  { href: '#', icon: 'twitter' },
];

function App() {
  const [tapped, setTapped] = useState(false);

  return (
    <div className="app">
      <img
        src="testdummy.png"
        alt="Tap here"
        className={tapped ? 'tapped' : ''}
        onClick={() => setTapped(true)}
      />

      {tapped && <h1 className="fade-in">TESTDUMMY</h1>}

      {tapped && (
        <>
          <IconLinks links={mainLinks} className="main-links" />
          
          <div className="youtube-embed fade-in">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/D_S7wtGT5No?autoplay=1&playsinline=1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </>
      )}

      {tapped && (
        <div className="cards">
          {cardData.map((card, i) => (
            <Card key={i} title={card.title} links={card.links} />
          ))}
        </div>
      )}

      <footer>
        <p>&copy; {new Date().getFullYear()} Moor</p>
        <IconLinks links={footerLinks} />
      </footer>
    </div>
  );
}

export default App;
