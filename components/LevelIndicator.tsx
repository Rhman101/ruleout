import style from './LevelIndicator.module.css';

interface Props {
    level: number
}

const LevelIndicator: React.FC<Props> = (props) => {
    // console.log('props in LevelIndicator', props);

    return <div>
        <p className={style.levelText}>Level {props.level}</p>
    </div>

}

export default LevelIndicator;