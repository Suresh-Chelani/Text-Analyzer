import React from 'react';


export default function SignUp() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5 border border-2 p-4">
          <h2 className="text-center mb-4">Sign Up</h2>
          <form>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary my-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
