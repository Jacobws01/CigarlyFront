import Head from 'next/head'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'
import { Bannercontact } from '../components/Banners'

import styles from '../styles/Login.module.css'

export default function Login() {

	const [email, setEmail] = useState("")
	const { loginUser } = useContext(AuthContext)

	const handleSubmit = (event) => {
		event.preventDefault()
		loginUser(email)
	}

	return (
		<div>
			<Head>
				<title>Login</title>
				<meta name="description" content="Login here you make your purchase" />
			</Head>
			<Bannercontact />

			<div className={styles.row}>
				<div className={styles.loginsec}>
					<div className={styles.loginfill}>
					<div className={styles.title}>
						<h5>Login</h5>
					</div>
						<form onSubmit={handleSubmit}>
						 <div className={styles.formgroup}>
							<input 
				 			type="email" 
				 			value={email} 
				 			onChange={(event) => setEmail(event.target.value)} 
				 			placeholder="Email Address"
							/>
							<button className={styles.mainbtn} type="submit">Login</button>
						</div>
					</form>
					</div>
				</div>
			</div>
		</div>
	)
}