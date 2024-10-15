
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase.js';
const auth = getAuth(app);
const Signup = () => {
    const [formData,setFormData] =useState({});
    const Collect =(event)=>
    {
        setFormData({
            ...formData,[event.target.name]:event.target.value
        })

    }
    const signupUser = (event) => {
        event.preventDefault();
        const {email,password}=formData;
        createUserWithEmailAndPassword(auth, email,password)
          .then((value) => console.log(value));
      };
    return (
        <div>
        <form onSubmit={signupUser}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" onChange={Collect} />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={Collect}/>
          <button type="submit">create a user</button>

        </form>
      </div>
      
    );
};

export default Signup;