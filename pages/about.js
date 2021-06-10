import Head from 'next/head'
import { Bannerabout } from '../components/Banners'
import Superabout from '../components/Superabout'
import Counterup from '../components/Counterup'

export default function About() {
	return (
		<div>
			<Head>
				<title>about</title>
				<meta name="description" content="About us" />
			</Head>
			<Bannerabout />
			<Superabout />
			<Counterup />
		</div>
	)
}