import classNames from 'classnames';
import styles from './card.module.scss';
import MacaronJpg from '../../assets/thumbnails/macaron.jpg';

export interface CardProps {
    imageUrl?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Card = ({
    imageUrl = MacaronJpg,
    children = 'Super Macaron',
    className,
}: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={imageUrl} alt="" className={styles.image} />
            <div className={styles.content}>{children}</div>
        </div>
    );
};
