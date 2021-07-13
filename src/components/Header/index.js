import React from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';
import { useMeasure } from 'react-use';
import { HummContext } from 'gatsby-plugin-hummhive-react-web-data';
import Base from './Base';
import Groups from './Groups';
import Join from './Join';
import JoinSuccess from './JoinSuccess';
import Signin from './Signin';
import Account from './Account';
import { HeaderContainer, AnimationWrapper } from './styled';

const Header = ({ initialStage = 0 }) => {
  const { state, actions } = React.useContext(HummContext);
  const { hive, groups, memberKeysBase64, isLoggedIn } = state;

  const [didInit, setDidInit] = React.useState(false);
  const [stage, setStage] = React.useState(initialStage);

  const [baseRef, baseSize] = useMeasure();
  const [groupsRef, groupsSize] = useMeasure();
  const [joinRef, joinSize] = useMeasure();
  const [joinSuccessRef, joinSuccessSize] = useMeasure();
  const [signinRef, signinSize] = useMeasure();
  const [accountRef, accountSize] = useMeasure();

  React.useEffect(() => {
    if (!groups) actions.getGroups();
  }, []);

  React.useEffect(() => {
    const initialheight =
      initialStage === 1 ? groupsSize.height : baseSize.height;

    if (!didInit && initialheight > 0) setDidInit(true);
  }, [baseSize.height, groupsSize.height]);

  const getHeight = () => {
    switch (stage) {
      case 0:
        return baseSize.height;
      case 1:
        return groupsSize.height;
      case 2:
        return joinSize.height;
      case 3:
        return signinSize.height;
      case 4:
        return accountSize.height;
      case 5:
        return joinSuccessSize.height;
      default:
        return 0;
    }
  };

  const containerSpring = useSpring({
    immediate: !didInit,
    height: getHeight(),
  });
  const baseSpring = useSpring({
    opacity: stage === 0 ? 1 : 0,
  });
  const groupsSpring = useSpring({
    transform: stage === 1 ? 'translateY(0px)' : 'translateY(-100px)',
    opacity: stage === 1 ? 1 : 0,
  });
  const joinSpring = useSpring({
    transform: stage === 2 ? `scale(1)` : `scale(0)`,
    opacity: stage === 2 ? 1 : 0,
    delay: stage === 2 ? 200 : 0,
  });
  const signinSpring = useSpring({
    transform: stage === 3 ? `scale(1)` : `scale(0)`,
    opacity: stage === 3 ? 1 : 0,
    delay: stage === 3 ? 300 : 0,
  });
  const accountSpring = useSpring({
    transform: stage === 4 ? `scale(1)` : `scale(0)`,
    opacity: stage === 4 ? 1 : 0,
    delay: stage === 4 ? 300 : 0,
  });
  const joinSuccessSpring = useSpring({
    transform: stage === 5 ? `scale(1)` : `scale(0)`,
    opacity: stage === 5 ? 1 : 0,
    // delay: stage === 2 ? 200 : 0,
  });

  return (
    <>
      <HeaderContainer style={containerSpring} height={baseSize.height}>
        <AnimationWrapper
          style={{ ...baseSpring, zIndex: stage === 0 ? 2 : 1 }}
        >
          <Base
            ref={baseRef}
            hive={hive}
            isLoggedIn={isLoggedIn}
            setStage={setStage}
          />
        </AnimationWrapper>
        <AnimationWrapper
          style={{ ...groupsSpring, zIndex: stage === 1 ? 2 : 1 }}
        >
          <Groups
            ref={groupsRef}
            hive={hive}
            groups={groups}
            activeStage={stage}
            setStage={setStage}
          />
        </AnimationWrapper>
        <AnimationWrapper
          style={{ ...joinSpring, zIndex: stage === 2 ? 2 : 1 }}
        >
          <Join
            ref={joinRef}
            hive={hive}
            joinHive={actions.joinHive}
            activeStage={stage}
            setStage={setStage}
          />
        </AnimationWrapper>
        <AnimationWrapper
          style={{ ...signinSpring, zIndex: stage === 3 ? 2 : 1 }}
        >
          <Signin
            ref={signinRef}
            activeStage={stage}
            signin={actions.login}
            setStage={setStage}
          />
        </AnimationWrapper>
        <AnimationWrapper
          style={{ ...accountSpring, zIndex: stage === 4 ? 2 : 1 }}
        >
          <Account
            ref={accountRef}
            hive={hive}
            activeStage={stage}
            setStage={setStage}
          />
        </AnimationWrapper>
        <AnimationWrapper
          style={{ ...joinSuccessSpring, zIndex: stage === 5 ? 2 : 1 }}
        >
          <JoinSuccess
            ref={joinSuccessRef}
            hive={hive}
            memberKeysBase64={memberKeysBase64}
            setStage={setStage}
          />
        </AnimationWrapper>
      </HeaderContainer>
    </>
  );
};

Header.propTypes = {
  initialStage: PropTypes.number,
};

export default Header;
