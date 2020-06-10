import React, { FC, ReactNode } from 'react';

export interface EmojiProps {
    children: ReactNode;
    label: string;
}

const Emoji: FC<EmojiProps> = ({ children, label }) => {
    return (
        <span role="img" aria-label={label}>
            {children}
        </span>
    );
};

export default Emoji;
