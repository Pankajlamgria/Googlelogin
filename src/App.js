import logo from './logo.svg';
import './App.css';
import { GoogleLogin,GoogleOAuthProvider  } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
function App() {
  return (
    <div className='cover'>
    <div className="App">
      <h2>login with google</h2>
    </div>
    <div className='login'>
        <GoogleOAuthProvider clientId="146667961146-iu19p089pa4m7bt3h10tq58i734qsm6o.apps.googleusercontent.com"><GoogleLogin
  onSuccess={credentialResponse => {
    var decoded = jwt_decode(credentialResponse.credential);
    console.log(decoded);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/></GoogleOAuthProvider>
</div>

    </div>
  );
}

export default App;
