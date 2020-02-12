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
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  };

 
  render() {
    let moreInput = () => {}
    let direction = () => {}
      if (this.props.formType === 'Sign Up') {
        direction = () => { return (", Email, and Display Name")};
        moreInput = () => {
          return (
            <div>
            <input
              className="login-input"
              type="text"
              value={this.state.email}
              placeholder="Email"
              onChange={this.update('email')}
            />
            <input
              className="login-input"
              type="text"
              value={this.state.display_name}
              placeholder="Display Name"
              onChange={this.update('display_name')}
            />
            </div>
          );
        };
      };

    return (
      <div className="login-form-container">
          <h2>{ this.props.formType }</h2>
          <form className="session-form" onSubmit={this.handleSubmit}>
          <div>Enter Username, Password { direction() }</div>
              <input 
                  className="login-input"
                  type="text"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.update('username')}
              />
              <input
                  className="login-input"
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.update('password')}
              />
        { moreInput() }
              <br/>
              <button className="input session-button">{this.props.formType}</button>
          </form>
          <p>Try out C-lack as a Demo User</p>
      </div>
      );
    };
  };

export default SessionForm;