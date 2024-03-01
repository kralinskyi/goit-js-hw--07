import axios from "axios";

const KEY = "cWMQh_UzxalN9zl3YrjZ4TheDGt0uKhWGONnZUIIKEM";
const https = `https://api.unsplash.com/photos/?client_id=${KEY}`;

export default async function getPhotos() {
  axios.get(https, { query: "dog" });
}
