import React from "react";

const SpaceBackground = ({ theme = "dark" }) => {
  const backgroundClass = theme === "light" ? "sky-background" : "space-background";
  
  return (
    <div className={`background ${backgroundClass}`}>
      {/* Stars for dark mode */}
      {theme === "dark" && <div className="stars"></div>}
      
      {/* Planets for dark mode only */}
      {theme === "dark" && (
        <>
          <div className="planet planet-1"></div>
          <div className="planet planet-2"></div>
          <div className="planet planet-3"></div>
        </>
      )}
      
      {/* Sun for light mode */}
      {theme === "light" && <div className="sun"></div>}
      
      {/* Shooting stars for dark mode only */}
      {theme === "dark" && (
        <>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
        </>
      )}
    </div>
  );
};

export default SpaceBackground;
