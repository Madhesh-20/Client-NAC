import axios from 'axios';

const API_BASE_URL = 'http://10.1.32.92:5000';

export const fetchNetworkTableData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/network_data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

//taking the patch data

export const fetchPatchTableData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/patch_data`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};

// taking the system data

export const fetchSystemTableData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/system_data`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};


// taking the unique data

export const fetchUniqueTableData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/unique_data`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};


// taking the anti virus data

export const fetchAVTableData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/antivirus_data`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};


// taking the client data

export const fetchClientTableData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/client_data`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};


// taking the process info
export const fetchProcessTableData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/process_data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching process table data:", error);
    throw error;
  }
};