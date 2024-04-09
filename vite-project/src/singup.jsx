import{Link} from'react-router-dom';

function Signup() {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4" style={{ maxWidth: "400px", height: "80vh" }}>

        <div className="col-md-12">
        <h2 className="text-center mb-4" style={{ color: '#000000' }}>Create your PopX account</h2>
          <div className="form-outline mb-3">
            <input type="text" className="form-control" style={{ border: "2px solid #ced4da" }} />
            <label className="form-label" style={{ color: '#6C25FF' }}>Full Name *</label>
          </div>
          <div className="form-outline mb-3">
            <input type="text" className="form-control" style={{ border: "2px solid #ced4da" }} />
            <label className="form-label"style={{ color: '#6C25FF' }}>Phone Number *</label>
          </div>
          <div className="form-outline mb-3">
            <input type="text" className="form-control" style={{ border: "2px solid #ced4da" }} />
            <label className="form-label" style={{ color: '#6C25FF' }}>Email Address *</label>
          </div>
          <div className="form-outline mb-3">
            <input type="password" className="form-control" style={{ border: "2px solid #ced4da" }} />
            <label className="form-label" style={{ color: '#6C25FF' }}>Password *</label>
          </div>
          <div className="form-outline mb-3">
            <input type="text" className="form-control" style={{ border: "2px solid #ced4da" }} />
            <label className="form-label" style={{ color: '#6C25FF' }}>Company Name *</label>
          </div>
          <div className="form-outline mb-3">
            <h4>Are You an Agency</h4>
            <div className="mt-2">
              <input type="radio"  name="agency"  className="form-check-input" />
              <label  className="form-check-label me-3">Yes</label>
              <input type="radio"  name="agency"  className="form-check-input" />
              <label  className="form-check-label">No</label>
            </div>
         <Link to='/login'> <button className="form-control mt-5 button" style={{ backgroundColor: '#642AF5' }}>Create  Account</button></Link>
          </div>
        </div>
        </div>

      </div>
    );
  }
  
  export default Signup;
  