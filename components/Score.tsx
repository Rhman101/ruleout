import { useEffect } from 'react';
import styles from './Score.module.css';

interface Props {
    correct: number,
    attempted: number,
    questions: number
}

const Score: React.FC<Props> = (props) => {
    return <div>
        <p className={styles.scoreText}>{JSON.stringify(props)}</p>
    </div>

}

export default Score;