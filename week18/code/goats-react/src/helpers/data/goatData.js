import axios from 'axios';

const baseUrl = 'https://fir-cows-958ae.firebaseio.com/react-goats';

const getGoats = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}.json`)
    .then((resp) => {
      resolve(Object.values(resp.data));
    }).catch((error) => reject(error));
});

export default { getGoats };
