import { Component } from "react";
import axios from "axios";
class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  getEmail = (event) => {
    this.email = event.target.value;
  };

  registers = () => {
    //   const history = new useHistory();

    if (!this.email) return alert("please fill all field");

    var requestObj = {
      email: this.email,
    };
    console.log(requestObj);
    axios({
      method: "post",
      url: "https://apifromashu.herokuapp.com/api/recoverpassword",
      data: requestObj,
    }).then(
      (Response) => {
        console.log(Response);
      },
      (error) => {
        console.log("error from signup api", error);
      }
    );
  };
  render() {
    return (
      <div class="forgetContainer" style={{ backgroundColor: "violet" }}>
        <label class="pading" for="email">
          Email
        </label>
        <input
          onChange={this.getEmail}
          class="pading"
          type="email"
          placeholder="email"
        ></input>
        <button
          class="pading"
          onClick={(e) => {
            e.preventDefault();
            console.log("hiiiiii");
            this.registers();
          }}
        >
          Reset Password
        </button>
      </div>
    );
  }
}
export default Forgot;
