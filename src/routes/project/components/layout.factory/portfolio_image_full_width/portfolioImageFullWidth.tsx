import React from 'react';

export function PortfolioImageFullWidth({ ...props }) {
  if (props) {

    const backgroundImageStyle = {
      backgroundImage: `url(${props.image.url})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      // Add any other styles you want for the div
    };
    return <div style={backgroundImageStyle}></div>;
  }
}