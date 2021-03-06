import React, { useContext, FC, KeyboardEventHandler, ReactNode } from 'react';
import { css } from '@trousers/macro';
import TabsContext from './TabsContext';

export interface TabListProps {
    children: ReactNode;
    label: string;
}

const TabList: FC<TabListProps> = ({ label, children }) => {
    const { setLast, setFirst, setNext, setPrev } = useContext(TabsContext);

    const onKeyDown: KeyboardEventHandler<HTMLElement> = event => {
        switch (event.key) {
            case 'ArrowRight':
                event.preventDefault();
                setNext && setNext();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                setPrev && setPrev();
                break;
            case 'Home':
                event.preventDefault();
                setFirst && setFirst();
                break;
            case 'End':
                event.preventDefault();
                setLast && setLast();
                break;
            default:
                break;
        }
    };

    return (
        <div
            role="tablist"
            tabIndex={0}
            aria-label={label}
            onKeyDown={onKeyDown}
            css={css({
                borderBottom: `var(--border--size[0]) solid var(--border--color--base)`,
            })}
        >
            {children}
        </div>
    );
};

export default TabList;
