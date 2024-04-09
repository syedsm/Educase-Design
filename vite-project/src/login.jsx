import{Link} from'react-router-dom';
function Login() {
    return (
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4" style={{ maxWidth: "400px", height: "80vh" }}>
          <h2 className=" mb-4" style={{ color: '#000000' }}>Sign in to your PopX account</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, animi? Cupiditate nostrum fugit mollitia voluptatem.</p>
          <div className="form-outline mb-3">
            <input type="text" className="form-control" style={{ border: "2px solid #ced4da" }} />
            <label className="form-label" style={{ color: '#6C25FF' }}>Email Address *</label>
          </div>
          <div className="form-outline mb-3">
            <input type="password" className="form-control" style={{ border: "2px solid #ced4da" }} />
            <label className="form-label" style={{ color: '#6C25FF' }}>Password *</label>
          </div>
        <Link to='/profile'> <button className="mt-4 button form-control" style={{ backgroundColor: '#642AF5' }}>Login</button></Link>
        </div>
      </div>
    );
  }
  
  export default Login;
  