import { storiesOf } from '@storybook/react';
import React from 'react';

import * as Lib from '../src';

console.log(Lib.theme);

storiesOf('Basic', module).add('Scratch Pad', () => {
    return (
        <Lib.ThemeProvider theme={Lib.theme}>
            <h1>Scratch Pad</h1>
            <h2>Typography</h2>
            <h1>Heading One</h1>
            <h2>Heading Two</h2>
            <h3>Heading Three</h3>
            <h4>Heading Four</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                volutpat, odio vitae tempus interdum, sem erat scelerisque
                justo, at pulvinar nunc quam id sapien. Nam semper elit at
                sapien aliquam, eget tincidunt leo consequat. Aenean sodales ex
                ut tellus accumsan, eu condimentum elit pharetra.
            </p>
            <Lib.Blockquote cite="https://zeropoly.github.io/geometric">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                volutpat, odio vitae tempus interdum, sem erat scelerisque
            </Lib.Blockquote>
            <h2>Code blocks</h2>
            <Lib.Code inline>
                {`.some-class { background-color: red; }`}
            </Lib.Code>
            <Lib.Code>{`.some-class { background-color: red; }`}</Lib.Code>
            <h2>Avatar</h2>
            <Lib.Avatar
                src="https://avatars3.githubusercontent.com/u/3030010?s=400&u=36ccfde6e6ed4b6398bb3c79b596636ee25586ec&v=4"
                alt="Daniel"
                href="https://github.com/danieldelcore"
            />
            <h2>Panels</h2>
            <Lib.Panel>Hello world</Lib.Panel>
            <h2>Form building blocks</h2>
            <Lib.Label htmlFor="test">Hello</Lib.Label>
            <Lib.Input
                id="test"
                name="test"
                placeholder="hello world"
                onChange={() => console.log('onChange')}
                value=""
            />
            <Lib.Checkbox
                id="test2"
                name="test2"
                value="isChecked"
                checked
                onChange={() => console.log('onChange')}
                label="My checkbox"
            />
            <Lib.Radio
                id="test3post"
                name="test3"
                value="post"
                label="post"
                onChange={() => console.log('onChange')}
            />
            <Lib.Radio
                id="test3email"
                name="test3"
                value="email"
                label="email"
                onChange={() => console.log('onChange')}
                checked
            />
            <Lib.TextArea
                id="test"
                name="test"
                placeholder="hello world"
                onChange={() => console.log('onChange')}
                value=""
            />
            <Lib.Select
                id="testselect"
                name="testselect"
                value="world"
                onChange={() => console.log('onChange')}
            >
                <option value="hello">Hello</option>
                <option value="world">world</option>
            </Lib.Select>
            <h2>Buttons</h2>
            <Lib.Button>Base</Lib.Button>
            <Lib.Button primary>primary</Lib.Button>
        </Lib.ThemeProvider>
    );
});
