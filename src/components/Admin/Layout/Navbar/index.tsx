import * as React from 'react';
import { Link } from 'react-router-dom';
import { ENV } from '../../../../config';
import './styles.scss';
import Action from '../../../Layout/Navbar/Action/Action';

function Navbar() {
    return (
        <nav
            className="sticky z-[100] bg-white dark:bg-gray-900 w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600"
            style={{ backgroundColor: '#3399ff' }}
        >
            <div className="w-full flex flex-wrap items-center justify-around p-4">
                <Link to="/" className="flex items-center">
                    <img
                        src={ENV.staticFileUrl + 'f8-icon.png'}
                        className="h-8 mr-3 min-w-[40px] min-h-[40px] rounded-2xl"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-2xl">
                        F8 Admin
                    </span>
                </Link>
                <div className="flex md:order-2">
                    <Action />
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    {/* <Search /> */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
