import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <>
            <section id="error-page">
                <div className=" content">
                    <h2 className="header">404</h2>
                    <h4>Sorry! Page not found</h4>
                    <p>
                        Oops! It seems like the page you're trying to access doesn't exist.
                        If you believe there's an issue, feel free to report it, and we'll
                        look into it.
                    </p>
                    <div className="btns" >
                        <NavLink to="/" style={{ margin: "0 5px", color: "white" } }>return home</NavLink>
                        <NavLink to="/contact" style={{ margin: "0 10px", color: "white" }}>report problem</NavLink>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Error;