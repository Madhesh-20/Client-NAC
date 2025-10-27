// import ProjectTables from "../../components/dashboard/ProjectTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import { fetchPatchTableData } from '../../services/api';
import React, { useState, useEffect } from 'react';

const Patch = () => {

    const [data, setData] = useState([]); // State to hold table data
  
    useEffect(() => {
      // Fetch data from API on component mount
      fetchPatchTableData()
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
                  <th>HotFix</th>
                  <th>About</th>
                  <th>Installed On</th>
                  <th>Installed By</th>

                </tr>
              </thead>
              <tbody>
                {/* Dynamically generate rows */}
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.patch_id}</td>
                    <td>{row.UID}</td>
                    <td>{row.hotfix_id}</td>
                    <td>{row.description}</td>
                    <td>{row.installed_on}</td>
                    <td>{row.installed_by}</td>
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

export default Patch ;
