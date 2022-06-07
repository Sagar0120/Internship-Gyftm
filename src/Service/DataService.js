import axios from "axios";

const Service_Url='https://api.gyftm.in/api'

class DataService {
  createUser(user) {
    return axios.post(Service_Url + "/Auth/CreateUser", user);
  }
}

export default new DataService();