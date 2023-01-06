import React from 'react';
import IMovie from '../types/types';

const Context = React.createContext<IMovie>([Object, () => {}]);
 
export default Context;