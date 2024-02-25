import styles from './Card.module.css'
type Props = {
    shop: shop
}
const Card = ({ shop }: Props) => {
    const {
        name,
        locationLink,
        address,
        phone,
        email,
        services,
        products,
    } = shop;

    return (
        <div className={styles.card}>
            <h2>{name}</h2>
            <span>Address: {address}</span>
            <span>Phone: {phone}</span>
            <span>Email: {email}</span>
            <span>Services: {services.join(', ')}</span>
            <span>Products: {products.join(', ')}</span>
            <a href={locationLink} target="_blank" rel="noopener noreferrer">
                 View in Map
            </a>
        </div>
    );
};

export default Card;
