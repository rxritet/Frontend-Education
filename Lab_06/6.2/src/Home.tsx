import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="page hero-page">
            <h1>Welcome to Student Portal</h1>
            <p className="subtitle">
                Your one-stop place for courses, schedules, and university information
            </p>
            <div className="hero-links">
                <Link to="/courses" className="btn">
                    Browse Courses
                </Link>
                <Link to="/about" className="btn btn-outline">
                    About Us
                </Link>
            </div>
        </div>
    )
}

export default Home;