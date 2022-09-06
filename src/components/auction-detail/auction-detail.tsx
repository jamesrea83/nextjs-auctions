import classes from './auction-detail.module.css';
import { Auction, Lot } from '../../../interfaces';

interface Props {
	auction: Auction;
}

const AuctionDetail = (props: Props) => {
	const { title, date } = props.auction;
	console.log(props);
	return (
		<div className={classes.auctiondetail}>
			<div>{title}</div>
			<div>{date}</div>
		</div>
	);
};

export default AuctionDetail;
