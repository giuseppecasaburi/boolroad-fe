
function TravelerCard({ traveler }) {

    return (
        <>
            <div  className="card col my-3 card-width" >
                <div className="card-header">
                    {traveler.nome} {traveler.cognome}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{traveler.email}</li>
                    <li className="list-group-item">{traveler.numero}</li>
                    <li className="list-group-item">{traveler.codiceFiscale}</li>
                </ul>
            </div>
        </>
    )
}

export default TravelerCard;