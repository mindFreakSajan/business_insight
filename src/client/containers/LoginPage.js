import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import { grey500, white } from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';
import ThemeDefault from '../theme-default';
import { setPasswordText, setEmailText, login } from './LoginPageModule';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.styles = {
      loginContainer: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        margin: 'auto'
      },
      paper: {
        padding: 20,
        overflow: 'auto'
      },
      buttonsDiv: {
        textAlign: 'center',
        padding: 10
      },
      flatButton: {
        color: grey500
      },
      checkRemember: {
        style: {
          float: 'left',
          maxWidth: 180,
          paddingTop: 5
        },
        labelStyle: {
          color: grey500
        },
        iconStyle: {
          color: grey500,
          borderColor: grey500,
          fill: grey500
        }
      },
      loginBtn: {
        float: 'right'
      },
      btn: {
        background: '#4f81e9',
        color: white,
        padding: 7,
        borderRadius: 2,
        margin: 2,
        fontSize: 13
      },
      btnFacebook: {
        background: '#4f81e9'
      },
      btnGoogle: {
        background: '#e14441'
      },
      btnSpan: {
        marginLeft: 5
      },
    };
  }
  onChangeHandler1 = (e) => {
    this.props.setEmailText(e.target.value);
  };
  onChangeHandler2 = (e) => {
    this.props.setPasswordText(e.target.value);
  };
  onButtonPress = () => {
    const email=this.props.email;
    const password=this.props.password;
    console.log("hello");
    this.props.login({
      email,
      password
    })
  };
  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <div style={this.styles.loginContainer}>

            <Paper style={this.styles.paper}>

              <form>
                <TextField
                  hintText="E-mail"
                  floatingLabelText="E-mail"
                  fullWidth={true}
                  value={this.props.email}
                  onChange={this.onChangeHandler1}
                />
                <TextField
                  hintText="Password"
                  floatingLabelText="Password"
                  fullWidth={true}
                  type="password"
                  value={this.props.password}
                  onChange={this.onChangeHandler2}
                />

                <div>
                  <Checkbox
                    label="Remember me"
                    style={this.styles.checkRemember.style}
                    labelStyle={this.styles.checkRemember.labelStyle}
                    iconStyle={this.styles.checkRemember.iconStyle}
                  />

                    <RaisedButton label="Login"
                      primary={true}
                      style={this.styles.loginBtn}
                      onClick={this.onButtonPress}
                    />
                </div>
              </form>
            </Paper>

            <div style={this.styles.buttonsDiv}>
              <FlatButton
                label="Register"
                href="/"
                style={this.styles.flatButton}
                icon={<PersonAdd />}
              />

              <FlatButton
                label="Forgot Password?"
                href="/"
                style={this.styles.flatButton}
                icon={<Help />}
              />
            </div>

            <div style={this.styles.buttonsDiv}>
              <Link to="/" style={{ ...this.styles.btn, ...this.styles.btnFacebook }}>
                <i className="fa fa-facebook fa-lg" />
                <span style={this.styles.btnSpan}>Log in with Facebook</span>
              </Link>
              <Link to="/" style={{ ...this.styles.btn, ...this.styles.btnGoogle }}>
                <i className="fa fa-google-plus fa-lg" />
                <span style={this.styles.btnSpan}>Log in with Google</span>
              </Link>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  email: state.login.email,
  password: state.login.password,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPasswordText,
  setEmailText,
  login
}, dispatch);

LoginPage.propTypes = {
  setPasswordText: PropTypes.func.isRequired,
  setEmailText: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
