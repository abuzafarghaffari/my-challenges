import { ReactNode, createContext,useState } from "react";
import { faker } from '@faker-js/faker';

export type StateType ={
    title: string,
    description:string,
    deadline:string,
    image: {src:string,alt:string},
    id:string,
    status:string
}

 type CHALL ={
    title: string,
    description:string,
    deadline:string,
    image:{src:string,alt:string},
}

type CONTX ={
    challenges:StateType[],
    addChallenge:(challenge:CHALL)=>void,
    deleteChallenge:(challengeId:string)=>void,
    updateChallengeStatus:(challengeId:string, newStatus:string)=>void
}
export const ChallengesContext = createContext<CONTX>({
    challenges: [],
  addChallenge: () => {},
  deleteChallenge:()=>{},
  updateChallengeStatus: () => {},
})


const ChallengesContextProvider:React.FC<{children:ReactNode}> =({children})=>{
    const [challenges, setChallenges] = useState<StateType[]>([]);

    const addChallenge =(challenge:CHALL)=>{
setChallenges((prevChallenges)=>[
    {...challenge,id:faker.string.uuid(),status:"active"},
...prevChallenges
])
    };

const deleteChallenge =(challengeId:string)=>{
setChallenges((prevChallenges)=> prevChallenges.filter((challenge)=>challenge.id !== challengeId))
};

const updateChallengeStatus =(challengeId:string, newStatus:string)=>{
setChallenges((prevState)=>prevState.map((challenge)=>{
    if(challenge.id === challengeId){
        return { ...challenge, status: newStatus };
    } else{
        return challenge
    }
}))
};

    const challengesContext = {
        challenges,
        addChallenge,
        deleteChallenge,
        updateChallengeStatus,
      };
    return(
<ChallengesContext.Provider value={challengesContext}>
        {children}
    </ChallengesContext.Provider>
    )
    
}

export default ChallengesContextProvider;