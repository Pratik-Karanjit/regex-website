import React, { useState } from 'react';
import '../ProjectCSS/styles.css';
import FirstNameRegex from './FirstNameRegex';
import LastNameRegex from './LastNameRegex';
import NumberRegex from './NumberRegex';
import PasswordRegex from './PasswordRegex';
import EmailRegex from './EmailRegex';

const Tabs = () => {
  // State to control the active tab
  const [activeTab, setActiveTab] = useState('menu1');

  // Function to handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  // Content for each tab
  const tabContents = {
    menu1: <EmailRegex></EmailRegex>,
    menu2: <PasswordRegex></PasswordRegex>,
    menu3: <NumberRegex></NumberRegex>,
    menu4: <LastNameRegex></LastNameRegex>,
    menu5:<FirstNameRegex></FirstNameRegex>,
  };

  return (
    <div className="container1">
      <h1>Some popular Regex</h1>
      <ul className="nav nav-pills nav-fill navtop">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'menu1' ? 'active' : ''}`}
            href="#menu1"
            onClick={() => handleTabChange('menu1')}
          >
            Email
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'menu2' ? 'active' : ''}`}
            href="#menu2"
            onClick={() => handleTabChange('menu2')}
          >
            Password
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'menu3' ? 'active' : ''}`}
            href="#menu3"
            onClick={() => handleTabChange('menu3')}
          >
            Number
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'menu4' ? 'active' : ''}`}
            href="#menu4"
            onClick={() => handleTabChange('menu4')}
          >
            Last Name
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'menu5' ? 'active' : ''}`}
            href="#menu5"
            onClick={() => handleTabChange('menu5')}
          >
            First Name
          </a>
        </li>
      </ul>
      <div className="tab-content mt-3">
        {tabContents[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
