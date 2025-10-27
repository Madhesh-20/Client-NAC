// import ProjectTables from "../../components/dashboard/ProjectTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import { fetchAVTableData } from '../../services/api';
import React, { useState, useEffect } from 'react';

const Antivirus = () => {

    const [data, setData] = useState([]); // State to hold table data

  
    useEffect(() => {
      // Fetch data from API on component mount
      fetchAVTableData()
      .then((result) => setData(result))
      .catch((err) => console.error(err));
    }, []);



  return (
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
                  <th>Name</th>
                  <th>Version</th>
                  <th>Vendor</th>
                  <th>Caption</th>
                </tr>
              </thead>
              <tbody>
                {/* Dynamically generate rows */}
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.antivirus_id}</td>
                    <td>{row.UID}</td>
                    <td>{row.name}</td>
                    <td>{row.version}</td>
                    <td>{row.vendor}</td>
                    <td>{row.vendor}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Antivirus ;
