import React from "react"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'

export function Welcome() {
    return (
        <>
            <br/><br/><br/><br/>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <>
                            <h1 className="fw-light">Welcome to Shahar's Wordle!</h1>
                            <p className="lead text-muted">Hope you will enjoy, please log in to continue</p>
                            <Link to={'/sign-in'} type="button" className="btn btn-outline-primary">Log In</Link>
                        </>
                    </div>
                </div>
            </section>
        </>
    )
}