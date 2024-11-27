import { Divider } from "@mui/material";
import logo from "../Components/Assets/logo.png";
import { FacebookOutlined, Google, VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../Firebase/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();
    const fbProvider = new FacebookAuthProvider();

    const handleFacebookLogin = async () => {
        try {
            const { user } = await signInWithPopup(auth, fbProvider);
            console.log({ user }); // Thông tin người dùng    

            //Ghi thông tin người dùng vào Firestore
            const userRef = doc(db, 'users', user.uid); // Lấy tham chiếu đến tài liệu
            await setDoc(userRef, {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                providerId: user.providerData[0]?.providerId,
                uid: user.uid,
                createdAt: new Date(),
            }, { merge: true }); // Sử dụng merge để không ghi đè dữ liệu cũ

            console.log("Thông tin người dùng đã được lưu vào Firestore");
            navigate('/'); // Chuyển hướng sau khi đăng nhập thành công
        } catch (error){
            console.error("Error during Facebook Login: ", error);
            
        }

    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
            <div className="bg-white shadow-md rounded-md p-8 w-96">
                <div className="flex justify-center mb-4">
                    <img src={logo} alt="logo" className="h-16" /> 
                </div>

                <h1 className="text-2xl font-semibold text-center mb-4">Login Form</h1>

                <form>
                    <div className="mb-4">
                        <label 
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Email
                        </label>
                        <input 
                            type="email" 
                            placeholder="email@gmail.com"
                            id="email"
                            className="shadow w-full appearance-none border px-2 py-3 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label 
                            htmlFor="password"                            
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="••••••••••••" 
                                className="shadow w-full appearance-none px-2 py-3 leading-tight focus:outline-none focus:shadow-outline border"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                            >
                                {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mb-2">
                        <button type="submit" className="rounded-md bg-orange-600 w-full py-2 text-white hover:bg-orange-500 focus:outline-none focus:shadow-outline">
                            Login
                        </button>
                    </div>

                    <div className="mb-2">
                        <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">Forgot Password?</a>
                    </div>

                    <div className="mb-4">
                        <Divider>or</Divider>
                    </div>

                    <div className="flex justify-between mb-4">
                        <button
                            onClick={handleFacebookLogin}
                            className="flex justify-center items-center rounded-md w-[48%] border px-4 py-2 hover:bg-gray-100"
                        >
                            <FacebookOutlined className="mr-2"/>
                            Facebook
                        </button>

                        <button
                            type="button"
                            className="flex justify-center items-center rounded-md w-[48%] border px-4 py-2 hover:bg-gray-100"
                        >
                            <Google className="mr-2"/>
                            Google
                        </button>
                    </div>

                    <div className="flex justify-center items-center">
                        <p className="text-gray-500 text-sm">
                            Don&apos;t have an account?     
                            <a href="#" className="text-blue-500 hover:text-blue-700 text-sm"><Link to="/signup">Sign up</Link></a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}