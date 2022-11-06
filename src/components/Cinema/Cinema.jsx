import {Films} from "../Films/Films";
import {Reviews} from "../Reviews/Reviews";

export const Cinema = ({cinema}) => {
    return <div>
        <h2>{cinema.name}</h2>
        <Films films={cinema.films}/>
        <Reviews reviews={cinema.reviews}/>
    </div>
}