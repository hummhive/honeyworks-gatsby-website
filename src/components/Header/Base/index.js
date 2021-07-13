import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../icons/logo';
import {
  BaseContainer,
  TitleContainer,
  ButtonsContainer,
  Button,
} from './styled';
import { navigate } from 'gatsby';

// eslint-disable-next-line react/display-name
const Base = React.forwardRef(({ hive, isLoggedIn, setStage }, ref) => {
  return (
    <div ref={ref}>
      <BaseContainer>
        <TitleContainer onClick={() => navigate('/')}>
          <Logo size={28} />
          <h2>{hive?.name}</h2>
        </TitleContainer>
        <ButtonsContainer>
          {isLoggedIn ? (
            <Button onClick={() => setStage(4)}>Account</Button>
          ) : (
            <>
              <Button onClick={() => setStage(1)}>Join</Button>
              <Button onClick={() => setStage(3)}>Sign In</Button>
            </>
          )}
        </ButtonsContainer>
      </BaseContainer>
    </div>
  );
});

Base.propTypes = {
  hive: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  setStage: PropTypes.func,
};

export default Base;
