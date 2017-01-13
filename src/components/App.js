import React, {
  Component,
  PropTypes
} from 'react';
import YeomanImage from './YeomanImage';
import './app.css';


class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  register() {
    console.log(this.refs);
    this.props.actions.register(this.refs.username.value, this.refs.password.value)
  }

  render() {
    return (
      <div className="index">
        <YeomanImage />
        <div className="notice">
          Please edit <code>src/components/App.js</code> to get started!
        </div>
        <h2>Register</h2>
        <input type="text" name="username" placeholder="Enter Username" ref="username" required="true"/>
        <input type="password" name="password" ref="password" placeholder="Enter password"
               required="true"/>
        <button type="button" onClick={this.register.bind(this)}>Register</button>
      </div>
    );
  }
}

AppComponent.propTypes = {
  actions: PropTypes.any
};

export default AppComponent;
