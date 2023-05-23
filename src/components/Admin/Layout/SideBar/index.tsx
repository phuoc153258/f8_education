import * as React from 'react';
import { Link } from 'react-router-dom';

function SideBar({ page }: any) {
    return (
        <aside
            id="sidebar-multi-level-sidebar"
            className="top-0 left-0 z-40 w-96 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full poverflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium m-0 p-0" style={{ fontWeight: '500', fontSize: '1.5rem' }}>
                    <li className="p-2">
                        <Link
                            to="/"
                            className={`flex items-center p-4 text-gray-900 rounded-lg dark:text-white  ${
                                page === 'courses'
                                    ? 'bg-gray-200 dark:bg-gray-700'
                                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                            } `}
                        >
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                            </svg>
                            <span className="ml-3">Quản lý khóa học</span>
                        </Link>
                    </li>
                    <li className="p-2">
                        <button
                            type="button"
                            className="flex items-center w-full p-4 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            aria-controls="dropdown-example"
                            data-collapse-toggle="dropdown-example"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">
                                E-commerce
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;
