import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container">
      <div className="row main">
        <div className="col-md-4">
          <h2>Welcome to PopX</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
            praesentium.
          </p>
          <Link to="/signup">
            
            <button
              className="mb-1 form-control"
              style={{ backgroundColor: "#6C25FF", color: "white" }}
            >
              Create Account
            </button>
          </Link>
          <br />
          <Link to="/login">
            
            <button
              className="form-control "
              style={{
                backgroundColor: "#E70B897B",
                color: "black",
                fontStyle: "bold",
              }}
            >
              Already Registered ? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
