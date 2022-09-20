import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import CircleIcon from '@mui/icons-material/Circle';
import Typography from '@mui/material/Typography';
interface Props {
    history: number[]
}

const ProgressBar: React.FC<Props> = ({history}) => {
    return <div>
        <Typography variant='overline' display='block'>{`Challenge: Get ${history.length} questions correct in a row!`}</Typography>
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