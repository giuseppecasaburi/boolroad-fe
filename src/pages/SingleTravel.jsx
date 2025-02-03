import TravelerCard from "../components/TravelerCard";
import viaggiatori from "../data/DataVoyager";
import viaggi from "../data/DataTravel";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SingleTravel() {

    const { id } = useParams();
    const idViaggio = parseInt(id) - 1;
    const navigate = useNavigate();



    const partecipanti = viaggiatori.filter((curTraveler) => {

        if (viaggi[idViaggio].partecipanti_id.includes(curTraveler.id)) {

            return curTraveler;

        }
    })

    const [filteredPartecipanti, setfilteredPartecipanti] = useState(partecipanti)
    const [orderBy, setOrderBy] = useState("none")

    useEffect(() => {
        let sortedPartecipanti = [...filteredPartecipanti];
    
        if (orderBy === "nome") {
            sortedPartecipanti.sort((a, b) => a.nome.localeCompare(b.nome));
        } else if (orderBy === "cognome") {
            sortedPartecipanti.sort((a, b) => a.cognome.localeCompare(b.cognome));
        }
    
        setfilteredPartecipanti(sortedPartecipanti);
    }, [orderBy]);




    return (
        <>
            <div className="container">
                   {/* Titolo e Bottone */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <h2 className="text-center mt-3">Destinazione</h2>
                 <button className="btn btn-primary" onClick={() => navigate("/crea-viaggio")}>
                    + Nuovo Viaggio
                </button>
                </div>
                <div className="card col my-3 ">
                    <img src="https://picsum.photos/800/300" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{viaggi[idViaggio].meta}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{viaggi[idViaggio].partenza}</li>
                        <li className="list-group-item">{viaggi[idViaggio].ritorno}</li>
                        <li className="list-group-item">{viaggi[idViaggio].tutor}</li>
                    </ul>
                </div>


                <h2 className="mt-5 text-center">Partecipanti</h2>
                {/* card */}
                <div className="container">
                    <div className="row row-cols-2 row-cols-lg-3 justify-content-around ">
                        {filteredPartecipanti.map((curTraveler) => {
                            return (
                                <TravelerCard
                                    key={curTraveler.id}
                                    traveler={curTraveler}
                                />
                            )
                        })}
                        
                    </div>
                </div>


            </div>


        </>
    )
}

export default SingleTravel;