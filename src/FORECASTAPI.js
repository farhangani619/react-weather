const key = `20abe739bd42101c693fa1a0efa19cd9`;

export default {
  search(lat, lon) {
    console.log(lat, lon);
    let API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`;
    return fetch(API_URL, {
      method: "GET",
    });
  },
};
