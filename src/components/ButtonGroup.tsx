/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { css, jsx } from '@trousers/core';

export interface ButtonGroupProps {
    children: ReactNode;
}

// TODO this should just be a stack
const ButtonGroup: FC<ButtonGroupProps> = props => {
    return (
        <div
            css={css`
                display: inline-block;

                button {
                    margin-right: 1em;
                }

                button:last-child {
                    margin-right: 0;
                }
            `}
        >
            {props.children}
        </div>
    );
};

export default ButtonGroup;
