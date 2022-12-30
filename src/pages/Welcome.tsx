import React from "react"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import { NavContext } from "../providers/NavContext"
import { useContext } from "react"

export function Welcome() {



    const {user} = useContext(NavContext);
    return (
        <>
            <br/><br/><br/><br/>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <>
                            <h1 className="fw-light">Welcome {user ? user: 'Guest'}!</h1>
                            {/* <p className="lead text-muted">Hope you will enjoy, please log in to continue</p> */}
                            <br></br>
                            <br></br>
                            <Link to={'/wordle'} type="button" className="btn btn-outline-primary">Play!</Link>
                        </>
                    </div>
                </div>
            </section>
        </>
    )
}