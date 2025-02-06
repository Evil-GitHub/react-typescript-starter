import Footer from '@/components/Footer';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { Helmet, history } from '@umijs/max';
import classNames from 'classnames/bind';
import React from 'react';

import { waitTime } from '@/utils';
import { message } from 'antd';
import defaultSettings from 'config/defaultSettings';
import styles from './index.less';

const cx = classNames.bind(styles);

const Login: React.FC = () => {
  const handleSubmit = async () => {
    await waitTime(1000);
    message.success('登录成功');
    localStorage.setItem(defaultSettings.TOKEN_KEY, '123');
    history.push('/');
    window.location.reload();
  };

  return (
    <div className={cx('container')}>
      <Helmet>
        <title>登录 - {defaultSettings.title}</title>
      </Helmet>
      <div className={cx('login-content')}>
        <div className={cx('login-bg')} />
        <div className={cx('login-form')}>
          <LoginForm
            contentStyle={{
              minWidth: 280,
              maxWidth: '75vw',
            }}
            logo={<img alt="logo" src="/images/logo_simple.png" />}
            title={defaultSettings?.title}
            onFinish={async () => {
              await handleSubmit();
            }}
          >
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              placeholder="请输入用户名"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              placeholder="请输入密码"
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
            <div
              style={{
                marginBlockEnd: 24,
                overflow: 'hidden',
              }}
            >
              {/* <a
                style={{
                  float: 'right',
                }}
                onClick={() => {
                  setModalVisit(true);
                }}
              >
                忘记密码
              </a> */}
            </div>
          </LoginForm>
          <Footer />
        </div>
      </div>
      {/* <ForgetPasswordModal open={modalVisit} onOpenChange={setModalVisit} /> */}
    </div>
  );
};

export default Login;
