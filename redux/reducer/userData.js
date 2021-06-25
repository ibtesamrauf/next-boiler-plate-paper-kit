import * as t from "../types";

const defaultState = {
  postcode: "no-postcode",
  full_address: "",
  first_name: "",
  last_name: "",
  phone: "",
  property_type: "",
  construction_date: "",
  internal_area: "",
  bedrooms: "",
  bathrooms: "",
  finish_quality: "",
  outdoor_space: "",
  off_street_parking: "",
  estimate: 0,
  margin: 0,
};

// export default function (state = defaultState, action = {}) {
const userData = (state = defaultState, action) => {

  switch (action.type) {
    case t.GET_POSTCODE:
      return {
        ...state,
        postcode: state.postcode,
      };
    case t.UPDATE_POSTCODE:
      return {
        ...state,
        postcode: action.postcode,
      };
    case "UPDATE_FULL_ADDRESS":
      return {
        ...state,
        full_address: action.full_address,
      };
    case "UPDATE_FIRST_NAME":
      return {
        ...state,
        first_name: action.first_name,
      };
    case "UPDATE_LAST_NAME":
      return {
        ...state,
        last_name: action.last_name,
      };
    case "UPDATE_PHONE":
      return {
        ...state,
        phone: action.phone,
      };
    case "UPDATE_PROPERTY_TYPE":
      return {
        ...state,
        property_type: action.property_type,
      };
    case "UPDATE_CONSTRUCTION_DATE":
      return {
        ...state,
        construction_date: action.construction_date,
      };
    case "UPDATE_INTERNAL_AREA":
      return {
        ...state,
        internal_area: action.internal_area,
      };
    case "UPDATE_BEDROOMS":
      return {
        ...state,
        bedrooms: action.bedrooms,
      };
    case "UPDATE_BATHROOMS":
      return {
        ...state,
        bathrooms: action.bathrooms,
      };
    case "UPDATE_FINISH_QUALITY":
      return {
        ...state,
        finish_quality: action.finish_quality,
      };
    case "UPDATE_OUTDOOR_SPACE":
      return {
        ...state,
        outdoor_space: action.outdoor_space,
      };
    case "UPDATE_OFF_STREET_PARKING":
      return {
        ...state,
        off_street_parking: action.off_street_parking,
      };
    case "UPDATE_ESTIMATE":
      return {
        ...state,
        estimate: action.estimate,
      };
    case "UPDATE_MARGIN":
      return {
        ...state,
        margin: action.margin,
      };
    default:
      return state;
  }
}

export default userData;
