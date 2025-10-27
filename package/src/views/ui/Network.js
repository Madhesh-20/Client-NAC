// import ProjectTables from "../../components/dashboard/ProjectTable";
import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import { fetchNetworkTableData } from '../../services/api';

const Network = () => {


  const [data, setData] = useState([]); // State to hold table data

  useEffect(() => {
    // Fetch data from API on component mount
    fetchNetworkTableData()
    .then((result) => setData(result))
    .catch((err) => console.error(err));
  }, []);


  return (
    <div>
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Col lg="12">
        <ProjectTables />
      </Col> */}
      
      {/* --------------------------------------------------------------------------------*/}
      {/* table-3*/}
      {/* --------------------------------------------------------------------------------*/}
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
                  <th>Id</th>
                  <th>UID</th>
                  <th>Interface</th>
                  <th>IP Address</th>
                  <th>MAC Address</th>

                </tr>
              </thead>
              <tbody>
                {/* Dynamically generate rows */}
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.network_id}</td>
                    <td>{row.UID}</td>
                    <td>{row.interface}</td>
                    <td>{row.ip_address}</td>
                    <td>{row.mac_address}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
    </div>
  );
};

export default Network ;
