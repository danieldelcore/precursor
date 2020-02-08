import { storiesOf } from '@storybook/react';
import React from 'react';

import * as Geo from '../src';

storiesOf('Basic', module).add('Scratch Pad', () => {
    return (
        <Geo.ThemeProvider theme={Geo.theme}>
            <Geo.Heading weight="h1">Geometric ⬢ Scratch Pad</Geo.Heading>
            <Geo.Panel>
                <Geo.Heading weight="h2" id="typography">
                    Typography
                </Geo.Heading>
                <Geo.Heading weight="h1">Heading One</Geo.Heading>
                <Geo.Heading weight="h2" id="heading-two">
                    Heading Two
                </Geo.Heading>
                <Geo.Heading weight="h3">Heading Three</Geo.Heading>
                <Geo.Heading weight="h4">Heading Four</Geo.Heading>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris volutpat, odio vitae tempus interdum, sem erat
                    scelerisque justo, at pulvinar nunc quam id sapien. Nam
                    semper elit at sapien aliquam, eget tincidunt leo consequat.
                    Aenean sodales ex ut tellus accumsan, eu condimentum elit
                    pharetra.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris volutpat, odio vitae tempus interdum, sem erat
                    scelerisque justo.
                </p>
                <Geo.Blockquote cite="https://zeropoly.github.io/geometric">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris volutpat, odio vitae tempus interdum, sem erat
                    scelerisque
                </Geo.Blockquote>
            </Geo.Panel>
            <Geo.Panel>
                <Geo.Heading weight="h2" id="code-blocks">
                    Code blocks
                </Geo.Heading>
                <Geo.Code inline>
                    {`.some-class { background-color: red; }`}
                </Geo.Code>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris volutpat,
                    <Geo.Code inline>
                        {`.some-class { background-color: red; }`}
                    </Geo.Code>{' '}
                    odio vitae tempus interdum, sem erat scelerisque justo.
                </p>
                <Geo.Code>{`.some-class { background-color: red; }`}</Geo.Code>
            </Geo.Panel>
            <Geo.Panel>
                <Geo.Heading weight="h2" id="avatar">
                    Avatar
                </Geo.Heading>
                <Geo.Avatar
                    src="https://avatars3.githubusercontent.com/u/3030010?s=400&u=36ccfde6e6ed4b6398bb3c79b596636ee25586ec&v=4"
                    alt="Daniel"
                    href="https://github.com/danieldelcore"
                />
            </Geo.Panel>
            <Geo.Panel>
                <Geo.Heading weight="h2" id="panels">
                    Panels
                </Geo.Heading>
                <Geo.Panel>Hello world</Geo.Panel>
            </Geo.Panel>
            <Geo.Panel>
                <Geo.Heading weight="h2" id="form-elements">
                    Form building blocks
                </Geo.Heading>
                <Geo.Label htmlFor="test">Hello</Geo.Label>
                <Geo.Input
                    id="test"
                    name="test"
                    placeholder="hello world"
                    onChange={() => console.log('onChange')}
                    value=""
                />
                <Geo.Checkbox
                    id="test2"
                    name="test2"
                    value="isChecked"
                    checked
                    onChange={() => console.log('onChange')}
                    label="My checkbox"
                />
                <Geo.Radio
                    id="test3post"
                    name="test3"
                    value="post"
                    label="post"
                    onChange={() => console.log('onChange')}
                />
                <Geo.Radio
                    id="test3email"
                    name="test3"
                    value="email"
                    label="email"
                    onChange={() => console.log('onChange')}
                    checked
                />
                <Geo.TextArea
                    id="test"
                    name="test"
                    placeholder="hello world"
                    onChange={() => console.log('onChange')}
                    value=""
                />
                <Geo.Select
                    id="testselect"
                    name="testselect"
                    value="world"
                    onChange={() => console.log('onChange')}
                >
                    <option value="hello">Hello</option>
                    <option value="world">world</option>
                </Geo.Select>
            </Geo.Panel>
            <Geo.Panel>
                <Geo.Heading weight="h2" id="buttons">
                    Buttons
                </Geo.Heading>
                <Geo.ButtonGroup>
                    <Geo.Button>Base</Geo.Button>
                    <Geo.Button primary>Primary</Geo.Button>
                </Geo.ButtonGroup>
                <Geo.Heading weight="h3">Disabled</Geo.Heading>
                <Geo.ButtonGroup>
                    <Geo.Button disabled>Disabled Base</Geo.Button>
                    <Geo.Button disabled primary>
                        Disabled Primary
                    </Geo.Button>
                </Geo.ButtonGroup>
            </Geo.Panel>
        </Geo.ThemeProvider>
    );
});
