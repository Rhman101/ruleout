import styles from './ProgressBar.module.css';

interface Props {
    history: number[]
}

const ProgressBar: React.FC<Props> = (props) => {
    return <div>
        <p className={styles.ProgressBar}>Progress Bar {JSON.stringify(props.history)}</p>
    </div>

}

export default ProgressBar;