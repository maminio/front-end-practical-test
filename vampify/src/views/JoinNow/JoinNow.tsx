import React, { FunctionComponent, useContext } from 'react';

import { Button, Layout, Form, Input, InputNumber, message } from 'antd';
import { Link } from 'react-router-dom';
/* modules */

// * components
import { Helmet } from 'components/Helmet';
import { HealthCheck } from 'components/HealthCheck';
import { Wrapper } from './styles';
import { FetchContext } from '../../services/FetchService/FetchProvider';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const JoinNow: FunctionComponent = props => {
  const { joinNow } = useContext(FetchContext);

  function renderDescription() {
    return (
      <div>
        A vampire is a creature from folklore that subsists by feeding on the
        vital essence (generally in the form of blood) of the living. In
        European folklore, vampires are undead creatures that often visited
        loved ones and caused mischief or deaths in the neighborhoods they
        inhabited while they were alive. They wore shrouds and were often
        described as bloated and of ruddy or dark countenance, markedly
        different from today's gaunt , pale vampire which dates from the early
        19th century.
      </div>
    );
  }

  function renderForm() {
    /* @TODO
     * All apis: name email age drink purpose. For example the api call bellow only submits name from the form.
     * Solve the problem so that whenever the form is submitted we will always have a success status before navigating the use back to home,
     * */
    const onFinish = (values: any) => {
      console.log(values);
      const { name } = values;
      joinNow
        .submitForm('name', { name })
        .then((res: any) => {
          message.success(`Name ${name} pushed successfully`);
          console.log({ res });
        })
        .catch((e: any) => {
          message.error(`Name pushed failed`);
          console.log({ e });
        });
    };
    return (
      <div className="w-2/3 divide-y-4 divide-yellow-600 divide-dashed">
        <Form
          {...layout}
          name="join-now-form"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item name={['name']} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name={['username']}
            label="Username"
            // @TODO Add username validation here
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['email']}
            label="Email"
            rules={[{ type: 'email' }]}
            required
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['age']}
            label="Age"
            rules={[{ type: 'number', min: 35, max: 65 }]}
            required
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={['drink']} required label="Favourite Drink">
            <Input />
          </Form.Item>
          <Form.Item name={['purpose']} label="Why do you want to join?">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

  return (
    <Wrapper className="flex flex-wrap content-center">
      <Helmet title="Home" />
      <HealthCheck />
      <div
        className="
          flex flex-row h-100 w-full flex-wrap lg-flex-no-wrap
           lg-space-x-64
           pl-12 pr-12 justify-self-center
           "
      >
        <div className="flex flex-1 flex-col content-center align-middle">
          {renderDescription()}
        </div>
        <div className="flex flex-1 flex-col ">{renderForm()}</div>
      </div>
    </Wrapper>
  );
};

export default JoinNow;
