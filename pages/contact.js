import Head from 'next/head'
import { Bannercontact } from '../components/Banners'
import Contactforms from '../components/Contactform'

export default function Contact() {
	return (
		<div>
			<Head>
				<title>contact us</title>
				<meta name="description" content="contact page" />
			</Head>
			<Bannercontact />
			<Contactforms />
		</div>
	)
}