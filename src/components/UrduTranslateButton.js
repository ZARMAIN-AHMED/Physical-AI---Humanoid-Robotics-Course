import React, { useState } from 'react';

function UrduTranslateButton() {
  const [isUrdu, setIsUrdu] = useState(false);
  const [buttonText, setButtonText] = useState('Translate to Urdu');
  const [displayedText, setDisplayedText] = useState('This is a sample text.');

  const englishText = 'This is a Physical AI & Humanoid Robotics — Essentials.';
  const urduText = 'یہ ایک فزیکل اے آئی اور ہیومنائیڈ روبوٹکس — بنیادی اصول ہے۔'; // Sample Urdu translation

  const toggleLanguage = () => {
    if (isUrdu) {
      setButtonText('Translate to Urdu');
      setDisplayedText(englishText);
    } else {
      setButtonText('Switch to English');
      setDisplayedText(urduText);
    }
    setIsUrdu(!isUrdu);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={toggleLanguage} style={{
        padding: '10px 15px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: isUrdu ? '#28a745' : '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease'
      }}>
        {buttonText}
      </button>
      <p style={{ marginTop: '10px', fontSize: '18px' }}>
        {displayedText}
      </p>
    </div>
  );
}

export default UrduTranslateButton;