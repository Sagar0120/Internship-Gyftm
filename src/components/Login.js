import React from "react";
import DataService from "../Service/DataService";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: "",
      password: "",
    };
    this.changephonehandler = this.changephonehandler.bind(this);
    this.changepasshandler = this.changepasshandler.bind(this);
  }

  saveUser = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
      e.persist();
    }

    let user = { phone: this.state.phone, password: this.state.password };
    console.log("user => " + JSON.stringify(user));

    DataService.LoginUser(user).then((Response) => {
      console.log("result", Response);
    });
  };

  changephonehandler = (event) => {
    this.setState({ phone: event.target.value });
  };

  changepasshandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Phone : </label>
                    <input
                      placeholder="phone"
                      name="phone"
                      className="form-control"
                      value={this.state.phone}
                      onChange={this.changephonehandler}
                    />
                  </div>
                  <p> </p>
                  <div className="form-group">
                    <label>Password : </label>
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changepasshandler}
                    />
                  </div>
                  <p> </p>
                  <div className="text-center">
                    <button className="btn btn-success" onClick={this.saveUser}>
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
