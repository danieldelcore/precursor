import React, { FC, ReactNode } from 'react';

import Grid from '@precursor/grid';

export interface StackProps {
    children: ReactNode;
}

const Stack: FC<StackProps> = ({ children }) => (
    <Grid columns={1}>{children}</Grid>
);

export default Stack;
