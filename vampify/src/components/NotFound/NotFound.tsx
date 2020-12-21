import React, { FunctionComponent } from 'react';

// * components
import { Result, Button } from 'antd';
import { Helmet } from 'components/Helmet';

//* modules
import { Link } from 'react-router-dom';

// * constants
import * as PATHS from 'constants/paths';

export const NotFound: FunctionComponent = () => {
  return (
    <>
      <Helmet title={'Not found'} />
      <Result
        status="404"
        title="404"
        subTitle={'Title'}
        extra={renderExtra()}
      />
    </>
  );

  function renderExtra() {
    return (
      <Link to={PATHS.routes.home}>
        <Button type="primary">Back to Home</Button>
      </Link>
    );
  }
};
