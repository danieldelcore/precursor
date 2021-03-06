import React, { useContext, FC, ReactNode } from 'react';
import TabsContext from './TabsContext';

export interface TabPanelProps {
    id: string;
    children: ReactNode;
}

const TabPanel: FC<TabPanelProps> = ({ id, children }) => {
    const { active } = useContext(TabsContext);

    return (
        <div
            tabIndex={0}
            role="tabpanel"
            id={`panel-${id}`}
            aria-labelledby={`tab-${id}`}
            hidden={active !== id}
        >
            {children}
        </div>
    );
};

export default TabPanel;
