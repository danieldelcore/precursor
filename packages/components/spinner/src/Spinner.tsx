import React, { FC } from 'react';
import { css } from '@trousers/macro';

export interface SpinnerProps {
    color?: string;
}

const Spinner: FC<SpinnerProps> = ({ color = 'black' }) => {
    return (
        <div
            css={css({
                color: color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',

                '&:after': {
                    animation: 'changeContent 0.8s linear infinite',
                    display: 'block',
                    content: '⠋',
                },

                '@keyframes changeContent': {
                    '10%': {
                        content: '⠙',
                    },
                    '20%': {
                        content: '⠹',
                    },
                    '30%': {
                        content: '⠸',
                    },
                    '40%': {
                        content: '⠼',
                    },
                    '50%': {
                        content: '⠴',
                    },
                    '60%': {
                        content: '⠦',
                    },
                    '70%': {
                        content: '⠧',
                    },
                    '80%': {
                        content: '⠇',
                    },
                    '90%': {
                        content: '⠏',
                    },
                },
            })}
        />
    );
};

export default Spinner;
