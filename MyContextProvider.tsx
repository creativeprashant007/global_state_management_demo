import {useState} from 'react';
import {MyContext} from './MyContext';

type MyContextProviderProps = {
  children: React.ReactNode;
};

const MyContextProvider = ({children}: MyContextProviderProps) => {
  const [myState, setMyState] = useState('');

  return (
    <MyContext.Provider value={{myState, setMyState}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
