import type { NextPage } from 'next';
import { getAllAuctions } from '../utils/api-util';
import { playground } from '../utils/tsplayground';
import Head from 'next/head';
import Image from 'next/image';
import AuctionList from '../components/auctions/auction-list';
import styles from '../styles/Home.module.css';

import { Auction, Lot } from '../../interfaces';

interface Props {
	auctions: [Auction];
}

const Home: NextPage<Props> = props => {
	props?.auctions.forEach(auction => {
		console.log(auction);
	});

	return (
		<div className={styles.container}>
			<Head>
				<title>Streambid Next</title>
				<meta name="description" content="NextJS Test Bed" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<AuctionList {...props} />
			</main>

			<footer className={styles.footer}>Footer</footer>
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	return {
		props: {
			auctions: await getAllAuctions(),
		},
	};
}
