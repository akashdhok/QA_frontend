import React from "react";
import GoogleLoginBtn from "./GoogleLogin";

const Login = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Login</h2>
        <p style={styles.subText}>
          Sign in to continue
        </p>

        {/* Google Login Button */}
        <div style={styles.googleBtnWrapper}>
          <GoogleLoginBtn />
        </div>
      </div>
    </div>
  );
};

export default Login;

// 🔹 Inline styles
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
  },
  card: {
    background: "#fff",
    padding: "30px",
    width: "100%",
    maxWidth: "380px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "5px",
    fontSize: "26px",
    fontWeight: "600",
  },
  subText: {
    marginBottom: "25px",
    color: "#666",
    fontSize: "14px",
  },
  googleBtnWrapper: {
    display: "flex",
    justifyContent: "center",
  },
};
