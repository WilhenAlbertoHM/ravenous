import styles from "./Business.module.css"

const business = {
    image: "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "Reggie's Pizza",
    address: "123 Nowhere St",
    city: "Boston",
    state: "MA",
    zipCode: "02134",
    category: "Italian",
    rating: 4.8,
    reviewCount: 678
};

function Business() {
    return (
        <div className={styles.Business}>
            <div className={styles.imageContainer}>
                <img src={business.image} alt="" />
            </div>
            <h2>{business.name}</h2>
            <div className={styles.BusinessInformation}>
                <div className={styles.BusinessAddress}>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{`${business.state} ${business.zipCode}`}</p>
                </div>
                <div className={styles.BusinessReviews}>
                    <h3>{business.category.toUpperCase()}</h3>
                    <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
                    <p>{`${business.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;