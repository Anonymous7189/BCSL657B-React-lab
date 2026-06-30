import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css'
import img from './img.jpg'

const App = () => {
  return (
    <div className="App">
      <ProfileCard
        name="Abhishek Kumar"
        bio="I am a passionate software developer with a love for creating dynamic and user-friendly applications. I enjoy working with React and exploring new technologies."
        profilePicture={img}
      />
    </div>
  );
};

export default App;