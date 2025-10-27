import React from 'react';
import { Row, Col, CardTitle, CardSubtitle, Card } from 'reactstrap';
import ComponentCard from '../components/ComponentCard';


const About = () => {
  const features = [
    {
      title: 'Real Time Data Logging',
      desc: 'Create React App is a tool that gives you a massive head start when building React apps.',
    },
    {
      title: 'Support',
      desc: 'Premium customer support from the actual people who have created.',
    },
  ];
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}

        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Client Application of NAC System
          </CardTitle>




          <Row className='d-flex'>
            <Col lg="8">
              <div className="mt-5">
                <ComponentCard
                  title="Xtreme React Admin Pro Version"
                  subtitle={
                    <h5>
                      The Applciation that takes the system information and displays them to the user in realtime.
                    </h5>
                  }
                >
                  {/* <Image src='https://www.wrappixel.com/wp-content/uploads/edd/2020/04/xtreme-react-admin-template-y.jpg' alt='pro version image' className='mt-2'/> */}
                  {/* <img src='https://www.wrappixel.com/wp-content/uploads/edd/2020/04/xtreme-react-admin-template-y.jpg' alt='pro version image' className='mt-2' /> */}

                  <img src={`https://www.wrappixel.com/wp-content/uploads/edd/2020/04/xtreme-react-admin-template-y.jpg`} alt="" className="w-100"/>

                  
                </ComponentCard>
              </div>
            </Col>
          </Row>


          <ComponentCard title="Features">
            <Row>
              {features.map((feature) => (
                <Col sm="4" className="mb-sm-5 mb-4 pb-3" key={feature.title}>
                  <div>
                    <i className={`bi ${feature.icon} text-primary fs-2`} />

                    <CardTitle tag="h4" className="my-3">
                      {feature.title}
                    </CardTitle>
                    <CardSubtitle className="text-muted col-sm-10 col-12">{feature.desc}</CardSubtitle>
                  </div>
                </Col>
              ))}
            </Row>
          </ComponentCard>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
