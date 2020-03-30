import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      display_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleDemoUser(e) {
    e.preventDefault();
    this.props.demoLogin().then(() => {
      return this.props.history.push("/main/channels/1")
    })
  }

  renderErrors() {
    let errors = null;
    if (this.props.errors) {
      errors = (
        <ul className="errors-list">
          {this.props.errors.map((error, i) => {
            return <li key={`error-${i}`}>{error}</li>;
          })}
        </ul>
      );
    }
    return errors;
  }


  render() {
    let moreInput = () => {};
    if (this.props.formType === "Sign Up") {
      moreInput = () => {
        return (
          <div>
            <input
              className="login-input"
              type="text"
              value={this.state.display_name}
              placeholder="Display Name"
              onChange={this.update("display_name")}
            />
            <input
              className="login-input"
              type="text"
              value={this.state.email}
              placeholder="Email"
              onChange={this.update("email")}
            />
          </div>
        );
      };
    }

    return (
      <div className="session-form-div">
        <div className="outer-form-div">
          <div className="login-form-container">
            <div className="form-title-all">
              <h2 className="form-title-name">{this.props.formType}</h2>
            </div>
            <form className="session-form" onSubmit={this.handleSubmit}>
              <input
                className="login-input"
                type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update("username")}
              />
                {moreInput()}
              <input
                className="login-input"
                type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update("password")}
              />
              <br />
              <button className="login-button">{this.props.formType}</button>
            </form>
            <div className="error-msg">{this.renderErrors()}</div>
            <div className="demo">
              <p>
                Try out C-lack as a&nbsp;
                <a className="demo-link" onClick={this.handleDemoUser}>
                  Demo User
                </a>
              </p>
            </div>
          </div>
        </div>
        <footer className="homepage-4-div">
          <a
            href="https://github.com/CsJohnJJ"
            className="github-link"
            target="_blank"
          >
            <img
              src="https://image.flaticon.com/icons/svg/2111/2111432.svg"
              className="github-img"
            />
          </a>

          <a href="https://jianjiang.me" className="portfolio" target="_blank">
            About Me
          </a>

          <a
            href="http://www.linkedin.com/in/john-jiangjj"
            className="linkedin-link"
            target="_blank"
          >
            <img
              src="https://image.flaticon.com/icons/svg/174/174857.svg"
              className="linkedin-img"
            />
          </a>
        </footer>
      </div>
    );
  }
};

export default SessionForm;