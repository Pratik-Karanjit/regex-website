// LastNameRegex.js
import React, { useState } from 'react';

const LastNameRegex = () => {
  const regexPatterns = [
    {
      name: 'Pattern 1',
      pattern: `^[A-Z][a-z]*$`,
    },
    {
      name: 'Pattern 2',
      pattern: '^[A-Za-z\' -]*[A-Za-z]$',
    },
    {
      name: 'Pattern 3',
      pattern: '^[A-Za-zÀ-ÖØ-öø-ÿ]+([ \' -][A-Za-zÀ-ÖØ-öø-ÿ]+)*[A-Za-zÀ-ÖØ-öø-ÿ]$',
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
              Description of the pattern...
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
