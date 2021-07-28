import API from "../../API";
import FORECASTAPI from "../../FORECASTAPI";

export const GET_WEATHER_LOADING = "REDUX_THUNK_GET_WEATHER_LOADING";
export const GET_WEATHER_SUCCESS = "REDUX_THUNK_GET_WEATHER_SUCCESS";
export const GET_WEATHER_ERROR = "REDUX_THUNK_GET_WEATHER_ERROR";
export const GET_FORECAST_LOADING = "REDUX_THUNK_GET_FORECAST_LOADING";
export const GET_FORECAST_SUCCESS = "REDUX_THUNK_GET_FORECAST_SUCCESS";
export const GET_FORECAST_ERROR = "REDUX_THUNK_GET_FORECAST_ERROR";

export const getWeatherPage = (searchTerm, key) => {
  return (dispatch) => {
    dispatch({ type: GET_WEATHER_LOADING });
    API.search(searchTerm)
      .then((response) => response.json())
      .then(
        (data) => dispatch(getForecast(data)),
        // dispatch({ type: GET_WEATHER_SUCCESS, data }),
        (error) =>
          dispatch({
            type: GET_WEATHER_ERROR,
            error: error.message || "Unexpected Error!!!",
          })
      );
  };
};

export const getForecast = (searchTerm) => {
  return (dispatch) => {
    dispatch({ type: GET_FORECAST_LOADING });
    FORECASTAPI.search(
      searchTerm[0].GeoPosition.Latitude,
      searchTerm[0].GeoPosition.Longitude
    )
      .then((response) => response.json())
      .then(
        (data) => dispatch({ type: GET_FORECAST_SUCCESS, data }),
        (error) =>
          dispatch({
            type: GET_FORECAST_ERROR,
            error: error.message || "Unexpected Error!!!",
          })
      );
  };
};
export const onSearchTermChanged = (searchTerm) => {
  return (dispatch) => {
    dispatch({
      type: "ON_SEARCH_TERM_CHANGED",
      payload: searchTerm,
    });
  };
};
