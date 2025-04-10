import { Button, Typography, Space, Card, Row, Col } from 'antd';
import { ShoppingCartOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div style={{ padding: '50px 20px', backgroundColor: '#ffffff' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <Title 
          level={1} 
          style={{ marginBottom: '20px', color: '#333', fontWeight: 'bold' }}
        >
          Welcome to Product Catalog
        </Title>
        <Paragraph 
          style={{ 
            fontSize: '18px', 
            maxWidth: '800px', 
            margin: '0 auto', 
            color: '#666' 
          }}
        >
          Browse our collection of products, manage your inventory, and more!
        </Paragraph>
        
        <Space style={{ marginTop: '30px' }}>
          <Link to="/products">
            <Button 
              type="primary" 
              size="large" 
              icon={<ShoppingCartOutlined />} 
              style={{ borderRadius: '8px' }}
            >
              Browse Products
            </Button>
          </Link>
          <Link to="/register">
            <Button 
              size="large" 
              icon={<UserOutlined />} 
              style={{ borderRadius: '8px' }}
            >
              Register Now
            </Button>
          </Link>
        </Space>
      </div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Title 
          level={2} 
          style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}
        >
          Key Features
        </Title>
        
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={12} lg={8}>
            <Card 
              hoverable 
              style={{ height: '100%', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)' }}
              cover={
                <div 
                  style={{ 
                    background: '#f5f5f5', 
                    padding: '40px 0', 
                    textAlign: 'center', 
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px'
                  }}
                >
                  <ShoppingCartOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
                </div>
              }
            >
              <Card.Meta
                title={<span style={{ fontWeight: 'bold' }}>Product Management</span>}
                description="Add, edit, and remove products from your catalog with ease."
              />
            </Card>
          </Col>
          
          <Col xs={24} sm={12} lg={8}>
            <Card 
              hoverable 
              style={{ height: '100%', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)' }}
              cover={
                <div 
                  style={{ 
                    background: '#f5f5f5', 
                    padding: '40px 0', 
                    textAlign: 'center', 
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px'
                  }}
                >
                  <AppstoreOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
                </div>
              }
            >
              <Card.Meta
                title={<span style={{ fontWeight: 'bold' }}>Categorization</span>}
                description="Organize products by category for easy navigation and management."
              />
            </Card>
          </Col>
          
          <Col xs={24} sm={12} lg={8}>
            <Card 
              hoverable 
              style={{ height: '100%', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)' }}
              cover={
                <div 
                  style={{ 
                    background: '#f5f5f5', 
                    padding: '40px 0', 
                    textAlign: 'center', 
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px'
                  }}
                >
                  <UserOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
                </div>
              }
            >
              <Card.Meta
                title={<span style={{ fontWeight: 'bold' }}>User Authentication</span>}
                description="Secure user authentication and authorization system."
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
