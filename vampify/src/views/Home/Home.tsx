import React, { FunctionComponent } from 'react';

import { Button, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
/* modules */

// * components
import { Helmet } from 'components/Helmet';
import { HealthCheck } from 'components/HealthCheck';
import { Wrapper } from './styles';

const { Header, Content, Footer, Sider } = Layout;

const Dashboard: FunctionComponent = props => {
  function renderImage() {
    return (
      <img
        alt="VAMPY"
        src={require('assets/images/vampy.jpg')}
        className="w-100 self-end shadow-2xl rounded-full flex items-center justify-center "
      />
    );
  }

  function renderFormButton() {
    return (
      <div className="flex justify-end pt-10">
        <Link to="/join">
          <Button type="primary">Join Now!</Button>
        </Link>
      </div>
    );
  }

  function renderDetailContent() {
    return (
      <div className="w-2/3 divide-y-4 divide-yellow-600 divide-dashed">
        <div className="text-4xl font-bold pt-4">Welcome to Vampify!</div>
        <div className="text-2xl pt-6">
          Vampify provides "sass" to its customers to find the latest location
          of blood sucking ceremonies. You can fill in form to get updates
          regularly is a sassy style.
        </div>
        {renderFormButton()}
      </div>
    );
  }

  return (
    <Wrapper className="flex flex-wrap content-center">
      <Helmet title="Home" />
      <div
        className="
          flex flex-row h-100 w-full flex-wrap lg-flex-no-wrap
           lg-space-x-64
           pl-12 pr-12 justify-self-center
           "
      >
        <div className="flex flex-1 flex-col content-center align-middle">
          <HealthCheck />
          {renderImage()}
        </div>
        <div className="flex flex-1 flex-col ">{renderDetailContent()}</div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
