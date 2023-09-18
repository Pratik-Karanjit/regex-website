// EmailRegex.js
import React, { useState } from 'react';

const EmailRegex = () => {
  const regexPattern = '^[A-Za-z0-9+_.-]+@(.+)$'; // Modify this pattern as needed

  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textArea = document.createElement('textarea');
    textArea.value = regexPattern;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Email Address Validation</h5>
        <p className="card-text">
          <strong>Pattern:</strong> {regexPattern}
          <br />
        </p>
        <button
          className="btn btn-primary"
          onClick={handleCopyClick}
          disabled={copied}
        >
          {copied ? 'Copied!' : 'Copy Pattern'}
        </button>
      </div>
    </div>
  );
};

export default EmailRegex;
