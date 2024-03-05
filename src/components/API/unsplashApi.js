import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const KEY = "cWMQh_UzxalN9zl3YrjZ4TheDGt0uKhWGONnZUIIKEM";
const https = `/search/photos/?client_id=${KEY}`;

export default async function fetchPhotos(query, page) {
  const response = await axios.get(https, {
    params: {
      query,
      per_page: 12,
      page,
    },
  });

  return response.data;
}
