import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../../../Loader';
import { HummHooks } from '@hummhive/gatsby-plugin-hummhive-react-web-data';
import { Image, Container } from './styled';

const ImageBlock = (props) => {
  const variantMetadataId = props.element.variantMetadataIds.large;
  const { blob, isLoading, error } = HummHooks.useBlob(variantMetadataId);

  const [height, setHeight] = React.useState(null);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (!props.element.aspectRatio) return;
      setHeight(ref.current.offsetWidth / props.element.aspectRatio);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [ref.current]);

  const src = props.element.src || blob;

  return (
    <Container ref={ref} height={height}>
      {(error && <p>{error}</p>) ||
        (isLoading && (
          <Loader size={48} isLoading color="rgba(0, 0, 0, 0.3)" />
        )) || <Image src={src} />}
    </Container>
  );
};

ImageBlock.propTypes = {
  element: PropTypes.object,
};

export default ImageBlock;
