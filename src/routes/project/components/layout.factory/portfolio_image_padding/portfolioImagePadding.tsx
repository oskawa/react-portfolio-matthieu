export function PortfolioImagePadding({ ...props }) {
  if (props) {
    const backgroundImageStyle = {
      backgroundImage: `url(${props.image.url})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      margin: '40px 40px 0 40px'
      // Add any other styles you want for the div
    };
    return <div style={backgroundImageStyle}></div>;
  }

}