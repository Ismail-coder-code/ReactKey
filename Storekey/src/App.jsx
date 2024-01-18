import React from 'react';
import './style.css';
const games = [
  { id: 1, title: 'Game 1', price: 19.99, image: 'https://example.com/game1.jpg' },
  { id: 2, title: 'Game 2', price: 29.99, image: 'https://example.com/game2.jpg' },
  { id: 3, title: 'Game 3', price: 39.99, image: 'https://example.com/game3.jpg' },
];

const GameStore = () => {
  const checkout = (title) => {
    const whatsappNumber = '+918383853597';
    const message = encodeURIComponent(`I want to buy ${title} for $${(2)}`);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.location.href = whatsappURL;
  };

  const claimGamePass = () => {
    const whatsappNumber = 'YOUR_PHONE_NUMBER';
    const message = encodeURIComponent('I want to claim the Game Pass for $9.99/month');
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.location.href = whatsappURL;
  };

  return (
    <div>
      <header>
        <h1>Game Key Store</h1>
      </header>

      <div>
        <h2>Game Keys</h2>
        {games.map(game => (
          <div key={game.id} className="game-item">
            <img src={game.image} alt={game.title} />
            <span>{game.title}</span>
            
            <button className="buy-btn" onClick={() => checkout(game.title)}>
              <i className="fab fa-whatsapp whatsapp-icon"></i> Buy on WhatsApp
            </button>
          </div>
        ))}
      </div>

      <div>
        <h2>Game Pass Claim</h2>
        <div className="game-item">
          <img src="https://example.com/gamepass.jpg" alt="Game Pass" />
          <span>Game Pass</span>
          <span>$9.99/month</span>
          <button className="claim-btn" onClick={claimGamePass}>
            <i className="fab fa-whatsapp whatsapp-icon"></i> Claim on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameStore;

// <span>${game.price.toFixed(2)}</span>