import {
  GET_WEATHER_LOADING,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_ERROR,
  GET_FORECAST_LOADING,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_ERROR,
} from "../actions/index.js";

const initialState = {
  searchTerm: "",
  key: "",
  weather: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_LOADING: {
      return {
        ...state,
        weather: [],
      };
    }
    case GET_WEATHER_ERROR: {
      return {
        ...state,
        weather: [],
      };
    }
    case GET_FORECAST_LOADING: {
      return {
        ...state,
        weather: [],
      };
    }
    case GET_FORECAST_SUCCESS: {
      return {
        ...state,
        weather: [action.data],
      };
    }
    case GET_FORECAST_ERROR: {
      return {
        ...state,
        weather: [],
      };
    }
    case "ON_SEARCH_TERM_CHANGED": {
      return {
        ...state,
        searchTerm: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
