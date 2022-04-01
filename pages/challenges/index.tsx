import type { NextPage } from 'next'
import GradeSelector from '../../components/GradeSelector';
import Layout from '../../components/Layout';

const Challenge: NextPage = () => {
    return <Layout>
        <GradeSelector></GradeSelector>
    </Layout>

}

export default Challenge;