import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router'

interface AppContextInterface {
  gradeId: number;
  topicId: number;
  challengeId: number;
  editGradeId?: (id: number) => void,
  editTopicId?: (id: number) => void, 
  editChallengeId?: (id: number) => void
}

const AppContext = createContext<AppContextInterface>({gradeId: -1, topicId: -1, challengeId: -1});

export const AppWrapper: React.FC<{}> = ({ children }) => {
  const [gradeId, setGradeId] = useState(-1);
  const [topicId, setTopicId] = useState(-1);
  const [challengeId, setChallengeId] = useState(-1);

  const router = useRouter()

  const editGradeId = async (id: number) => {
    setGradeId(id);
    if (id !== -1) {
      router.push(`/grade/${id + 1}`)
    } else {
      router.push('/');
    }
  }

  const editTopicId = (id: number) => {
    setTopicId(id);
    if (id !== -1) {
      router.push(`/grade/${gradeId + 1}/topic/${id}`)
    } else {
      router.push(`/grade/${gradeId + 1}`);
    }
  }

  const editChallengeId = (id: number) => {
    setChallengeId(id);
  }

  return (
    <AppContext.Provider value={{gradeId, topicId, challengeId, editGradeId, editTopicId, editChallengeId}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
