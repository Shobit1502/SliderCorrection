import { createContext } from 'react';

const func = () => {};

export const SwitcherContext = createContext({ switcher: false, action: func });
