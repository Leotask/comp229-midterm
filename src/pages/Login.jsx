import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase_setup/firebase';
import { NavLink, useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem('user', JSON.stringify(user));
                if (user.email === 'doctor1@gmail.com') {
                    navigate("/getdata");
                  } else {
                    navigate("/patientappointment");
                  }
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }




    return (
        <>
            <main >
                <section>
                    <div>
                    <h1>Log In</h1>  

                        <form>
                            <div className="loginform">
                                <label >
                                <input 
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="Email address"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="label-password">
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                </label>
                            </div>

                            <div classNmae="loginbutton">
                                <button onClick={onLogin}>
                                    Login
                                </button>
                            </div>
                        </form>




                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Register
                            </NavLink>
                        </p>

                    </div>
                </section>
            </main>
        </>
    )
};
export default Login


// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [user, setUser] = useState(null); // Track the user's authentication status

//     useEffect(() => {
//         // Check the user's authentication status when the component mounts
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             setUser(user);
//         });

//         // Clean up the subscription when the component unmounts
//         return () => unsubscribe();
//     }, []);

//     const onLoginOrLogout = () => {
//         if (user) {
//             // If user is authenticated, perform logout
//             signOut(auth)
//                 .then(() => {
//                     // Signed out
//                     console.log("User signed out");
//                     navigate("/");
//                 })
//                 .catch((error) => {
//                     console.error("Error signing out", error);
//                 });
//         } else {
//             // If user is not authenticated, perform login
//             signInWithEmailAndPassword(auth, email, password)
//                 .then((userCredential) => {
//                     // Signed in
//                     const signedInUser = userCredential.user;
//                     navigate("/appointment");
//                     console.log(signedInUser);
//                 })
//                 .catch((error) => {
//                     const errorCode = error.code;
//                     const errorMessage = error.message;
//                     console.log(errorCode, errorMessage);
//                 });
//         }
//     };

//     return (
//         <>
//             <main>
//                 <section>
//                     <div>
//                         <h1> Login </h1>

//                         <form>
//                             <div>
//                                 <label htmlFor="email-address">
//                                     Email address
//                                 </label>
//                                 <input
//                                     id="email-address"
//                                     name="email"
//                                     type="email"
//                                     required
//                                     placeholder="Email address"
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="password">
//                                     Password
//                                 </label>
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     required
//                                     placeholder="Password"
//                                     onChange={(e) => setPassword(e.target.value)}
//                                 />
//                             </div>

//                             <div>
//                                 <button onClick={onLoginOrLogout}>
//                                     {user ? 'Logout' : 'Login'}
//                                 </button>
//                             </div>
//                         </form>

//                         <p className="text-sm text-white text-center">
//                             No account yet? {' '}
//                             <NavLink to="/signup">
//                                 Register
//                              </NavLink>
//                         </p>

//                     </div>
//                 </section>
//             </main>
//         </>
//     );
// };

// export default Login;
