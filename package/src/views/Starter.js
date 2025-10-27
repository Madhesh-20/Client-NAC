import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
// import SalesChart from "../components/dashboard/SalesChart";
// import Feeds from "../components/dashboard/Feeds";
// import ProjectTables from "../components/dashboard/ProjectTable";
import { fetchClientTableData } from '../services/api';
import React, { useState, useEffect } from 'react';
// import formatDate from './dateConverter';
// import TopCards from "../components/dashboard/TopCards";
// import Blog from "../components/dashboard/Blog";
// import bg1 from "../assets/images/bg/bg1.jpg";
// import bg2 from "../assets/images/bg/bg2.jpg";
// import bg3 from "../assets/images/bg/bg3.jpg";
// import bg4 from "../assets/images/bg/bg4.jpg";


function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

const Starter = () => {

  const [data, setData] = useState([]); // State to hold table data
  // const [loading, setLoading] = useState(true); // State to manage loading
  // const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch data from API on component mount
    fetchClientTableData()
    .then((result) => setData(result))
    .catch((err) => console.error(err));
  }, []);

  // const formatTimestamp = (timestamp) => {
  //   const date = new Date(timestamp);
  //   return date.toISOString(); 
  // };


  return (
    <div>
      {/***Top Cards***/}
      {/* <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Yearly Earning"
            earning="$21k"
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="Refund given"
            earning="$1k"
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Yearly Project"
            earning="456"
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Weekly Sales"
            earning="210"
            icon="bi bi-bag"
          />
        </Col>
      </Row> */}
      {/***Blog Cards***/}
      {/* <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row> */}
      <Row>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Table with Hover
          </CardTitle>
          <CardBody className="">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>UID</th>
                  <th>Host Name</th>
                  <th>IP Address</th>
                  <th>Joined</th>
                  <th>Recent Update</th>
                </tr>
              </thead>
              <tbody>
                {/* Dynamically generate rows */}
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.client_id}</td>
                    <td>{row.UID}</td>
                    <td>{row.hostname}</td>
                    <td>{row.ip_address}</td>
                    <td>{formatTimestamp(row.joined_at)}</td>
                    <td>{formatTimestamp(row.updated_at)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
      </Row>

      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          {/* <SalesChart /> */}
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          {/* <Feeds /> */}
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          {/* <ProjectTables /> */}
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
