/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import MyComponent from './component/MyComponent';
import MyContextProvider from './MyContextProvider';
import {View} from 'react-native/types';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  return (
    <MyContextProvider>
      <MyComponent />
    </MyContextProvider>
  );
}

export default App;
