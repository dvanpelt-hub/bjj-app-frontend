import React from 'react';
import { GithubOutlined, InstagramOutlined, MailOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="text-gray-400 text-sm pb-6 px-4">
      <div className="max-w-screen-md mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6 text-xl">
          <a href="https://instagram.com/yourgym" target="_blank" rel="noopener noreferrer">
            <InstagramOutlined className="hover:text-white transition" />
          </a>
          <a href="mailto:contact@yourgym.com">
            <MailOutlined className="hover:text-white transition" />
          </a>
          <a href="https://github.com/yourgym" target="_blank" rel="noopener noreferrer">
            <GithubOutlined className="hover:text-white transition" />
          </a>
        </div>

        <div className="text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Jiu-Jitsu App</p>
          <p className="text-xs text-gray-600">Tagline • Goes • Here</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
