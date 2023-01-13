import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const SignUp = () => {

    const [error, setError] = useState(null);

    // passwordSignIn start
    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        //Password validation
        if (password.length < 8) {
            setError('Password should be 8 characters');
            return;
        } else if (password !== confirm) {
            setError('Wrong Password');
            return;
        } else {
            setError('');
        }

        // SignIn
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/login');
            })
            .catch(error => {
                console.error('error', error);
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }



    return (
        <div className="hero min-h-[93.5vh] bg-base-200">

            <div className="hero hero-content flex-col">
                <h1 className="text-4xl font-bold">Sign Up</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    {/* ----------------------Form Start-------------- */}

                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input name='confirm' type="password" placeholder="password" className="input input-bordered" required />

                            {/* Show error */}
                            <span className='text-error label-text-alt'>{error}</span>

                            <label className="text-center">
                                <span className='label-text-alt mr-2'>Already have an account?</span>

                                <span className="link-hover text-xs text-warning">
                                    <Link to={'/login'}>Login</Link>
                                </span>
                            </label>
                        </div>

                        <div className="divider px-4">or</div>

                        <div className="form-control">
                            <button className="capitalize btn btn-warning text-lg">Sign Up</button>
                        </div>
                    </form>

                    {/* ----------------------Form End---------------- */}

                    <button  onClick={handleGoogleSignIn} className="capitalize text-base btn btn-success btn-outline mx-8 mb-7">Continew with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;