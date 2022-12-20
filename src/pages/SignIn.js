import React, { useRef} from "react";
import { useNavigate } from 'react-router-dom';
import '../sign.css';

export function SignIn() {

    const userName = useRef(null);
    const userPassword = useRef(null);
    let navigate = useNavigate();
  
    const updateUserDeatils = (event) => {
   
          navigate('/wordle');
      }

    return (
    <>
        <div className="wrapper fadeInDown mt-5">
            <div id="formContent">
                <form id="formSign" onKeyUp={updateUserDeatils}>
                    <input ref= {userName} className = "mt-3 fadeIn second" type="text" id="login" name="login" placeholder="Name"/>
                    <input ref= {userPassword} type="text" id="password" className="fadeIn third" name="login" placeholder="Password"/>
                    <input onClick = {updateUserDeatils} type="button" className="fadeIn fourth" value="Log In"/>
                </form>
            </div>
        </div>
    </> 
    );
}
