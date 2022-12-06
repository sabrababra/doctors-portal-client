import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const SignUp = () => {
    const {register,handleSubmit,formState: { errors }}=useForm();
    const {createUser,updateUser}=useContext(AuthContext);
    const [signupError,setSignupError]=useState('');
    const navigate=useNavigate();
    const handleSignup=(data)=>{
        setSignupError('');
        console.log(data);
        createUser(data.email,data.password)
        .then(res=>{
            const user=res.user;
            console.log(user);
            toast('User created Successfully')
            const userInfo={
                displayName:data.name
            }
            updateUser(userInfo)
            .then(()=>{
                navigate('/');
             })
            .catch(error=>{
                console.error(error);
            })
        })
        .catch(error=>{
            console.error(error.message);
            setSignupError(error.message);
        })
        

    }
    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className=' w-96 p-7'>
                <h2 className='text-xl text-center'>Signup</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" 
                        {...register("name")}
                        className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" 
                        {...register("email",{required:'Email is required'})}
                        className="input input-bordered w-full max-w-xs" />
                      {errors.email && <p className='text-red-600'> {errors.email?.message} </p>}

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input 
                        type="password"
                        {...register("password",{
                        required:'Password is required',
                        minLength:{value:6,message:'Password must be 6 character or more'},
                        pattern:{value:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,message:'Password not strong'}
                        })}
                         className="input input-bordered w-full max-w-xs" />
                         {errors.password && <p className='text-red-600'> {errors.password.message} </p>}

                        
                    </div>
                    <input className='btn btn-accent w-full mt-4' value='Signup' type="submit" />
                    {
                        signupError && <p className='text-red-600'>{signupError}</p>
                    }
                </form>
                <p>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="flex flex-col w-full border-opacity-50">

                    <div className="divider">OR</div>

                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;