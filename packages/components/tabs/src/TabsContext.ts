import { createContext } from 'react';

const TabsContext = createContext<{
    active?: string;
    setActive?: (id: string) => void;
    setLast?: () => void;
    setFirst?: () => void;
    setNext?: () => void;
    setPrev?: () => void;
}>({});

TabsContext.displayName = 'TabsContext';

export default TabsContext;
