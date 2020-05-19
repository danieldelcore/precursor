import React, { FC, ReactNode } from 'react';

export interface EmojiProps {
    children: ReactNode;
}

const Emoji: FC<EmojiProps> = ({ children }) => {
    return (
        <span role="img" aria-label="shrug">
            {children}
        </span>
    );
};

export default Emoji;
