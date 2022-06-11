import React from "react";
import DataService from "../Service/DataService";
import axios from "axios";

const API_URL = "https://api.shilpimultiplex.com/api/Auth/";

//const [otp, setOtp] = useState('');

let Uid;

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      otp: "",
    };
    this.changenamehandler = this.changenamehandler.bind(this);
    this.changemailhandler = this.changemailhandler.bind(this);
    this.changephonehandler = this.changephonehandler.bind(this);
    this.changepasshandler = this.changepasshandler.bind(this);
    this.changOTPhandler = this.changOTPhandler.bind(this);
  }

  saveUser = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
      e.persist();
    }

    let user = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
    };
    console.log("user => " + JSON.stringify(user));

    DataService.createUser(user).then((Response) => {
      console.log("user id : ", Response.data.id);
      Uid = Response.data.id;

      DataService.sendOTP(Response.data.id).then((Resp) => {
        console.log(Resp);
      });
    });

    // "a81c54b9-b10d-428f-b721-9398a97af022"
    //let Uid = {uid : Object.uid}
  };

  VeryfiyUser = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
      e.persist();
    }
    axios
      .post(API_URL + "VerifyOtp?uid=" + Uid + "&otp=" + this.state.otp)
      .then((result) => {
        if (result.request.status === 200) {
          console.log(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changenamehandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changemailhandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changephonehandler = (event) => {
    this.setState({ phone: event.target.value });
  };

  changepasshandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changOTPhandler = (event) => {
    this.setState({ otp: event.target.value });
  };

  render() {
    return (
      <>
        <section>
          <form>
            <label>Name : </label>
            <input
              placeholder="Name"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.changenamehandler}
            />

            <label>Email : </label>
            <input
              placeholder="Email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.changemailhandler}
            />

            <label>Phone : </label>
            <input
              placeholder="phone"
              name="phone"
              className="form-control"
              value={this.state.phone}
              onChange={this.changephonehandler}
            />

            <label>Password : </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.changepasshandler}
            />

            <button className="btn btn-success" onClick={this.saveUser}>
              Create user
            </button>
          </form>
        </section>
        <form>
          {/*modal for otp*/}
          <h5>Enter your OTP</h5>
          <input
            type="text"
            value={this.state.otp}
            onChange={this.changOTPhandler}
          />
          <button type="button" onClick={this.VeryfiyUser}>
            Ok
          </button>
        </form>
      </>
    );
  }
}

export default Register;
