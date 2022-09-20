import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number, question_number?: number },
) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress size={60} variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    color="text.secondary"
                >{props.question_number ? `${props.question_number}`: `${!isNaN(props.value) ? Math.round(props.value) : ''}%`}</Typography>
            </Box>
        </Box>
    );
}

interface Props {
    correct: number,
    attempted: number,
    questions: number,
    questionNumber: number
}

const Score: React.FC<Props> = ({ correct, attempted, questions, questionNumber }) => {   
    return <>
        <Typography variant='subtitle2' display='block'>{`${questions} questions. Goal: 80% `}</Typography>
        <Typography variant='h4' display='block'>
            <CircularProgressWithLabel value={(correct) / (attempted) * 100} />
            <CircularProgressWithLabel value={questionNumber / questions * 100} question_number={questionNumber} />
        </Typography>
    </>
}

export default Score;