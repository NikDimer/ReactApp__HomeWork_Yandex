import {Cinema} from "../../components/Cinema/Cinema";
import {useState} from "react";

export const CinemaPage = (props) => {
    const [activeCinema, setActiveCinema] = useState(props.cinemas[0]);

    return <div>
        <div>
            {
                props.cinemas.map((cinema) => <button key={cinema.id} onClick={() => setActiveCinema(cinema)}>{cinema.name}</button>)
            }
        </div>
        <Cinema cinema={activeCinema}/>
    </div>
}