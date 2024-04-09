function Profile() {
    return (
      <div className="container">
        <div className="row justify-content-center" >
          <div className="col-md-4 mt-5" >
            <h2 className="mb-4" style={{ backgroundColor: "white", padding: "10px", margin: "0 0 20px 0" }}>Account Settings</h2>
            <div >
              <div className="d-flex flex-row justify-content-start align-items-center">
                <img
                  src="./src/photo.png"
                  alt="img"
                  className="img-fluid rounded-circle me-3"
                  style={{ width: "100px", zIndex: "1" }}
                />
                <div>
                  <h3>Marry Doe</h3>
                  <h4>marrydoe@gmail.com</h4>
                </div>
              </div>
            </div>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              perspiciatis odit repellat. Possimus id numquam repudiandae
              dolores similique? Minus, repellat.
            </p>
            <hr/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Profile;
  