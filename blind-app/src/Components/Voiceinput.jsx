import { useState } from 'react';
import '../styles/voice.css'

export default function VoiceInput({ onCommand }) {
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);

  const handleListen = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Your browser does not support Speech Recognition');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript((prev) => prev + '\n' + result); // Append instead of replacing
      onCommand(result);
      
      
const speak = new SpeechSynthesisUtterance(`You said: ${result}`);
window.speechSynthesis.speak(speak);// You can also pass the whole transcript if needed
    };

    recognition.start();
  };

 



  return (
    <div className="voice-wrapper">
        <div className="voice-container">
        <button
    onClick={handleListen}
    className={`listen-button ${listening ? 'listening' : ''}`}
  >
    {listening ? '🎧 Listening...' : '🎤 Start Listening'}
  </button>

  <div className="transcript-box">
    <h3 className="transcript-title">📝 Transcript:</h3>
    <p className="transcript-text">
      {transcript || 'Say something to get started...'}
    </p>
  </div>
        </div>
 
</div>

   
  );
}

