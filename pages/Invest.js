import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { BannerInvests } from '../components/Banners'
import InvestSuper from '../components/InvestSuper.js'

import styles from '../styles/Invest.module.css'

export default function Invest() {
	return (
		<div>
			<Head>
				<title>Our Services</title>
				<meta name="Crypto Services" content="Our Services" />
			</Head>
			<BannerInvests />
			<InvestSuper />
		</div>
	)
}