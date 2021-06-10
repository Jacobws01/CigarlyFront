import Head from 'next/head'
import { Bannerteam } from '../components/Banners'
import Teamsection from '../components/Teamsection'

export default function Team() {
	return (
		<div>
			<Head>
				<title>our team</title>
				<meta name="description" content="Team behind Cigarely" />
			</Head>
			<Bannerteam />
			<Teamsection />
		</div>
	)
}