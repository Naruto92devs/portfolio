import React, { useEffect, useState } from 'react';
import contact from '../Images/contact.svg';

const MyLink = ({ initialHref }) => {
  const [href, setHref] = useState(initialHref);

  useEffect(() => {
    const handleResize = () => {
      // Change the link based on screen width
      if (window.innerWidth <= 600) {
        setHref('https://wa.me/923203655413');
      } else {
        setHref(initialHref);
      }
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call the handleResize function once to set the initial href
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [initialHref]); // Re-run the effect if the initialHref changes

  return (
    <div className="contact link">
      <a href={href}>
        <img className="icon" src={contact} alt="logo"/>
        <li>Contact</li>
      </a>
    </div>
  );
};

export default MyLink;
