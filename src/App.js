import React from "react";
import useInputValidation from './hook/useInputValidation'




const User = () => {
  const firstName = useInputValidation('');
  const lastName = useInputValidation('');

  

  return(
    <div className="w-50 mx-auto mb-5">
      <div className="border p-3 mt-5">
        <p className="text-center fs-3">Register</p>
        <div className="d-flex gap-3 ">
            <input 
              type="text"
              className={`form-control ${firstName.colorValidate}`} 
              placeholder="First name" 
              value={firstName.value} 
              onChange={firstName.onChange}
            />
            <input 
              type="text" 
              className={`form-control ${lastName.colorValidate}`} 
              placeholder="Last name" 
              value={lastName.value} 
              onChange={lastName.onChange}
            />
        </div>
        <button className="mt-3 btn btn-success">Send data</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <User />
  );
}

export default App;
