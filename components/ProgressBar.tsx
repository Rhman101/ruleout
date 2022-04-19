import styles from './ProgressBar.module.css';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import CircleIcon from '@mui/icons-material/Circle';
interface Props {
    history: number[]
}

const ProgressBar: React.FC<Props> = ({history}) => {
    return <div>
        {/* <p className={styles.ProgressBar}>Progress Bar {JSON.stringify(history)}</p> */}
        {history.map((check, checkId) => {
            if (check === 1) {
                return <CheckCircleTwoToneIcon key={checkId} color='success'></CheckCircleTwoToneIcon>
            } else if (check === -1) {
                return <CancelTwoToneIcon key={checkId} color='warning'></CancelTwoToneIcon>
            } else {
                return <CircleIcon key={checkId} sx={{color: 'lightblue'}}></CircleIcon>
            }
        })}
    </div>

}

export default ProgressBar;