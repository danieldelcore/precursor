import React, { useContext, FC, ReactNode } from 'react';
import { css } from '@trousers/macro';
import Text from '@precursor/text';
// import { Theme } from '@precursor/theme';

import TabsContext from './TabsContext';

export interface TabProps {
    id: string;
    children: ReactNode;
}

const styles = css('Tab', {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '1rem',
}).modifier('selected', {
    color: 'var(--color-focus)',
});

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
            css={styles}
            $selected={isSelected}
        >
            <Text as="span">{children}</Text>
        </button>
    );
};

export default Tab;
