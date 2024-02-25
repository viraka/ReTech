
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
        <div className="company-card">
            <h2>{name}</h2>
            <p>Address: {address}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Services: {services.join(', ')}</p>
            <p>Products: {products.join(', ')}</p>
            <a href={locationLink} target="_blank" rel="noopener noreferrer">
                View on Map
            </a>
        </div>
    );
};

export default Card;
