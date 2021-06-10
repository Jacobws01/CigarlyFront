import Link from 'next/link'
import { AiOutlineUser, AiOutlineMail, AiFillPhone } from 'react-icons/ai'
import { TiPencil } from 'react-icons/ti'

import styles from '../styles/Contact.module.css'



function Contactforms() {
	return (
		<section className={styles.contactsection}>
			<div className={styles.container}>
				<div className={styles.contactform}>
					<div className={styles.contactrow}>
						<div className={styles.theform}>
							<div className={styles.theformitself}>
								<form className={styles.theformform}>
									<div className={styles.rowpadding}>
										<div className={styles.box1}>
											<div className={styles.inputgroup}>
												<div className={styles.icon}>
													<AiOutlineUser />
												</div>
												<input className={styles.input} type="text" name="name" placeholder="Your name" />
											</div>
										</div>
										<div className={styles.box1}>
											<div className={styles.inputgroup}>
												<div className={styles.icon}>
													<AiOutlineMail />
												</div>
												<input className={styles.input} type="text" name="email" placeholder="Your email" />
											</div>
										</div>
										<div className={styles.box}>
											<div className={styles.inputgroup}>
												<div className={styles.icon}>
													<AiFillPhone />
												</div>
												<input className={styles.input} type="text" name="phone" placeholder="Your phone No." /> 
											</div>
										</div>
										<div className={styles.box}>
											<div className={styles.inputgroup}>
												<div className={styles.icon}>
													<TiPencil />
												</div>
												<input className={styles.input} type="text" name="message" placeholder="Enter message" />
											</div>
										</div>
										<div className={styles.boxcenter}>
											<button className={styles.mainbtn}>Submit</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contactforms;