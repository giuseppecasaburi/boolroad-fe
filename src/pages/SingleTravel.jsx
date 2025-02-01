import TravelerCard from "../components/TravelerCard";
import viaggiatori from "../data/DataVoyager";
import viaggi from "../data/DataTravel";

function SingleTravel() {

    const partecipanti = viaggiatori.filter((curTraveler) =>{

        if(viaggi[0].partecipanti_id.includes(curTraveler.id)){

            return curTraveler;
            
        }
    })


    return (
        <>
            <div className="container">
                <div className="card col my-5 ">
                    <img src="https://picsum.photos/800/300" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{viaggi[0].meta}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{viaggi[0].partenza}</li>
                            <li className="list-group-item">{viaggi[0].ritorno}</li>
                            <li className="list-group-item">{viaggi[0].tutor}</li>
                        </ul>
                        
                </div>


                <h2 className="mt-3 text-center">Partecipanti</h2>
                {/* card */}
                <div className="container ms-border">
                    <div className="row row-cols-3 justify-content-around ">
                        {partecipanti.map((curTraveler) => {
                            return (
                                <>
                                    <TravelerCard
                                        key={curTraveler.id}
                                        traveler={curTraveler}
                                    />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleTravel;