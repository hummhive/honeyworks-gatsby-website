import React from 'react';
import { HummContext } from '@hummhive/gatsby-plugin-hummhive-react-web-data';

const Copyright = () => {
  const { state } = React.useContext(HummContext);
  const { hive  } = state;
  return (
    <div className="copyright">
    © 2021 {hive?.name} - All Rights Reserved.
</div>
  );
};

export default Copyright;
