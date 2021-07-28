import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import weather from "./images/weather.png";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const state = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const { getWeatherPage, onSearchTermChanged } = bindActionCreators(
    actionCreators,
    dispatch
  );

  function getWeather(event, searchTerm) {
    event.preventDefault();

    getWeatherPage(searchTerm);
  }
  console.log(state);

  function handleChange(event) {
    onSearchTermChanged(event.target.value);
  }
  return (
    <>
      <form onSubmit={(event) => getWeather(event, state.searchTerm)}>
        <div className="row">
          <div className="col-8 mx-auto mt-5">
            <input
              type="text"
              className="form-control"
              placeholder="Enter location"
              onChange={(event) => handleChange(event)}
              aria-label="First name"
            />
          </div>
        </div>
        <div className=" mx-auto text-center ">
          <button
            className="btn btn-primary mx-auto mt-2 text-center"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>

      {state.weather.map((forecast) => {
        console.log(forecast);
        const location = state.searchTerm;
        return (
          <>
            <div className="container ">
              <div
                className="card mx-auto text-center mt-5 bg-light"
                style={{ width: "28rem" }}
              >
                <img
                  src="https://image.freepik.com/free-vector/woman-with-umbrella-girl-raincoat-dog-walking-rain-city-park-vector-illustration-family-activity-bad-weather-downpour-concept_74855-13290.jpg"
                  className="card-img-top"
                  alt="..."
                  // https://image.freepik.com/free-vector/happy-woman-walking-rainy-day-with-umbrella-isolated-flat-vector-illustration-cartoon-female-character-being-outdoors-autumn-rain-landscape-weather-concept_74855-10087.jpg
                />
                <div className="card-body">
                  <h2 className="card-title">
                    {(forecast.current.temp - 273.15).toFixed(2)} C
                  </h2>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    {forecast.current.weather[0].main}
                  </h5>
                </div>
              </div>
            </div>
            <div className="text-center mx-auto mt-5 ">
              <h1>Daily Forecast</h1>
            </div>
            <div className="container">
              <div className="row">
                {forecast.daily.map((daily) => {
                  const myDate = new Date(daily.dt * 1000);
                  console.log(myDate.toLocaleDateString());

                  return (
                    <>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="card mx-auto text-center mt-3 mb-3 bg-light">
                          <img className="card-img-top" src={weather} />

                          <div className="card-body">
                            <h3 className="card-title">
                              {myDate.toLocaleDateString()}
                            </h3>
                            <h3 className="card-title">
                              {daily.weather[0].main}
                            </h3>
                            <h5 className="card-title ml-0">
                              <span>
                                {(daily.temp.max - 273.15).toFixed(2)} C
                              </span>
                              <span>
                                {" "}
                                {(daily.temp.min - 273.15).toFixed(2)} C
                              </span>
                            </h5>
                            <h5 className="card-title">
                              <span>Rain : </span>
                              <span> {daily.rain}</span>
                            </h5>
                            <h5 className="card-title">
                              <span>Humidity : </span>
                              <span> {daily.humidity}</span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default App;
