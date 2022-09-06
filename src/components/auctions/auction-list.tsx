import classes from './auction-list.module.css';
import { Auction, Lot } from '../../../interfaces';
import AuctionDetail from '../auction-detail/';

interface Props {
	auctions: [Auction];
}

const AuctionList = (props: Props) => {
	return (
		<div className={classes.auctionlist}>
			<div className={`${classes.title}`}>Auction List</div>
			<div className={classes.list}>
				{props?.auctions.map((auction, index) => {
					// return <div key={index}>{auction.title}</div>;
					return <AuctionDetail auction={auction} key={auction.id} />;
				})}
			</div>
		</div>
	);
};

export default AuctionList;
