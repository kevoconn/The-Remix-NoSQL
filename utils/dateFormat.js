//create date format
function dateFormat(date, format) {
  if (!date) return "";
  if (!format) format = "MM/DD/YYYY hh:mm:ss A";
  return moment(date).format(format);
} 
