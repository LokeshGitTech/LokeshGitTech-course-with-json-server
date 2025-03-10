// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { logout } from '../features/authSlice'

// const Header = ({handleModal }) => {
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const  role  = useSelector(state => state.auth.currantUser.role)

//     const handleLogout = ()=> {
//         dispatch(logout())
//         navigate("/")
//     }
 
//   return (
//     <header>
//     <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
//         <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//             <div  class="flex items-center">
//                 <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
//                 <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//             </div>
//             <div class="flex items-center lg:order-2">
//                 <p onClick={handleLogout} class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log out</p>
//                 {role === "instructor" && <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" onClick={handleModal}>Add new Course</a>}
//                 <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
//                     <span class="sr-only">Open main menu</span>
//                     <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//                     <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//                 </button>
//             </div>
//             <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
//                 <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                     <li>
//                         <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
//                     </li>
//                     <li>
//                         <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
//                     </li>
//                     <li>
//                         <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
//                     </li>
//                     <li>
//                         <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
//                     </li>
//                     <li>
//                         <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
//                     </li>
//                     <li>
//                         <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
// </header>
//   )
// }

// export default Header


// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout } from '../../features/authSlice';
// import './Header.css'; 

// const Header = ({ role, handleModal }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/');
//   };

//   return (
//     <header className="header-container">
//       <nav className="nav-menu">
//         <div className="logo-container">
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="logo"
//             alt="Flowbite Logo"
//           />
//           <span className="logo-text">Accadumy</span>
//         </div>
//         <div className="menu-items">
//           <p onClick={handleLogout} className="menu-item">
//             Log out
//           </p>
//           {role === 'instructor' && (
//             <button
//               onClick={handleModal}
//               className="menu-item add-course-button"
//             >
//               Add new Course
//             </button>
//           )}
//           <button
//             className="menu-item mobile-menu-toggle"
//             aria-controls="mobile-menu-2"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="menu-icon"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//             <svg
//               className="hidden menu-icon-close"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </button>
//         </div>
      
//       </nav>
//     </header>
//   );
// };

// export default Header;



// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout } from '../../features/authSlice';

// const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { currentUser } = useSelector(state => state.auth);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/login');
//   };

//   return (
//     <header className="bg-blue-700 p-4 text-white">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Course Management</h1>
//         <div>
//           {currentUser.email ? (
//             <span className="mr-4">Welcome, {currentUser.email}</span>
//           ) : null}
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout } from '../../features/authSlice';

// const Header = ({ onAddCourse }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { currentUser } = useSelector(state => state.auth);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/login');
//   };

//   return (
//     <header className="bg-blue-700 p-4 text-white">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Course Management</h1>
//         <div className="flex items-center">
//           {currentUser?.email && (
//             <>
//               {currentUser?.role === 'instructor' && (
//                 <button
//                   onClick={onAddCourse}
//                   className="bg-green-500 hover:bg-green-600 px-3 py-2 rounded-lg mr-4"
//                 >
//                   Add Course
//                 </button>
//               )}
//               <span className="mr-4">Welcome, {currentUser.email}</span>
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/authSlice';

const Header = ({ onAddCourse }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const isInstructor = currentUser?.role === 'instructor' || user?.role === 'instructor';
  const isInstructorEmail = currentUser?.email || user?.email;
  console.log("isInstructorEmail",isInstructorEmail);

  const isStudent = currentUser?.role === 'student' || user?.role === 'student';
  

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="bg-black p-4 text-white header-container">
      <div className="container mx-auto flex justify-between items-center nav-menu">
        <div className="logo-container">
          <h1 className="text-2xl font-bold logo-text">Course Management</h1>
        </div>
        <div className="hidden md:flex menu-items">
          {isInstructorEmail  && (
            <>
            <span className="mr-4">Welcome, {currentUser.email || user.email}</span>
              {isInstructor && (
                <button
                  onClick={onAddCourse}
                  className="bg-white text-black hover:bg-gray-200 px-3 py-2 rounded-lg mr-4 add-course-button menu-item"
                >
                  Add Course
                </button>
              )}
              {/* <span className="mr-4">Welcome, {currentUser.email}</span> */}
              <button
                onClick={handleLogout}
                className="bg-white text-black hover:bg-gray-200 px-3 py-2 rounded-lg menu-item"
              >
                Logout
              </button>
            </>
          )}
        </div>
        <button
          className="md:hidden mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden mobile-menu-items">
          <ul className="mobile-menu-list">
            {isInstructorEmail && (
              <>
                {isInstructor && (
                  <li
                    className="mobile-menu-link"
                    onClick={() => {
                      onAddCourse();
                      setMenuOpen(false);
                    }}
                  >
                    Add Course
                  </li>
                )}
                <li className="mobile-menu-link">Welcome, {currentUser.email || user.email} </li>
                <li
                  className="mobile-menu-link"
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
