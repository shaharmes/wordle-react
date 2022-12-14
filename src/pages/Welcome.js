import React from "react"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'

export function Welcome() {
    return (
        <>
            <br/><br/><br/><br/>
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <>
                            <h1 class="fw-light">Welcome to Shahar's Wordle!</h1>
                            <p class="lead text-muted">Hope you will enjoy, please log in to continue</p>
                            <Link to={'/sign-in'} type="button" class="btn btn-outline-primary">Log In</Link>
                        </>
                    </div>
                </div>
            </section>
        </>
    )
}