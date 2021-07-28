const key = `IjGVCZ8KRIsGtjWaxuUv6P1g1s9peB4b`;

export default {
  search(searchTerm) {
    let API_URL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${searchTerm}`;
    return fetch(API_URL, {
      method: "GET",
    });
  },
};
