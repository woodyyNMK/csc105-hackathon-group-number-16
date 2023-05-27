import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { AxiosError } from "axios";
import Axios from "./AxiosFront";

import { useState } from "react";
import GlobalContext from './GlobalContext';
const Login = ({
  handleLoginOpen={handleLoginOpen},
  open=false,
  setOpen=()=>{},
}) =>{
  const {user,setUser,setStatus} = React.useContext(GlobalContext);
  const [isLogin, setIsLogin] = useState(true);
  const handleClose = () => {
    setSignUpOpen(false);
    setOpen(false)
  };

  const signButton = {
    backgroundColor: "#f2f2f2",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#f2f2f2",
    },
    color:"#0C0C1E",
    width: { md: "60%", xs: "80%" },
    textTransform: "none",
    padding: "10px 0",
    fontFamily: "Adobe Garamond Pro",
    fontSize: { xs: "15px", md: "20px" },
    alignItems: "center",
    marginLeft: { md: "20%", xs: "10%" },
    fontWeight: "bold"
  };
  const signField = {
    width: { md: "60%", xs: "80%" },
    fontFamily: "arial",
    marginLeft: { md: "20%", xs: "10%" },
    color:"#d89b65",
  };
  const modalStyle = {
    position: "absolute",
    bgcolor: "#0c0c1e",
  //   height: { xs: "100%", md: "90%" },
    width: { xs: "100%", md: "60%" },
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    alignItems: "center",
    justifyContent: "center",
    direction: "column",
  };
  const headerTextStyle = {
    fontFamily: "Roboto",
    fontSize: { xs: "20px", md: "30px" },
    color: "#d89b65",
  };
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [usernameOrEmailError, setUsernameOrEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validateForm = () => {
    let isValid = true;
    if (!usernameOrEmail) {
      setUsernameOrEmailError("Username or email is required");
      isValid = false;
    }
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }
    return isValid;
  };

  const handleEmailChange = (event) => {
    setUsernameOrEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    //Axios needed
    try{
      const response = await Axios.post('/login',{
        usernameOrEmail,
        password,
      },{withCredentials:true});
      if (response.data.success) {  
        setUsernameOrEmail('');
        setPassword('');
        handleClose();
        setUser(response.data);
        setStatus({
          msg:response.data.msg,
          severity:'success'
        });
      }
    }
    catch(e){
      setUsernameOrEmail('');
      setPassword('');
      if (e instanceof AxiosError) {
        // check if e.response exist
        if(e.response)
        return setStatus({
          msg:e.response.data.error,
          severity:'error',
        });
      }
      return setStatus({
        msg:e.message,
        severity:'error',
      });
    }
  };

  //SignUp Form
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password1, setPassword1] = useState('');
  const [passwordError1, setPasswordError1] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [rePasswordError, setRePasswordError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
    setHasError(false);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSignUpEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSignUpPasswordChange = (event) => {
    setPassword1(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setRePassword(event.target.value);
  };
  const validateFormSignUp=()=>{ 
    let isValid=true;
    // check user 
    if(!username) {
      setUsernameError('Username is required');
      isValid=false;
    }
    // check email
    if(!email) {
      setEmailError('Email is required');
      isValid=false;
    }
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      setEmailError('Invalid email format');
      isValid=false;
    }
    // check password
    if(!password1) {
      setPasswordError1('Password is required');
      isValid=false;
    }
    if(!rePassword) {
      setRePasswordError('Confirm password is required');
    }
    if(password1!==rePassword) {
      setPasswordError1('Password is not match');
      setRePassword('');
      setPassword1('');
      isValid=false;
    }
    return isValid;
  };
  const handleSubmitSignUp= async(e)=>{
    e.preventDefault();
    if (!isChecked) {
        setHasError(true);
      }
    if(!validateFormSignUp()) return;
    try{
      const response = await Axios.post('/register',{
        username,
        email,
        password1,
      });
      if (response.data.success){
        setIsLogin(true);
        setUsername('');
        setEmail('');
        setPassword1('');
        setRePassword('');
        setIsChecked(false);
        setStatus({
          msg: response.data.msg,
          severity: 'success'
        });
        setSignUpOpen(false);
        setOpen(true);
      }
    }
    catch(e){
      setPassword1('');
      setRePassword('');
      if(e instanceof AxiosError)
      if(e.response)
        //check if e.response exist
        return setStatus({
          msg: e.response.data.error,
          severity: 'error',
        })
        return setStatus({
          msg : e.messsage,
          severity:'error',
          });
    }
  }
  const [signUpOpen, setSignUpOpen] = React.useState(false);
  const handleSignupOpen = () => {
    setOpen(false);
    setSignUpOpen(true);
  };
  const handleSignupClose = () => {
    setSignUpOpen(false);
  };

  return(
    <Box>
      {/* Login Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle} style={{borderRadius:"30px"}}>
          <br/>
          <IconButton onClick={handleClose} style={{marginLeft:"10px",color: "#d89b65" }}>
            <CloseIcon />
          </IconButton>
          <br />
          <Typography sx={headerTextStyle} style={{ textAlign: "center" }}>
            Welcome Back.
          </Typography>
          <form>
            <TextField
              sx={signField}
              style={{ backgroundColor: "#f2f2f2"}}
              label="Email"
              value={usernameOrEmail}
              error={usernameOrEmailError !== ""}
              helperText={usernameOrEmailError}
              onChange={handleEmailChange}
              fullWidth
              margin="normal"
            />
            <TextField
              sx={signField}
              label="Password"
              type="password"
              style={{ backgroundColor: "#f2f2f2" }}
              value={password}
              error={passwordError !== ""}
              helperText={passwordError}
              onChange={handlePasswordChange}
              fullWidth
              margin="normal"
              // variant="outlined"
            />
            <br></br>
            <br />

            <Button type="submit" onClick={handleSubmit} sx={signButton}>
              Login
            </Button>
            <br />
            <br />
            <Box sx={signField}>
              Don't have an account?
              <p
                style={{ color: "#306AFF" }}
                onClick={() => {
                  setOpen(false);
                  handleSignupOpen();
                  setIsLogin(false);
                }}
              >
                Register Now
              </p>
            </Box>
            <br />
            <br />
          </form>
        </Box>
      </Modal>

      {/* SignUp Modal */}
      <Box sx={signField} >
        <Modal open={signUpOpen} onClose={handleSignupClose}>
          <Box sx={modalStyle} style={{borderRadius:"30px"}}>
            <br/>
            <IconButton onClick={handleSignupClose} style={{marginLeft:"10px",color: "#d89b65" }}>
              <CloseIcon />
            </IconButton>
            <br />
            <Typography sx={headerTextStyle} style={{ textAlign: "center" }}>
              Join Us
            </Typography>
            <form>
              <TextField
                sx={signField}
                style={{ backgroundColor: "#f2f2f2" }}
                value={username}
                onChange={handleUsernameChange}
                error={usernameError !== ''}
                helperText={usernameError}
                fullWidth
                margin="normal"
                label="Username"
                placeholder="Type your username"
              />
              <TextField
                sx={signField}
                style={{ backgroundColor: "#f2f2f2" }}
                value={email}
                onChange={handleSignUpEmailChange}
                error={emailError !== ''}
                helperText={emailError}
                label="Email"
                placeholder="Type your email"
                fullWidth
                margin="normal"
                // variant="outlined"
              />
              <TextField
                sx={signField}
                type="password"
                style={{ backgroundColor: "#f2f2f2" }}
                value={password1}
                onChange={handleSignUpPasswordChange}
                error={passwordError1 !== ''}
                helperText={passwordError1}
                label="Password"
                placeholder="Type your password"
                fullWidth
                margin="normal"
                // variant="outlined"
              />
              <TextField
                sx={signField}
                style={{ backgroundColor: "#f2f2f2" }}
                type="password"
                value={rePassword}
                onChange={handleConfirmPasswordChange}
                error={rePasswordError !== ''}
                helperText={rePasswordError}
                label="Confirm password"
                placeholder="Type your password"
                fullWidth
                margin="normal"
              />
              <br></br>
              <br />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked}
                    onChange={handleCheck}
                    sx={{color:"#f2f2f2"}}
                  />
                }
                label="By creating an account you agree to the terms of use with addition to our privacy and policy"
                sx={signField}
              />
              <Box sx={signField}>
                {hasError && (
                  <div style={{ color: "red" }}>Please check the box</div>
                )}
              </Box>
              <br />
              <br />
              <Button type="submit" onClick={handleSubmitSignUp} sx={signButton}>
                Register
              </Button>
              <br />
              <Box sx={signField}>
                Already have an account?
                <p
                  style={{ color: "#306AFF" }}
                  onClick={() => {
                    handleSignupClose();
                    handleLoginOpen();
                    setIsLogin(true);
                  }}
                >
                  Login
                </p>
              </Box>
              <br />
              <br />
            </form>
          </Box>
        </Modal>
      </Box>

    </Box>
  );
};
export default Login;