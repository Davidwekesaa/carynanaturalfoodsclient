export const initialState = {
  cart:
    localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : null,
  total: null,
  user:
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : null,

  county:
    localStorage.getItem("county") && localStorage.getItem("county") != null
      ? localStorage.getItem("county")
      : "",
  subCounty:
    localStorage.getItem("subCounty") &&
    localStorage.getItem("subCounty") != null
      ? localStorage.getItem("subCounty")
      : "",
  locationn:
    localStorage.getItem("location") && localStorage.getItem("location") != null
      ? localStorage.getItem("location")
      : "",
  phonee:
    localStorage.getItem("phone") && localStorage.getItem("phone") != null
      ? localStorage.getItem("phone")
      : "",
  deliveryfee:
    localStorage.getItem("fee") && localStorage.getItem("fee") != null
      ? localStorage.getItem("fee")
      : "",
};

export const actionType = {
  SET_CART: "SET_CART",
  SET_TOTAL: "SET_TOTAL",
  SET_USER: "SET_USER",

  SET_COUNTY: "SET_COUNTY",
  SET_SUBCOUNTY: "SET_SUBCOUNTY",
  SET_LOCATION: "SET_LOCATION",
  SET_PHONE: "SET_PHONE",
  SET_DELIVERY: "SET_DELIVERY",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_CART:
      return {
        ...state,
        cart: action.cart,
      };

    case actionType.SET_TOTAL:
      return {
        ...state,
        total: action.total,
      };
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionType.SET_COUNTY:
      return {
        ...state,
        county: action.county,
      };

    case actionType.SET_SUBCOUNTY:
      return {
        ...state,
        subCounty: action.subCounty,
      };

    case actionType.SET_LOCATION:
      return {
        ...state,
        locationn: action.locationn,
      };

    case actionType.SET_PHONE:
      return {
        ...state,
        phonee: action.phonee,
      };

    case actionType.SET_DELIVERY:
      return {
        ...state,
        deliveryfee: action.deliveryfee,
      };
    default:
      return state;
  }
};
