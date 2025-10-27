// import ProjectTables from "../../components/dashboard/ProjectTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import { fetchProcessTableData } from '../../services/api';
import React, { useState, useEffect } from 'react';


const Process = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedRows, setExpandedRows] = useState({}); // Keep track of expanded rows

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchProcessTableData();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleRow = (processId) => {
    setExpandedRows((prev) => ({
      ...prev,
      [processId]: !prev[processId], // Toggle the expanded state of the row
    }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


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
                  <th>Softwares</th>
                  <th>Created At</th>

                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <React.Fragment key={row.process_id}>
                    <tr>
                      <td>{row.process_id}</td>
                      <td>{row.UID}</td>
                      <td>
                        <button onClick={() => toggleRow(row.process_id)}>
                          {expandedRows[row.process_id]
                            ? "Hide Software Data"
                            : "Show Software Data"}
                        </button>
                      </td>
                      <td>{new Date(row.created_at).toLocaleString()}</td>
                    </tr>
                    {expandedRows[row.process_id] && (
                      <tr>
                        <td colSpan="4">
                          <table border="1" style={{ width: "100%" }}>
                            <thead>
                              <tr>
                                <th>Software Name</th>
                                <th>Version</th>
                                <th>Vendor</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* Parse and display the software data */}
                              {Array.isArray(JSON.parse(row.software_data)) &&
                                JSON.parse(row.software_data).map((software, index) => (
                                  <tr key={index}>
                                    <td>{software.InstallDate || "N/A"}</td>
                                    <td>{software.InstallLocation || "N/A"}</td>
                                    <td>{software.Name || "N/A"}</td>
                                    <td>{software.Version || "N/A"}</td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Process ;
