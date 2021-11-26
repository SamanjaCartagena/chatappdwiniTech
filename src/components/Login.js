import {auth, firebaseRef} from "../config";

const Login = () =>{
    return(
    <div className="login">
        <button 
           onClick={() =>{
             auth.signInWithPopup(new firebaseRef.auth.GoogleAuthProvider());
        }}
        >
            Login with Google
        </button>
    </div>
    )
    }
export default  Login;
