import { storiesOf } from '@storybook/react';
import React from 'react';

import Code from '@geometric/code';
import { ThemeProvider, theme } from '@geometric/theme';

storiesOf('Code', module)
    .add('Inline', () => (
        <ThemeProvider theme={theme}>
            <h1>Inline Code</h1>
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
            <h1>Code block</h1>
            <Code>{`.some-class { background-color: red; }`}</Code>
        </ThemeProvider>
    ))
    .add('Long content', () => (
        <ThemeProvider theme={theme}>
            <h1>Code block</h1>
            <Code
                inline
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, odio vitae tempus interdum, sem erat scelerisque justo, at pulvinar nunc quam id sapien. Nam semper elit at sapien aliquam, eget tincidunt leo consequat. Aenean sodales ex ut tellus accumsan, eu condimentum elit pharetra.`}</Code>
            <Code>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, odio vitae tempus interdum, sem erat scelerisque justo, at pulvinar nunc quam id sapien. Nam semper elit at sapien aliquam, eget tincidunt leo consequat. Aenean sodales ex ut tellus accumsan, eu condimentum elit pharetra.`}</Code>
        </ThemeProvider>
    ));
