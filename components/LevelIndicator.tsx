import Typography from "@mui/material/Typography";

interface Props {
    gradeDigit: string,
    topic: string,
    challenge: string,
    level: number
}

const LevelIndicator: React.FC<Props> = ({ gradeDigit, topic, challenge, level }) => {
    return <>
        <Typography variant='h5'>Grade {gradeDigit}</Typography>
        <Typography variant='h6'>{topic}</Typography>
        <Typography variant='h6'>{challenge}</Typography>
        <Typography variant='h6'>{`Level ${level}`}</Typography>
    </>

}

export default LevelIndicator;