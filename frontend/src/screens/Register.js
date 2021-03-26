import React from "react";

export default function Register(){
const email;
const password;
const country;
const acceptedTerms;

return (
    <form onSubmit={Submit}>
        <h1>Create Account</h1>

        <label> Email:
            <input name="email" type="email" value={email} required />
        </label>

        <label> Password:
            <input name="password" type="password" value={password} required />
        </label>

        <label> Country:
            <select name="country" value={country} required>
            </select>
        </label>

        <label>
            <input name="acceptedTerms" type="checkbox" required /> 
            I accept the terms of service
        </label>

        <button>Submit</button>
    </form>
);
}
