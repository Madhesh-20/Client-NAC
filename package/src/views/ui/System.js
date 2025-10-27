// import ProjectTables from "../../components/dashboard/ProjectTable";
import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import { fetchSystemTableData } from '../../services/api';

function bytesToGB(bytes) {
  const gb = bytes / 1073741824; // 1 GB = 1,073,741,824 bytes
  return gb.toFixed(2); // Returns the result rounded to 2 decimal places
}

const System = () => {

    const [data, setData] = useState([]); // State to hold table data

  
    useEffect(() => {
      // Fetch data from API on component mount
      fetchSystemTableData()
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
                  <th>Host</th>
                  <th>Total Memory</th>
                  <th>Free Memory</th>
                  <th>Release</th>
                  <th>Type</th>
                  <th>Arch</th>

                </tr>
              </thead>
              <tbody>
                {/* Dynamically generate rows */}
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sys_id}</td>
                    <td>{row.UID}</td>
                    <td>{row.hostname}</td>
                    <td>{bytesToGB(row.tmemory)+' GB'}</td>
                    <td>{bytesToGB(row.fmemory)+' GB'}</td>
                    <td>{row.sys_release}</td>
                    <td>{row.sys_type}</td>
                    <td>{row.sys_arch}</td>
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

export default System ;
