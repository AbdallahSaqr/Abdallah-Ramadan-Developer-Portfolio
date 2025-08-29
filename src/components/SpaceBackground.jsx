import React from 'react';

const SpaceBackground = ({ isDarkMode }) => {
  return (
    <div className={`background ${isDarkMode ? 'space-background' : 'sky-background'}`}>
      {isDarkMode ? (
        <>
          <div className="stars"></div>
          
          {/* Main planets */}
          <div className="planet planet-1"></div>
          <div className="planet planet-2"></div>
          <div className="planet planet-3"></div>
          
          {/* Shooting stars */}
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          
          {/* Additional floating elements */}
          <div className="floating-asteroid asteroid-1"></div>
          <div className="floating-asteroid asteroid-2"></div>
          <div className="floating-asteroid asteroid-3"></div>
          
          {/* Nebula effect */}
          <div className="nebula nebula-1"></div>
          <div className="nebula nebula-2"></div>
        </>
      ) : (
        <>
          {/* Sun */}
          <div className="sun"></div>
          
          {/* Clouds */}
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
          <div className="cloud cloud-4"></div>
          <div className="cloud cloud-5"></div>
          
          {/* Birds */}
          <div className="bird bird-1"></div>
          <div className="bird bird-2"></div>
          <div className="bird bird-3"></div>
        </>
      )}
    </div>
  );
};

export default SpaceBackground;
