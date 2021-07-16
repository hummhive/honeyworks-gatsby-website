import React from 'react';
import { HummContext } from 'gatsby-plugin-hummhive-react-web-data';
import { Container } from './styled';

export default function NoPlublicContent() {
  const { state } = React.useContext(HummContext);
  const { isLoggedIn, hive } = state;

  return (
    <Container>
      {isLoggedIn ? (
        <p>
          Your request to join {hive?.name} is pending. Once you are let into
          the Hive, you can get access to stories, media, and content.
        </p>
      ) : (
        <p>There are no public stories or media here!</p>
      )}
    </Container>
  );
}

NoPlublicContent.propTypes = {};
