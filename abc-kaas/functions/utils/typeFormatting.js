import { parse, isValid, formatISO } from "date-fns";

/**
    * @param {any} value The given value that needs to be saved and returned.
    * @param {String} type The given type that the database value eventually
    *   needs to have. Supported types: ["boolean","integer","decimal","price",
    *   "string", "date", "date_time", "time"]
    * @returns typed version of whatever is defined within type.
*/
export function transformType(value, type) {
    switch (type.toLowerCase()) {
        case "boolean": 
            return parseBool(value);
        case "integer":
            // Basic number conversion
            return Number(value);
        case "decimal":
        case "price":
            // Convert comma values to a point.
            let parsed_value = parseFloat(value.toString()
                .replace(',','.'));
            // Validate if parsed value is NaN and not breaking the parse.
            return isNaN(parsed_value) ? 0.0 : parsed_value;
        case "auto_increment":
        case "string":
            return value.toString();
        default:
            return convertToDBDateFormat(value, "dd-MM-yyyy ", type.toLowerCase())
    }
        
}

// To be safe with the values given and the processing of errors false values
// are also invalid values to parse
function parseBool(value) {
    if (value == 1 ||
        value == true ||
        value.toLowerCase() == 'true')
        return true;
    return false;
}


// @BobHansen75 a.k.a. Bob Handsome's code to trim date time values.
const returnDateTimeValue = (dateString, dateType) => {
  switch (dateType.toLowerCase().trim()) {
    case "time":
      return dateString.substring(11, 19);
    case "date":
      return dateString.substring(0, 10);
    case "date_time":
      return dateString.substring(0, 19);
    default:
      return dateString;
  }
}
// @BobHansen75 a.k.a. Bob Handsome's code to validate proper date time formats.
const convertToDBDateFormat = (dateString, format, dateType) => {
  const date = !isValid(dateString)
    ? parse(dateString.toString().trim(), format.toString().trim(), new Date())
    : dateString;
  if (!isValid(date)){ return null} ;
  return returnDateTimeValue(formatISO(date).replace("T", " "), dateType);
};
