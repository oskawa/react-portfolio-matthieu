export function PortfolioImagePadding({ ...props }) {
  if (props) {
    const backgroundImageStyle = {
      backgroundImage: `url(${props.image.url})`,
      backgroundSize: props.isContain ? 'contain' : 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      aspectRatio: '16/9',
      margin: props.isContain ? '0 40px 0 40px' : '40px 40px 0 40px',
      // Add any other styles you want for the div
    };
    return <div style={backgroundImageStyle}></div>;
  }

}