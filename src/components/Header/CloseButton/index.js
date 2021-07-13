import React from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';
import { Button } from './styled';

const CloseButton = ({ activeStage, showingStage, delay = 0, onClick }) => {
  const closeSpring = useSpring({
    opacity: activeStage === showingStage ? 1 : 0,
    delay: activeStage === showingStage ? delay : 0,
    config: {
      mass: 1,
      tension: 210,
      friction: 10,
      velocity: 1,
      clamp: true,
    },
  });

  return (
    <>
      {activeStage === showingStage && (
        <Button style={closeSpring} onClick={onClick}>
          X
        </Button>
      )}
    </>
  );
};

CloseButton.propTypes = {
  activeStage: PropTypes.number,
  showingStage: PropTypes.number,
  delay: PropTypes.number,
  onClick: PropTypes.func,
};

export default CloseButton;
