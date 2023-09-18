// LastNameRegex.js
import React, { useState } from 'react';

const LastNameRegex = () => {
  const regexPatterns = [
    {
      name: 'Basic Last Name Pattern',
      pattern: `^[A-Za-z'-]+$`,
    },
    {
      name: 'Strict Last Name Pattern',
      pattern: '^[A-Za-z]+(?:-[A-Za-z]+)?$',
    },
  ];

  const [copied, setCopied] = useState(Array(regexPatterns.length).fill(false));

  const handleCopyClick = (index) => {
    const textArea = document.createElement('textarea');
    textArea.value = regexPatterns[index].pattern;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    const updatedCopied = [...copied];
    updatedCopied[index] = true;
    setCopied(updatedCopied);

    setTimeout(() => {
      const resetCopied = [...updatedCopied];
      resetCopied[index] = false;
      setCopied(resetCopied);
    }, 1500);
  };

  return (
    <div>
      {regexPatterns.map((patternObj, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{patternObj.name}</h5>
            <p className="card-text">
              <strong>Pattern:</strong> {patternObj.pattern}
              <br />
            </p>
            <button
              className="btn btn-primary"
              onClick={() => handleCopyClick(index)}
              disabled={copied[index]}
            >
              {copied[index] ? 'Copied!' : 'Copy Pattern'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastNameRegex;
