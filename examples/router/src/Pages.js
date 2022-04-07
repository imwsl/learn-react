import React from "react";
import {Link, Outlet, useParams} from 'react-router-dom'

export function Home() {
    return (
        <>  
            <div>
                <h1>Home Page</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="events">Events</Link>
                    <Link to="products">Products</Link>
                    <Link to="contact">Contact</Link>
                </nav>
            </div>
        </>
    )
}

// home's nesting page...
export function Service() {
    return (
        <>
            <section>
                <p>春眠不觉晓，处处闻啼鸟</p>
                <p>夜来风雨声，花落知多少</p>
            </section>
        </>
    )
}

export function About() {
    return (
        <>
            <h1>About Page</h1>
            <Outlet />
        </>
    )
}

export function Events() {
    //
    // get the params
    let params = useParams()
    console.log(params)
    return (
        <>
            <h1>Events Page Params.id</h1>
        </>
    )
}

export function Products() {
    return (
        <>
            <h1>Products Page</h1>
        </>
    )
}

export function Contact() {
    return (
        <>
            <h1>Contact Page</h1>
        </>
    )
}

export function Page404() {
    return (
        <>
            <h1>Page 404!!</h1>
        </>
    )
}