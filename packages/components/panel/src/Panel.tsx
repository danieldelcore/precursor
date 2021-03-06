import React, { FC, ReactNode } from 'react';
// @ts-ignoreE
import { css } from '@trousers/macro';

// import { Theme } from '@precursor/theme';

export interface PanelProps {
    children: ReactNode;
}

const styles = css('Panel', {
    borderRadius: 'var(--radius-m)',
    border: 'var(--border-size-0) solid var(--border-color-base)',
    padding: 'var(--space-m)',
});

// @ts-ignore
const Panel: FC<PanelProps> = props => <div css={styles}>{props.children}</div>;

export default Panel;
