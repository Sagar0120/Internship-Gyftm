import axios from "axios";

const Service_Url='https://api.shilpimultiplex.com/api'

///Auth/CreateUser


class DataService {
  createUser(user) {
    return axios.post(Service_Url + "/Auth/CreateUser", user);
  }
  sendOTP(user){
    return axios.post(Service_Url + "/Auth/SendOtp", user)
  }
}

export default new DataService();