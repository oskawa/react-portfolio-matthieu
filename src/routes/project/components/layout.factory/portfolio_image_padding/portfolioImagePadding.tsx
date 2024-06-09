export function PortfolioImagePadding({ ...props }) {
  if (props) {
    const backgroundImageStyle = {
      backgroundImage: `url(${props.image.url})`,
      backgroundSize: props.isContain ? 'contain' : 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      aspectRatio: '16/9',
      margin: props.isContain ? '0 40px 10px 40px' : '40px 40px 0 40px',
      // Add any other styles you want for the div
      border: props.isContain ? '1px solid black' : '',
      borderRadius: props.isContain ? '20px' : '',
    };
    return <div style={backgroundImageStyle}></div>;
  }

}