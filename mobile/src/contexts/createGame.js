import React, { useState } from 'react';
import { createContext } from 'react';

const CreateGameContext = createContext({ step: 0 });

export const CreateGameProvider = ({ children }) => {
  const [teamSelectionMode, setTeamSelectionMode] = useState(0);
  const [nPlayers, setNPlayers] = useState(0);
  const [step, setStep] = useState(0);

  function setSelectionMode(method) {
    setTeamSelectionMode(method);
  }

  function setActiveStep(activeStep) {
    setStep(activeStep);
  }

  function setNPlayersState(nPlayersState) {
    setNPlayers(nPlayersState);
  }

  return (
    <CreateGameContext.Provider value={{ teamSelectionMode, setSelectionMode, setActiveStep, step, setNPlayersState, nPlayers }}>
      {children}
    </CreateGameContext.Provider>
  );
}
export default CreateGameContext;
