/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { jsx } from '@trousers/core';
import collector from '@trousers/collector';

import { Theme } from '@precursor/theme';

export interface MessageProps {
    status?: 'error' | 'success' | 'warning';
    children: ReactNode;
}

const styles = (status: MessageProps['status']) =>
    collector<Theme>('message').element`
    display: block;
    padding: ${({ spacePreset }) => spacePreset.inset};
    border-radius: ${({ radius }) => radius.m};
    background-color: ${({ color }) => color.info.light};
    color: ${({ color }) => color.info.base};
`.modifier(status === 'error')`
    background-color: ${({ color }) => color.error.light}
    color: ${({ color }) => color.error.base}
`.modifier(status === 'warning')`
    background-color: ${({ color }: Theme) => color.warning.light}
    color: ${({ color }: Theme) => color.warning.base}
`.modifier(status === 'success')`
    background-color: ${({ color }: Theme) => color.success.light}
    color: ${({ color }: Theme) => color.success.base}
`;

const Message: FC<MessageProps> = props => {
    return <div css={styles(props.status)}>{props.children}</div>;
};

export default Message;
