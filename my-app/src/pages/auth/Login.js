import {useState} from 'react'
import styles from "./auth.module.scss"
import loginImg from "../../assets/login.png"
import {Link,useNavigate} from "react-router-dom"
import {FaGoogle} from "react-icons/fa"
import Card from '../../components/card/Card'
import { createUserWithEmailAndPassword } from "firebase/auth"
import {auth} from "../../firebase/config"
import { toast, ToastContainer } from 'react-toastify'
import Loader from '../../components/loader/Loader'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [isLoading,setIsLoading]=useState(false)

  const navigate=useNavigate()

  const loginUser=(e)=>{
    e.preventDefault()
    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   const user = userCredential.user;
   setIsLoading(false)
   toast.success("Login Successful...")
   navigate("/")
    
  })
  .catch((error) => {
    toast.error(error.message)
    setIsLoading(false)
  });

  }
  
  //Login with Google
  const provider = new GoogleAuthProvider();
  const signInWithGoogle =()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
     const user = result.user;
     toast.success("Login Successfully")
     navigate("/")
   
  }).catch((error) => {
    // Handle Errors here.
    toast.error(error.message)
    
  });
  }
  return (
    <>
    <ToastContainer/>
    {isLoading && <Loader/> }
   <section className={` container ${styles.auth}`}>
     <div className={styles.img}>
        <img src={loginImg} alt='loginImg' width="400"/>
     </div>

     <Card>
     <div className={styles.form}>
        <h2>Login</h2>
      
        <form onSubmit={loginUser}>
            <input type='text' placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}>

            </input>
            <input type='text' placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)}>

            </input>
            <button className='--btn --btn-primary --btn-block' type='submit'>Login</button>
            <div className={styles.links}>
                <Link to="/reset">Reset Password</Link>
            </div>
            <p>-- or --</p>
        </form>
        
        <button className='--btn --btn-danger --btn-block' onClick={signInWithGoogle}> <FaGoogle color='#fff'/>Login With Google</button>
        <span className={styles.register}>
            <p>Don't have an account?</p>
            <Link to="/register">Register</Link>
        </span>
     </div>
     </Card>
   </section>
   </>
  )
}

export default Login