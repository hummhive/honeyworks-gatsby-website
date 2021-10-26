import React from 'react';
import { useStaticQuery, graphql } from "gatsby"; // to query for image data
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';
import { useMeasure } from 'react-use';
import { useLocation } from '@reach/router';
import { HummContext } from '@hummhive/gatsby-plugin-hummhive-react-web-data';
import Base from './Base';
import Groups from './Groups';
import Join from './Join';
import JoinSuccess from './JoinSuccess';
import Signin from './Signin';
import Account from './Account';
import { HeaderContainer, AnimationWrapper, Layout2} from './styled';

const Header = ({ bodyRef, config, initialStage = 0 }) => {
  const location = useLocation();
  const { state, actions } = React.useContext(HummContext);
  const { hive, groups, secretKeyBase64, isLoggedIn } = state;
  const [didInit, setDidInit] = React.useState(false);
  const [stage, setStage] = React.useState(initialStage);

  const [baseRef, baseSize] = useMeasure();
  const [groupsRef, groupsSize] = useMeasure();
  const [joinRef, joinSize] = useMeasure();
  const [joinSuccessRef, joinSuccessSize] = useMeasure();
  const [signinRef, signinSize] = useMeasure();
  const [accountRef, accountSize] = useMeasure();

  const themeConfig = config?.themeSettings;


  const data = useStaticQuery(graphql`{
  banner: file(relativePath: {regex: "/banner/"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
  logoHeader: file(relativePath: {regex: "/logo/"}) {
    childImageSharp {
      gatsbyImageData(height: 40, layout: FIXED)
    }
  }
  logoBanner: file(relativePath: {regex: "/logo/"}) {
    childImageSharp {
      gatsbyImageData(width: 120, height: 120, layout: FIXED)
    }
  }
}
`);
  console.log(data)
  React.useEffect(() => {
    if (!groups) actions.getGroups();
  }, []);

  // lock body scroll for certain stages
  React.useEffect(() => {
    if ([2, 3, 4, 5].includes(stage) && bodyRef.current) {
      bodyRef.current.style.maxHeight = '100vh';
      if (typeof window === 'object') window.scrollTo(0, 0);
    } else {
      bodyRef.current.style.maxHeight = 'unset';
    }
  }, [stage]);

  React.useEffect(() => {
    const initialheight =
      initialStage === 1 ? groupsSize.height : baseSize.height;

    if (!didInit && initialheight > 0) setDidInit(true);
  }, [baseSize.height, groupsSize.height]);

  // open join if there is an invite token
  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    const token = search.get('invite-token');
    if (token) setStage(2);
  }, [location.search]);

  const getHeight = () => {
    switch (stage) {
      case 0:
        return baseSize.height;
      case 1:
        return groupsSize.height + baseSize.height;
      case 2:
        return joinSize.height + baseSize.height;
      case 3:
        return signinSize.height + baseSize.height;
      case 4:
        return accountSize.height + baseSize.height;
      case 5:
        return joinSuccessSize.height + baseSize.height;
      default:
        return 0;
    }
  };

  const containerSpring = useSpring({
    immediate: !didInit,
    height: getHeight(),
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

  return <>
    <HeaderContainer style={containerSpring} height={baseSize.height} stage={stage}>
      <Base
        ref={baseRef}
        logo={data.logoHeader}
        isLoggedIn={isLoggedIn}
        hive={hive}
        location={location}
        activeStage={stage}
        setStage={setStage}
        config={themeConfig}
      />
      {/* <AnimationWrapper
        style={{ ...baseSpring, zIndex: stage === 0 ? 2 : 1 }}
      >
      </AnimationWrapper> */}
      <AnimationWrapper
        baseComponentHeight={baseSize.height}
        className="primaryGradientBg"
        zIndex={stage === 1 ? 2 : 1}
        style={groupsSpring}
      >
        <Groups
          ref={groupsRef}
          hive={hive}
          groups={groups}
          setStage={setStage}
        />
      </AnimationWrapper>
      <AnimationWrapper
        baseComponentHeight={baseSize.height}
        zIndex={stage === 2 ? 2 : 1}
        style={joinSpring}
      >
        <Join
          ref={joinRef}
          hive={hive}
          joinHive={actions.joinHive}
          baseComponentHeight={baseSize.height}
          setStage={setStage}
        />
      </AnimationWrapper>
      <AnimationWrapper
        baseComponentHeight={baseSize.height}
        zIndex={stage === 3 ? 2 : 1}
        style={signinSpring}
      >
        <Signin
          ref={signinRef}
          signin={actions.login}
          baseComponentHeight={baseSize.height}
          setStage={setStage}
        />
      </AnimationWrapper>
      <AnimationWrapper
        baseComponentHeight={baseSize.height}
        zIndex={stage === 4 ? 2 : 1}
        style={accountSpring}
      >
        <Account
          ref={accountRef}
          baseComponentHeight={baseSize.height}
          setStage={setStage}
        />
      </AnimationWrapper>
      <AnimationWrapper
        baseComponentHeight={baseSize.height}
        zIndex={stage === 5 ? 2 : 1}
        style={joinSuccessSpring}
      >
        <JoinSuccess
          ref={joinSuccessRef}
          hive={hive}
          secretKeyBase64={secretKeyBase64}
          baseComponentHeight={baseSize.height}
          setStage={setStage}
        />
      </AnimationWrapper>
    </HeaderContainer>
    {themeConfig?.bannerImage && location.pathname === '/' && stage === 0 && (
      <Layout2>
    <GatsbyImage
      image={data.banner.childImageSharp.gatsbyImageData} />
    {themeConfig.logoImage && (
      <>
      <div className="logo-image"><GatsbyImage image={data.logoBanner.childImageSharp.gatsbyImageData} /></div>
      <div className="logo-heading">{hive?.name}</div>
      </>
    )}
    </Layout2>
    )}
  </>;
};

Header.propTypes = {
  bodyRef: PropTypes.object,
  config: PropTypes.object,
  initialStage: PropTypes.number,
};

export default Header;
