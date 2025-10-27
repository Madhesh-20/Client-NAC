

function formatDate(isoDateString) {
    const date = new Date(isoDateString);
  
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      timeZoneName: 'short' 
    };
  
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
    return formattedDate;
  }
  
  // Export the function to be used in other files
  export default formatDate;