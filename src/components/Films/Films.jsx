import {Film} from "../Film/Film";

import styles from './styles.module.css';

export const Films = ({films}) => {
    return <div>
        <h3>Films</h3>
        <div>
            {
                films.map((film) => <Film key={film.id} film={film} className={styles.film}/>)
            }
        </div>
    </div>
}