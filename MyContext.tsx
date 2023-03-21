import React, { createContext, useState } from 'react';

type MyContextProps = {
  myState: string;
  setMyState: React.Dispatch<React.SetStateAction<string>>;
};

export const MyContext = createContext<MyContextProps>({
  myState: '',
  setMyState: () => {},
});