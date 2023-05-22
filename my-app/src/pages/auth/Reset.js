import {useState} from 'react'
import styles from "./auth.module.scss"
import resetImg from "../../assets/forgot.png"
import {Link} from "react-router-dom"
import Card from '../../components/card/Card'
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../../firebase/config"
import { toast,ToastContainer } from 'react-toastify'
import Loader from '../../components/loader/Loader'

function Reset() {
  const [email,setEmail]=useState("")
  const [isLoading,setIsLoading]=useState(false)

  const resetPassword=(e)=>{
   e.preventDefault()
   
   sendPasswordResetEmail(auth, email)
  .then(() => {
   toast.success("Check your email for a reset link")
   setIsLoading(false)
  })
  .catch((error) => {
   toast.error(error.message)
   setIsLoading(false)
  });

  }
  return (
    <div>
       <ToastContainer/>
      {isLoading && <Loader/> }
       <section className={` container ${styles.auth}`}>
     <div className={styles.img}>
        <img src={resetImg} alt='resetImg' width="400"/>
     </div>

     <Card>
     <div className={styles.form}>
        <h2>Reset Password</h2>
         <form onSubmit={resetPassword}>
            <input type='text' placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}>

            </input>
            <button type='submit' className='--btn --btn-primary --btn-block'>Reset Password</button>
            <div className={styles.links}>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </div>
          </form>
     </div>
     </Card>
   </section>
    </div>
  )
}

export default Reset