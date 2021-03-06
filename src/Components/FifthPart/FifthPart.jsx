/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import './FifthPart.css';

const FifthPart = () => {
  return (
    <Container className='py-5' id='section 4'>
      <Row>
        <Col xs={12} className='pb-5'>
          <h1 style={{ color: 'white' }}>Meet Our Team</h1>
          <h6 style={{ color: '#32b697' }}>
            A strong and clear team makes transparency and credibility the
            biggest investment.
          </h6>
        </Col>
        <Col xs={12} md={6} className='d-flex justify-content-center'>
          <Card
            style={{
              width: '18rem',
              padding: '15px',
            }}
          >
            <Card.Body className='fifth-card'>
              <Card.Title>
                <h3 style={{ color: 'white' }}>Richie Ekong</h3>
              </Card.Title>
              <Card.Text>
                <h6 style={{ color: '#32b697' }}> CEO/Developer</h6>
              </Card.Text>
              <a
                href='https://twitter.com/Coinverse3?t=8D-m4aFKA3nWPwdelIoc7w&s=09'
                className='mx-2 p-1'
              >
                <AiOutlineTwitter />
              </a>
              <a
                href='https://t.me/Coinverseofficialcommunity'
                className='mx-2 p-1'
              >
                <FaTelegramPlane />
              </a>
              <a href='' className='mx-2 p-1'>
                <FaLinkedin />
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className='d-flex justify-content-center'>
          <Card
            style={{
              width: '18rem',
              padding: '15px',
            }}
          >
            <Card.Body className='fifth-card'>
              <Card.Title>
                <h3 style={{ color: 'white' }}>Milan Chandra</h3>
              </Card.Title>
              <Card.Text>
                <h6 style={{ color: '#32b697' }}>Co-founder</h6>
              </Card.Text>
              <a
                href='https://twitter.com/Coinverse3?t=8D-m4aFKA3nWPwdelIoc7w&s=09'
                className='mx-2 p-1'
              >
                <AiOutlineTwitter />
              </a>
              <a
                href='https://t.me/Coinverseofficialcommunity'
                className='mx-2 p-1'
              >
                <FaTelegramPlane />
              </a>
              <a href='' className='mx-2 p-1'>
                <FaLinkedin />
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FifthPart;
