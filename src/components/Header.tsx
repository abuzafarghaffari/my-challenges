import { useState } from 'react';
import { Button } from '@mui/material'
import NewChallenge from './NewChallenge'

const Header = () => {
    const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState(false);

    function handleStartAddNewChallenge() {
        setIsCreatingNewChallenge(true);
      }

      function handleDone() {
        setIsCreatingNewChallenge(false);
      }
    
  return (
    <>
    {isCreatingNewChallenge && <NewChallenge  onDone={handleDone}/>}
    <header>
        <h1>Your Challenges</h1>
        <Button onClick={handleStartAddNewChallenge} variant='contained'>Add Challenge</Button>
      </header>
    </>
  )
}

export default Header