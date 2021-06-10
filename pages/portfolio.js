import Head from 'next/head'
import { Bannerportfolio } from '../components/Banners'

export default function Portfolio() {
	return (
		<div>
			<Head>
				<title>portfolio</title>
				<meta name="description" content="Cigar portfolio of pictures" />
			</Head>
			<Bannerportfolio />
		</div>
	)
}