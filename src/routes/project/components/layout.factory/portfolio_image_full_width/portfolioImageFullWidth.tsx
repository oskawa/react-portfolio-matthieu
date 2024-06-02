import React from 'react';

export function PortfolioImageFullWidth({ ...props }) {
  if (props) {

    const backgroundImageStyle = {
      backgroundImage: `url(${props.image.url})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      aspectRatio: '16/9'
      // Add any other styles you want for the div
    };
    return <div style={backgroundImageStyle}></div>;
  }
}