import React from 'react';
import Confetti from 'react-confetti';
import Button from './celebrate';
import HeartToggle from './heartToggle';

class Invite extends React.Component {
  state = {
    showConfetti: false,
    isPlaying: false,
  };

  audio = new Audio('Perfect.mp3');

  handleButtonClick = () => {
    if (!this.showConfetti) {
        this.setState({ showConfetti: true });
        setTimeout(() => {
        this.setState({ showConfetti: false });
        }, 5000); // Confetti will disappear after x seconds
    }
  };

  togglePlay = () => {
    this.setState(prevState => {
      if (prevState.isPlaying) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
      return { isPlaying: !prevState.isPlaying };
    });
  };

  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '100vh'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '110px'}}>
            <button onClick={this.togglePlay} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
            <HeartToggle onToggle={this.togglePlay}/>
            </button>
            <small>{this.state.isPlaying ? 'Pause' : 'Play Groom\'s fav'}</small>
        </div>

        <Button onClick={this.handleButtonClick} buttonText="CELEBRATE" />
        {this.state.showConfetti && (
          <Confetti
            recycle={false}
            numberOfPieces={3000}
            initialVelocityY={40}
            gravity={0.08}
          />
        )}
      </div>
    );
  }
}

export default Invite;
