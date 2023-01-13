import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content justify-between">
                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Hotel</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>


                    <ul className="menu menu-horizontal">
                        <li tabIndex={0}>
                            <Link className='btn btn-ghost normal-case text-[18px]'>
                                Categories
                            </Link>
                            <ul className="p-2 bg-primary z-10">
                                <li><Link to='/single'>Single Room</Link></li>
                                <li><Link to='/couple'>Couple Room</Link></li>
                                <li><Link to='/family'>Family Room</Link></li>
                            </ul>
                        </li>
                    </ul>

                    {
                        user?.email
                        && <h2>Welcome, {user.email}</h2>
                    }

                </div>

                <div>


                    {user && user.uid
                        ? <button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">Log Out</button>

                        : <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                    }

                    <Link className="btn btn-ghost normal-case text-xl" to='/signup'>Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;