import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    // console.log(signIn);

    //user successfully login hoye gele take / route a niye jabe
    const navigate = useNavigate();

    // right route setup
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log('signIn user', user);
                // reset from after login
                form.reset();
                //user successfully login hoye gele take / route a niye jabe
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
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
        <div>
            <div className="hero min-h-[93.5vh] bg-base-200">
                <div className="hero hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Log in</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <button onClick={handleGoogleSignIn} className="capitalize text-base btn btn-success btn-outline mx-8 mb-7">Continew with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;