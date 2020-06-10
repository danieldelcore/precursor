import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import Avatar from '@precursor/avatar';
import Blockquote from '@precursor/blockquote';
import Text from '@precursor/text';
import Button from '@precursor/button';
import Checkbox from '@precursor/checkbox';
import Code from '@precursor/code';
import Heading from '@precursor/heading';
import Input from '@precursor/input';
import Label from '@precursor/label';
import Modal, { ModalBody } from '@precursor/modal';
import Panel from '@precursor/panel';
import Radio from '@precursor/radio';
import Select from '@precursor/select';
import TextArea from '@precursor/textarea';
import Emoji from '@precursor/emoji';
import { theme, ThemeProvider } from '@precursor/theme';

const BasicExample = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    return (
        <ThemeProvider theme={theme}>
            <div
                style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    display: 'block',
                    padding: '40px',
                }}
            >
                <Heading weight="h1">Precursor ⬢</Heading>
                <Panel>
                    <Heading id="typography">Typography</Heading>
                    <Heading weight="h1">Heading One</Heading>
                    <Heading>Heading Two</Heading>
                    <Heading weight="h3">Heading Three</Heading>
                    <Heading weight="h4">Heading Four</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris volutpat, odio vitae tempus interdum, sem erat
                        scelerisque justo, at pulvinar nunc quam id sapien. Nam
                        semper elit at sapien aliquam, eget tincidunt leo
                        consequat. Aenean sodales ex ut tellus accumsan, eu
                        condimentum elit pharetra.
                    </Text>
                    <Text>
                        <Text as="strong">
                            Strong text <Emoji label="gorilla">🦍</Emoji> Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris volutpat, odio vitae tempus interdum, sem
                            erat scelerisque justo.
                        </Text>
                    </Text>
                    <Text>
                        <Text as="small">
                            Small text <Emoji label="mouse">🐁</Emoji> Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris volutpat, odio vitae tempus interdum, sem
                            erat scelerisque justo.
                        </Text>
                    </Text>
                    <Blockquote cite="https://zeropoly.github.io/precursor">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris volutpat, odio vitae tempus interdum, sem erat
                        scelerisque
                    </Blockquote>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris volutpat, odio vitae tempus interdum, sem erat
                        scelerisque justo.
                    </Text>
                    <ul>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ul>
                    <ol>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ol>
                </Panel>
                <Panel>
                    <Heading id="code-blocks">Code blocks</Heading>
                    <Code inline>
                        {`.some-class { background-color: red; }`}
                    </Code>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris volutpat,
                        <Code inline>
                            {`.some-class { background-color: red; }`}
                        </Code>{' '}
                        odio vitae tempus interdum, sem erat scelerisque justo.
                    </p>
                    <Code>{`.some-class { background-color: red; }`}</Code>
                </Panel>
                <Panel>
                    <Heading id="avatar">Avatar</Heading>
                    <Avatar
                        src="https://avatars3.githubusercontent.com/u/3030010?s=400&u=36ccfde6e6ed4b6398bb3c79b596636ee25586ec&v=4"
                        alt="Daniel"
                        href="https://github.com/danieldelcore"
                    />
                </Panel>
                <Panel>
                    <Heading id="panels">Panels</Heading>
                    <Panel>
                        <p>Hello world 👋</p>
                    </Panel>
                </Panel>
                <Panel>
                    <Heading id="input">Input</Heading>
                    <Label htmlFor="test">Input field</Label>
                    <Input
                        id="test"
                        name="test"
                        placeholder="hello world"
                        onChange={() => console.log('onChange')}
                        value=""
                    />
                    <Label htmlFor="testdisabled">Input field (disabled)</Label>
                    <Input
                        id="testdisabled"
                        name="testdisabled"
                        placeholder="hello world"
                        onChange={() => console.log('onChange')}
                        value=""
                        disabled
                    />
                </Panel>
                <Panel>
                    <Heading id="textarea">Text Area</Heading>
                    <Label htmlFor="textareatest">Text area</Label>
                    <TextArea
                        id="textareatest"
                        name="textarea"
                        placeholder="hello world"
                        onChange={() => console.log('onChange')}
                        value=""
                    />
                    <Label htmlFor="textareatestdisabled">
                        Text area (disabled)
                    </Label>
                    <TextArea
                        id="textareatestdisabled"
                        name="textareadisabled"
                        placeholder="hello world"
                        onChange={() => console.log('onChange')}
                        value=""
                        disabled
                    />
                </Panel>
                <Panel>
                    <Heading id="select">Select</Heading>
                    <Label htmlFor="selecttest">Select</Label>
                    <Select
                        id="select"
                        name="select"
                        value="world"
                        onChange={() => console.log('onChange')}
                    >
                        <option value="hello">Hello</option>
                        <option value="world">world</option>
                    </Select>
                    <Label htmlFor="selecttestdisabled">
                        Select (disabled)
                    </Label>
                    <Select
                        id="selecttestdisabled"
                        name="selecttestdisabled"
                        value="world"
                        onChange={() => console.log('onChange')}
                        disabled
                    >
                        <option value="hello">Hello</option>
                        <option value="world">world</option>
                    </Select>
                </Panel>
                <Panel>
                    <Heading id="checkbox">Checkboxes</Heading>
                    <Checkbox
                        id="test2"
                        name="test2"
                        value="isChecked"
                        checked
                        onChange={() => console.log('onChange')}
                        label="My checkbox"
                    />
                </Panel>
                <Panel>
                    <Heading id="radio">Radios</Heading>
                    <Radio
                        id="test3post"
                        name="test3"
                        value="post"
                        label="post"
                        onChange={() => console.log('onChange')}
                    />
                    <Radio
                        id="test3email"
                        name="test3"
                        value="email"
                        label="email"
                        onChange={() => console.log('onChange')}
                        checked
                    />
                </Panel>
                <Panel>
                    <Heading id="range">Range</Heading>
                    <p>TODO</p>
                </Panel>
                <Panel>
                    <Heading id="toggle">Toggle</Heading>
                    <p>TODO</p>
                </Panel>
                <Panel>
                    <Heading id="buttons">Buttons</Heading>
                    <Button>Base</Button>
                    <Button primary>Primary</Button>
                    <Heading weight="h3">Disabled</Heading>
                    <Button disabled>Disabled Base</Button>
                    <Button disabled primary>
                        Disabled Primary
                    </Button>
                </Panel>
                <Panel>
                    <Heading id="modals">Modals</Heading>
                    <Modal
                        open={isModalOpen}
                        onClickOutside={() => closeModal()}
                        onEscKeyPress={() => closeModal()}
                    >
                        <ModalBody>
                            <Heading>Modal heading</Heading>
                            <p>Some content contained within the Modal.</p>
                        </ModalBody>
                        <Button onClick={() => closeModal()}>Cancel</Button>
                        <Button primary onClick={() => closeModal()}>
                            Submit
                        </Button>
                    </Modal>
                    <Button primary onClick={() => openModal()}>
                        Open modal
                    </Button>
                </Panel>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Palette', module).add('Component Palette', () => <BasicExample />);
