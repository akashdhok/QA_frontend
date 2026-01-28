import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleLoginBtn = () => {
  const handleGoogleLogin = async (res) => {
    try {
      const googleToken = res.credential;

      const response = await axios.post(
       "http://192.168.29.89:7867/api/user/google-login", 
        { token: googleToken }
      );

      localStorage.setItem("token", response.data.token);

      alert("Login successful 🎉");
    } catch (err) {
      alert(err?.response?.data?.message || "Google login failed");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleLogin}
      onError={() => alert("Google Login Failed")}
      text="signin_with"
    />
  );
};

export default GoogleLoginBtn;
