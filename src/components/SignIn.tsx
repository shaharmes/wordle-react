import React, { useContext } from "react";
import '../css/sign.scss';
import { useForm } from 'react-hook-form';
import { NavContext } from "../providers/NavContext";

type FormData = {
    Name: string;
    Password: string;
  };

export function SignIn() : JSX.Element {

    const { register, handleSubmit} = useForm<FormData>();
    const { handleCloseLogin, setUser} = useContext(NavContext)
  
    const onSubmit = (data: FormData) => {
        setUser(data.Name);
    }

    return (
    <>
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <form id="formSign" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("Name")} className = "mt-3 fadeIn second" type="text" id="login" placeholder="Name"/>
                    <input {...register("Password")} type="text" id="password" className="fadeIn third" placeholder="Password"/>
                    <input type="submit" onClick={handleCloseLogin} className="fadeIn fourth" value="Log In"/>
                </form>
            </div>
        </div>
    </> 
    );
}
