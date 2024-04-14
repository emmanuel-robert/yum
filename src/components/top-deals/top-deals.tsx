import classNames from 'classnames';
import styles from './top-deals.module.scss';
import { Card } from '../card/card';
import PancakesSirupJpg from '../../assets/thumbnails/pancakes-sirup.jpg';
import MacaronJpg from '../../assets/thumbnails/macaron.jpg';
import PavlovaJpg from '../../assets/thumbnails/pavlova.jpg';
import RamnSaladJpg from '../../assets/thumbnails/ramn-salad.jpg';

export interface TopDealsProps {
    className?: string;
}

export const TopDeals = ({ className }: TopDealsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <h2>Today&apos;s Top Deals</h2>
                <div className={styles.cards}>
                    <Card imageUrl={PancakesSirupJpg}>Pancakes</Card>
                    <Card imageUrl={MacaronJpg}>Macarons</Card>
                    <Card imageUrl={PavlovaJpg}>Pavlova</Card>
                    <Card imageUrl={RamnSaladJpg}>Ramen</Card>
                    <Card>Text</Card>
                </div>
            </div>
        </div>
    );
};
