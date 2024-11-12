import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { confirmOTP, Loginuse, Register, resendOTP } from '../utils/Constants';
import toast from 'react-hot-toast';
import OTPInput from 'react-otp-input';
import HashLoader from '../Layouts/Loader';

const Container = styled.div`
    
    .gretText{
        color: var(--loginPointsColor);
    }

    .form-control{
        background-color: var(--greyDivBg)
    }

    .form-control::placeholder{
       color: var(--grey11Normal)
    }
`;


const Login = () => {

    const [showLoader, setShowLoader] = useState(false);

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);


    // const [register, setRegister] = useState(false)
    const [hideForOTP, setHideForOTP] = useState(false);

    // Sign Up UseState
    const [number, setNumber] = useState("");
    const [numbeValidError, setNumberValidError] = useState(false);
    const [numberIsRequiredError, setNumberIsRequiredlError] = useState(false);

    // const [selectedFile, setSelectedFile] = useState(null);
    // const [error, setError] = useState('');

    // const [email, setEmail] = useState('');
    // const [emailIsRequiredError, setEmailIsRequiredlError] = useState(false);
    // const [emailValidError, setEmailValidError] = useState(false);
    // const [name, setName] = useState('');
    // const [nameIsRequiredError, setNameIsRequiredlError] = useState(false);
    // const [nameValidError, setNameValidError] = useState(false);
    // const [dob, setDob] = useState('');
    // const [dobIsRequiredError, setDobIsRequiredlError] = useState(false);
    // const [dobValidError, setDobValidError] = useState(false);

    const [otp, setOtp] = useState("");
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);


    // const handleEmailChange = (value) => {
    //     setEmail(value);
    //     const rex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (value === "") {
    //         setEmailValidError(false);
    //         setEmailIsRequiredlError(true);
    //     } else if (rex.test(value) === false) {
    //         setEmailValidError(true);
    //         setEmailIsRequiredlError(false);
    //     } else {
    //         setEmailValidError(false);
    //         setEmailIsRequiredlError(false);
    //     }
    // };

    // const handleNameChange = (value) => {
    //     setName(value);
    //     const rex = /^[a-zA-Z\s'-]+$/;
    //     if (value === "") {
    //         setNameValidError(false);
    //         setNameIsRequiredlError(true);
    //     } else if (rex.test(value) === false) {
    //         setNameValidError(true);
    //         setNameIsRequiredlError(false);
    //     } else {
    //         setNameValidError(false);
    //         setNameIsRequiredlError(false);
    //     }
    // };

    // const handleDobChange = (value) => {
    //     setDob(value);
    //     const rex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    //     if (value === "") {
    //         setDobValidError(false);
    //         setDobIsRequiredlError(true);
    //     } else if (rex.test(value) === false) {
    //         setDobValidError(true);
    //         setDobIsRequiredlError(false);
    //     } else {
    //         setDobValidError(false);
    //         setDobIsRequiredlError(false);
    //     }
    // };

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];

    //     if (file) {
    //         if (file.type.startsWith('image/')) {
    //             // If the selected file is an image
    //             setSelectedFile(file);
    //             setError('');
    //         } else {
    //             // If the selected file is not an image
    //             setSelectedFile(null);
    //             setError('Please select a valid image file.');
    //         }
    //     }
    // };

    useEffect(() => {
        const getLocation = () => {
            setShowLoader(true)
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setShowLoader(false)
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);
                    },
                    (error) => {
                        setError(error.message);
                    }
                );
            } else {
                setError('Geolocation is not supported by this browser.');
            }
        };
        getLocation();
    }, []);


    // Handle Email
    const handleNumber = (value) => {
        setNumber(value);
        // console.log(value);
        const rex = /^[6-9]\d{9}$/;
        if (value === "") {
            setNumberValidError(false);
            setNumberIsRequiredlError(true);
        } else if (rex.test(value) === false) {
            setNumberValidError(true);
            setNumberIsRequiredlError(false);
        } else {
            setNumberValidError(false);
            setNumberIsRequiredlError(false);
        }
    };

    const loginuser = async (e) => {
        e.preventDefault();
        if (number === "" || !number) {
            setNumberIsRequiredlError(true);
        }

        if ((number !== "")) {
            const formData = new FormData();
            formData.append("mobile_number", number);
            formData.append("device_id", "1223");
            formData.append("latitude", latitude);
            formData.append("longitude", longitude);
            try {
                const response = await Loginuse(formData);
                // console.log(response, "Login response");
                if (response?.status === 200) {
                    toast.success(response?.data?.message)
                    setHideForOTP(true);
                }
            } catch (err) {
                console.log(err)
            }
        }

    };

    const verifyOTP = async (e) => {
        e.preventDefault();
        setShowLoader(true)
        if ((otp !== '')) {
            const formData = new FormData();
            formData.append("mobile_number", number);
            formData.append("otp", otp);
            formData.append("latitude", latitude);
            formData.append("longitude", longitude);
            try {
                const response = await confirmOTP(formData);
                if (response?.status === 200) {
                    toast.success(response?.data?.message);
                    setShowLoader(false)
                    if (response?.data?.status === "success") {
                        localStorage.setItem(
                            `pay999-token`, response?.data?.data?.profileDetails?.api_token
                        );
                        localStorage.setItem(
                            `profileDetails`, JSON.stringify(response?.data?.data?.profileDetails)
                        );
                        window.location.reload();
                    }
                    if (response?.data?.status === "pending") {
                        window.location.replace('https://play.google.com/store/apps/details?id=com.pay999');
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }

    };



    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    const resendOtp = async (e) => {
        e.preventDefault();
        setShowLoader(true)
        if ((number !== "")) {
            const formData = new FormData();
            formData.append("mobile_number", number);
            try {
                const response = await resendOTP(formData);
                // console.log(response, "resend OTP");
                if (response?.status === 200) {
                    setShowLoader(false)
                    toast.success(response?.data?.message);
                    setMinutes(1);
                    setSeconds(30);

                }
            } catch (err) {
                console.log(err)
            }
        }

    };



    // const RegisterUser = async (e) => {
    //     if (number === "" || !number) {
    //         setNumberIsRequiredlError(true);
    //     }
    //     if (email === "" || !email) {
    //         setEmailIsRequiredlError(true);
    //     }
    //     if (name === "" || !name) {
    //         setNameIsRequiredlError(true);
    //     }
    //     if (dob === "" || !dob) {
    //         setDobIsRequiredlError(true);
    //     }
    //     e.preventDefault();
    //     if ((selectedFile !== "", email !== "", name !== "", dob !== "")) {
    //         const formData = new FormData();
    //         formData.append("profile_photo", selectedFile);
    //         formData.append("mobile_number", number);
    //         formData.append("name", name);
    //         formData.append("email", email);
    //         formData.append("dob", dob);
    //         formData.append("latitude", "1.11");
    //         formData.append("longitude", "1.11");
    //         formData.append("device_id", 12345);
    //         try {
    //             const response = await Register(formData);
    //             console.log(response, "Register");
    //             if (response?.status === 200) {
    //                 toast(response?.data?.message);
    //                 if (response?.data?.status === "success") {
    //                     localStorage.setItem(
    //                         `registerDetails`, JSON.stringify(response?.data?.data?.profileDetails)
    //                     );
    //                     window.location.reload();
    //                 }
    //                 if (response?.data?.status === "pending") {
    //                     window.location.replace('https://play.google.com/store/apps/details?id=com.pay999');
    //                 }
    //             }
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }

    // };

    // const [otp, setOtp] = useState('');

    const renderInput = (inputProps, index) => {
        return (
            <input
                {...inputProps}
                className="form-control mx-2"
                key={index}
                style={{
                    width: '3rem',
                    height: '3rem',
                    margin: '0 0.5rem',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                    border: '1px solid #ced4da',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    outline: 'none', // Remove default input focus outline
                }}
            />
        );
    };


    return (
        <>
            {showLoader && <HashLoader />}
            <Container>
                <div className="contanier-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="row p-3">
                                <p><img src="./images/pay999_2nd.svg" alt="" /></p>
                                <p className='font20_a font500Weight'>To Login into your Pay999 Web account</p>
                                <ul className='list-unstyled'>
                                    <li className='fontLineHeight30 font17 gretText'>1. Open Pay999 App</li>
                                    <li className='fontLineHeight30 font17 gretText'>2. Tap Scan option available at the bottom</li>
                                    <li className='fontLineHeight30 font17 gretText'>3. Point Paytm Scan at QR Code to login</li>
                                </ul>
                                <p className='font17 gretText text-center'>Or</p>
                                {!hideForOTP ?
                                    <div>
                                        <div>
                                            <input onChange={(e) => handleNumber(e.target.value)} maxLength="10" type="text" class="form-control" placeholder='Enter your Mobile number' />
                                            {numberIsRequiredError && (
                                                <div className='text-start p-2' style={{ color: "red", fontSize: "x-small" }}>
                                                    Number is required
                                                </div>
                                            )}
                                            {numbeValidError && (
                                                <div className='text-start p-2' style={{ color: "red", fontSize: "x-small" }}>
                                                    Please enter valid Number
                                                </div>
                                            )}
                                        </div>
                                        <p><button onClick={loginuser} type="button" className="btn btn-secondary mt-2 w-100">Send code via SMS</button></p>
                                    </div>
                                    :
                                    <div>
                                        <label for="exampleFormControlInput1" class="form-label labelMain mb-3">Enter verification code *</label>
                                        <p className='d-flex justify-content-center'>
                                            <OTPInput
                                                value={otp}
                                                onChange={setOtp}
                                                numInputs={6} // Specify the number of OTP digits
                                                separator={<span>-</span>} // Optional separator between OTP digits
                                                renderInput={renderInput}
                                            />
                                        </p>

                                        <p>
                                            <button onClick={verifyOTP} type="button" className="btn btn-secondary mt-2 w-100">Submit OTP</button>
                                            <div className='d-flex justify-content-between align-item-center mt-2'>
                                                {seconds > 0 || minutes > 0 ? (
                                                    <p>
                                                        Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                                                        {seconds < 10 ? `0${seconds}` : seconds}
                                                    </p>
                                                ) : (
                                                    <p>Didn't recieve code?</p>
                                                )}
                                                <button
                                                    type="button" class="btn btn-secondary"
                                                    disabled={seconds > 0 || minutes > 0}
                                                    style={{
                                                        color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#6cf12f",
                                                    }}
                                                    onClick={resendOtp}
                                                >
                                                    Resend OTP
                                                </button>
                                            </div>
                                        </p>
                                    </div>
                                }
                                <p className='font17 gretText'>To create an account download Pay999 App</p>
                                <p><img src="./images/googlePlay.svg" alt="" /> <img src="./images/AppStore.svg" alt="" /></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img src="./images/LoginQR.svg" alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Login