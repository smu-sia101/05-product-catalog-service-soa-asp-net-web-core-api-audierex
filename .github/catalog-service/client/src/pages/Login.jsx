import { useState, useContext, useEffect } from 'react';
import { Form, Input, Button, Card, Typography, Alert, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const { Title } = Typography;

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  
  const { login, isAuthenticated, error, loading, clearError } = useContext(AuthContext);
  const [localError, setLocalError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/products');
    }

    if (error) {
      setLocalError(error);
    }
  }, [isAuthenticated, navigate, error]);

  const onFinish = async (values) => {
    setLocalError('');
    clearError();
    
    const success = await login(values);
    
    if (success) {
      navigate('/products');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '80vh',
      backgroundColor: '#f5f5f5',
      padding: '20px'
    }}>
      <Card 
        style={{ 
          width: 400, 
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          borderRadius: '10px',
          padding: '30px'
        }}
      >
        <Space 
          direction="vertical" 
          size="large" 
          style={{ width: '100%' }}
        >
          <div style={{ textAlign: 'center' }}>
            <Title 
              level={2} 
              style={{ margin: 0, fontWeight: 'bold', color: '#333' }}
            >
              Login
            </Title>
          </div>
          
          {localError && (
            <Alert
              message="Error"
              description={localError}
              type="error"
              closable
              onClose={() => {
                setLocalError('');
                clearError();
              }}
              style={{ marginBottom: '10px' }}
            />
          )}
          
          <Form
            form={form}
            name="login"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            style={{ width: '100%' }}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
                {
                  type: 'email',
                  message: 'Please enter a valid email address!',
                },
              ]}
              style={{ marginBottom: '20px' }}
            >
              <Input 
                prefix={<UserOutlined />} 
                placeholder="Email" 
                size="large"
                style={{ borderRadius: '8px' }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              style={{ marginBottom: '20px' }}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                size="large"
                style={{ borderRadius: '8px' }}
              />
            </Form.Item>

            <Form.Item style={{ marginBottom: '10px' }}>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                loading={loading}
                style={{
                  borderRadius: '8px',
                  backgroundColor: '#1890ff',
                  fontWeight: 'bold'
                }}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
          
          <div style={{ textAlign: 'center', color: '#555' }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: '#1890ff' }}>
              Register now!
            </Link>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default Login;
