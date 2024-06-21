import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Jeffreychenha from './Jeffreychenha';
import PropTypes from 'prop-types';

const Header = ({ currentPage, jeffreychenhaColor }) => {
  const navigate = useNavigate();

  const onNavigate = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  const onLinkedinRectIconClick = useCallback(() => {
    window.location.href = 'https://www.linkedin.com/in/jeffrey-chen-537155173/';
  }, []);

  const onGithubIconClick = useCallback(() => {
    window.location.href = 'https://github.com/pewapplepie';
  }, []);

  const onInstagramFilledIconClick = useCallback(() => {
    window.location.href = 'https://www.instagram.com/mortyismaltipoo?utm_source=qr';
  }, []);

  return (
    <header className="w-full flex flex-row items-start justify-between mt-4 mb-10 pt-4 px-8 pb-4 box-border gap-4 text-left text-base text-blue font-newsreader">
      <div className="flex flex-col items-start justify-start cursor-pointer" onClick={() => onNavigate('/')}>
        <Jeffreychenha className={jeffreychenhaColor} />
      </div>
      <div className="flex flex-row items-start justify-start gap-10 text-center text-base text-black font-inter">
        <div className="flex flex-col items-start justify-start pt-2">
          <div
            className={`relative leading-[21px] inline-block cursor-pointer ${currentPage === 'about' ? 'text-blue font-bold underline' : ''}`}
            onClick={() => onNavigate('/about-me')}
          >
            About Me
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-2">
          <div
            className={`relative leading-[21px] inline-block cursor-pointer ${currentPage === 'blog' ? 'text-blue font-bold underline' : ''}`}
            onClick={() => onNavigate('/blog')}
          >
            Blogs
          </div>
        </div>
        <img
          className="h-10 w-10 cursor-pointer"
          loading="lazy"
          alt="LinkedIn"
          src="/linkedinrect.svg"
          onClick={onLinkedinRectIconClick}
        />
        <img
          className="h-10 w-10 cursor-pointer"
          loading="lazy"
          alt="GitHub"
          src="/github.svg"
          onClick={onGithubIconClick}
        />
        <img
          className="h-10 w-10 cursor-pointer"
          loading="lazy"
          alt="Instagram"
          src="/instagramfilled.svg"
          onClick={onInstagramFilledIconClick}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  currentPage: PropTypes.string,
  jeffreychenhaColor: PropTypes.string,
};

export default Header;
