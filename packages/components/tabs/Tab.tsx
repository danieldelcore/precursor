/** @jsx jsx */
import { useContext, FC, ReactNode } from 'react';
import { jsx } from '@trousers/core';
import collector from '@trousers/collector';
import { Theme } from '@precursor/theme';
import Text from '@precursor/text';

import TabsContext from './TabsContext';

export interface TabProps {
    id: string;
    children: ReactNode;
}

const Tab: FC<TabProps> = ({ id, children }) => {
    const { active, setActive } = useContext(TabsContext);
    const isSelected = active === id;

    return (
        <button
            role="tab"
            aria-selected={isSelected}
            aria-controls={`panel-${id}`}
            id={`tab-${id}`}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => setActive && setActive(id)}
            css={collector<Theme>('tab').element`
                cursor: pointer;
                background-color: transparent;
                border: none;
                padding: 1rem;
            `.modifier(isSelected)`
                color: ${({ color }) => color.focus};
            `}
        >
            <Text as="span">{children}</Text>
        </button>
    );
};

export default Tab;
