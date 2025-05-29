import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar'
import Slideshow from './Components/slideshow'
import About from './Components/about'
import Developers from './Components/developvers'
import Footer from './Components/footer'
import VoiceInput from './Components/Voiceinput';



function Home() {
  return (
    <>
      <Slideshow />
      <About />
      <Developers />
      <Footer />
    </>
  );
}

function App() {
  const [count, setCount] = useState(0)
  const [ttsText, setTtsText] = useState('');
  const [recognizedCommand, setRecognizedCommand] = useState('');

  const handleCommand = (command) => {
    const lower = command.toLowerCase();
  
    if (lower.includes("open youtube")) {
      window.open("https://youtube.com", "_blank");
    } else if (lower.includes("play")) {
      const song = lower.split("play")[1]?.trim();
      if (song) {
        const speak = new SpeechSynthesisUtterance(`Playing ${song} on YouTube`);
        window.speechSynthesis.speak(speak);
        const query = encodeURIComponent(`${song} site:youtube.com`);
        // Use Google redirect to go to first YouTube result
        window.open(`https://www.google.com/search?q=${query}&btnI`, "_blank");
      } else {
        const speak = new SpeechSynthesisUtterance("Please say the song name after 'play'");
        window.speechSynthesis.speak(speak);
      }
    } else if (lower.includes("search for")) {
      const query = lower.split("search for")[1];
      window.open(`https://www.google.com/search?q=${query}`, "_blank");
    } else if (lower.includes("what time is it")) {
      const now = new Date();
      const speak = new SpeechSynthesisUtterance(`The time is ${now.toLocaleTimeString()}`);
      window.speechSynthesis.speak(speak);
    } else if (lower.includes("read this text")) {
      const text = "This is some placeholder text. You can change it.";
      const speak = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speak);
    } else if (lower.includes("go home")) {
      window.location.href = "/";
    } else {
      const speak = new SpeechSynthesisUtterance(`Sorry, I don't understand: ${command}`);
      window.speechSynthesis.speak(speak);
    }
  };
  
  
  
  


  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/voice" element={<VoiceInput onCommand={handleCommand} />} />

    </Routes>
  </Router>
  )
}

export default App
