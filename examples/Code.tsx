import { storiesOf } from '@storybook/react';
import React from 'react';

import Heading from '@precursor/heading';
import Code from '@precursor/code';
import { ThemeProvider, theme } from '@precursor/theme';

storiesOf('Code', module)
    .add('Inline', () => (
        <ThemeProvider theme={theme}>
            <Heading weight="h1">Inline Code</Heading>
            <p>
                Lorem ipsum dolor sit amet,{' '}
                <Code inline>{`.some-class { background-color: red; }`}</Code>{' '}
                consectetur adipiscing elit. Mauris volutpat, odio vitae tempus
                interdum, sem erat scelerisque justo, at pulvinar nunc quam id
                sapien. Nam semper elit at sapien aliquam, eget tincidunt leo
                consequat. Aenean sodales ex ut tellus accumsan, eu condimentum
                elit pharetra.
            </p>
        </ThemeProvider>
    ))
    .add('Block', () => (
        <ThemeProvider theme={theme}>
            <Heading weight="h1">Code block</Heading>
            <Code>{`.some-class { background-color: red; }`}</Code>
        </ThemeProvider>
    ))
    .add('Long content', () => (
        <ThemeProvider theme={theme}>
            <Heading weight="h1">Code block</Heading>
            <Code
                inline
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, odio vitae tempus interdum, sem erat scelerisque justo, at pulvinar nunc quam id sapien. Nam semper elit at sapien aliquam, eget tincidunt leo consequat. Aenean sodales ex ut tellus accumsan, eu condimentum elit pharetra.`}</Code>
            <Code>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, odio vitae tempus interdum, sem erat scelerisque justo, at pulvinar nunc quam id sapien. Nam semper elit at sapien aliquam, eget tincidunt leo consequat. Aenean sodales ex ut tellus accumsan, eu condimentum elit pharetra.`}</Code>
        </ThemeProvider>
    ));
