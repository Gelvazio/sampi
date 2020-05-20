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

  function moveForward() {
    setStep(step + 1);
  }

  function moveBackwards() {
    setStep(step - 1);
  }

  function setNPlayersState(nPlayersState) {
    setNPlayers(nPlayersState);
  }

  return (
    <CreateGameContext.Provider value={{ teamSelectionMode, setSelectionMode, moveBackwards, moveForward, step, setNPlayersState, nPlayers }}>
      {children}
    </CreateGameContext.Provider>
  );
}
export default CreateGameContext;
