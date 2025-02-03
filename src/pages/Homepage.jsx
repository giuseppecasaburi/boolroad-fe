import { NavLink } from "react-router-dom";
import viaggi from "../data/DataTravel";

function Homepage() {

    return (
        <>
            <div className="container">
                {viaggi.map((curViaggio) => {
                    return (
                        <>
                            <div className="card col my-3 ">
                                <img src="https://picsum.photos/1000/300" className="card-img-top" alt="..." />
                                <div className="card-body ">
                                    <h5 className="card-title">{curViaggio.meta}</h5>
                                    <div className="d-flex justify-content-between">
                                        <p>dal {curViaggio.partenza}  al {curViaggio.ritorno}</p>
                                        <NavLink className="nav-link btn btn-success p-2 active" to={`/travel/${curViaggio.id}`} >Dettagli</NavLink>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                })}
                <div className="card col my-3 ">
                    <img src="https://picsum.photos/1000/300" className="card-img-top" alt="..." />
                    <div className="card-body ">
                        <h5 className="card-title">{viaggi[0].meta}</h5>
                        <div className="d-flex justify-content-between">
                            <p>dal {viaggi[0].partenza}  al {viaggi[0].ritorno}</p>
                            <NavLink className="nav-link btn btn-success p-2 active" to={`/travel/2`} >Dettagli</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Homepage;