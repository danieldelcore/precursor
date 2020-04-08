import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import * as Geo from '../src';

const BasicExample = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    return (
        <Geo.ThemeProvider theme={Geo.theme}>
            <div
                style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    display: 'block',
                    padding: '40px',
                }}
            >
                <Geo.Heading weight="h1">Geometric ⬢</Geo.Heading>
                <Geo.Panel>
                    <Geo.Heading id="typography">Typography</Geo.Heading>
                    <Geo.Heading weight="h1">Heading One</Geo.Heading>
                    <Geo.Heading>Heading Two</Geo.Heading>
                    <Geo.Heading weight="h3">Heading Three</Geo.Heading>
                    <Geo.Heading weight="h4">Heading Four</Geo.Heading>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris volutpat, odio vitae tempus interdum, sem erat
                        scelerisque justo, at pulvinar nunc quam id sapien. Nam
                        semper elit at sapien aliquam, eget tincidunt leo
                        consequat. Aenean sodales ex ut tellus accumsan, eu
                        condimentum elit pharetra.
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
                    <Geo.Heading id="code-blocks">Code blocks</Geo.Heading>
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
                    <Geo.Heading id="avatar">Avatar</Geo.Heading>
                    <Geo.Avatar
                        src="https://avatars3.githubusercontent.com/u/3030010?s=400&u=36ccfde6e6ed4b6398bb3c79b596636ee25586ec&v=4"
                        alt="Daniel"
                        href="https://github.com/danieldelcore"
                    />
                </Geo.Panel>
                <Geo.Panel>
                    <Geo.Heading id="panels">Panels</Geo.Heading>
                    <Geo.Panel>
                        <p>Hello world 👋</p>
                    </Geo.Panel>
                </Geo.Panel>
                <Geo.Panel>
                    <Geo.Heading id="input">Input</Geo.Heading>
                    <Geo.Label htmlFor="test">Input field</Geo.Label>
                    <Geo.Input
                        id="test"
                        name="test"
                        placeholder="hello world"
                        onChange={() => console.log('onChange')}
                        value=""
                    />
                    <Geo.Label htmlFor="testdisabled">
                        Input field (disabled)
                    </Geo.Label>
                    <Geo.Input
                        id="testdisabled"
                        name="testdisabled"
                        placeholder="hello world"
                        onChange={() => console.log('onChange')}
                        value=""
                        disabled
                    />
                </Geo.Panel>
                <Geo.Panel>
                    <Geo.Label htmlFor="textareatest">Text area</Geo.Label>
                    <Geo.TextArea
                        id="textareatest"
                        name="textarea"
                        placeholder="hello world"
                        onChange={() => console.log('onChange')}
                        value=""
                    />
                    <Geo.Label htmlFor="textareatestdisabled">
                        Text area (disabled)
                    </Geo.Label>
                    <Geo.TextArea
                        id="textareatestdisabled"
                        name="textareadisabled"
                        placeholder="hello world"
                        onChange={() => console.log('onChange')}
                        value=""
                        disabled
                    />
                </Geo.Panel>
                <Geo.Panel>
                    <Geo.Heading id="select">Select</Geo.Heading>
                    <Geo.Label htmlFor="selecttest">Select</Geo.Label>
                    <Geo.Select
                        id="select"
                        name="select"
                        value="world"
                        onChange={() => console.log('onChange')}
                    >
                        <option value="hello">Hello</option>
                        <option value="world">world</option>
                    </Geo.Select>
                    <Geo.Label htmlFor="selecttestdisabled">
                        Select (disabled)
                    </Geo.Label>
                    <Geo.Select
                        id="selecttestdisabled"
                        name="selecttestdisabled"
                        value="world"
                        onChange={() => console.log('onChange')}
                        disabled
                    >
                        <option value="hello">Hello</option>
                        <option value="world">world</option>
                    </Geo.Select>
                </Geo.Panel>
                <Geo.Panel>
                    <Geo.Heading id="checkbox">Checkboxes</Geo.Heading>
                    <Geo.Checkbox
                        id="test2"
                        name="test2"
                        value="isChecked"
                        checked
                        onChange={() => console.log('onChange')}
                        label="My checkbox"
                    />
                </Geo.Panel>
                <Geo.Panel>
                    <Geo.Heading id="radio">Radios</Geo.Heading>
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
                </Geo.Panel>
                <Geo.Panel>
                    <Geo.Heading id="range">Range</Geo.Heading>
                    <p>TODO</p>
                </Geo.Panel>
                <Geo.Panel>
                    <Geo.Heading id="toggle">Toggle</Geo.Heading>
                    <p>TODO</p>
                </Geo.Panel>
                <Geo.Panel>
                    <Geo.Heading id="buttons">Buttons</Geo.Heading>
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
                <Geo.Panel>
                    <Geo.Heading id="modals">Modals</Geo.Heading>
                    <Geo.Modal
                        open={isModalOpen}
                        onClickOutside={() => closeModal()}
                        onEscKeyPress={() => closeModal()}
                    >
                        <Geo.ModalBody>
                            <Geo.Heading>Modal heading</Geo.Heading>
                            <p>Some content contained within the Modal.</p>
                        </Geo.ModalBody>
                        <Geo.ButtonGroup>
                            <Geo.Button onClick={() => closeModal()}>
                                Cancel
                            </Geo.Button>
                            <Geo.Button onClick={() => closeModal()} primary>
                                Submit
                            </Geo.Button>
                        </Geo.ButtonGroup>
                    </Geo.Modal>
                    <Geo.Button primary onClick={() => openModal()}>
                        Open modal
                    </Geo.Button>
                </Geo.Panel>
            </div>
        </Geo.ThemeProvider>
    );
};

storiesOf('Basic', module).add('Scratch Pad', () => <BasicExample />);
