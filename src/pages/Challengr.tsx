
import ChallengesContextProvider from '../store/hallenge-context'
import Header from '../components/Header'
// import {ChallengesContext} from '../store/hallenge-context';
// import { useContext } from 'react';
import Challenges from '../components/Challenges';

const Challengr = () => {
  // const contax = useContext(ChallengesContext);
  // console.log(contax);

  return (
    <ChallengesContextProvider>
        <Header />
        <main>
<Challenges />
        </main>
    </ChallengesContextProvider>
  )
}

export default Challengr