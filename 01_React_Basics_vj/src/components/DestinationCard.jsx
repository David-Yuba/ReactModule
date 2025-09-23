function DestinationCard({city, country, distanceKm, rating, imageUrl}){
    let stars = [];
    for(let i = 0 ; i<rating ; i++) stars[i] = "⭐";
    // Markovo rjesenje
    // stars = "⭐".repeat(rating)
    return(
        <div className="card">
            <img src={imageUrl || "https://placehold.co/400x200"}/>
            <h4>{country}</h4>
            <h5>{city}</h5>
            <p>{distanceKm*0.621} miles</p>
            <p className="rating">{rating/5*100}%</p>
            <p>
                {stars.map((value) => (
                    <span>{value}</span>
                ))}
            </p>
        </div>
    )
}

export default DestinationCard;