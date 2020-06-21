/** @jsx jsx */
import { storiesOf } from '@storybook/react';
import { useState } from 'react';
import { jsx } from '@trousers/core';

import Avatar from '@precursor/avatar';
import Blockquote from '@precursor/blockquote';
import Text from '@precursor/text';
import Button from '@precursor/button';
import Badge from '@precursor/badge';
import Checkbox from '@precursor/checkbox';
import Code from '@precursor/code';
import Heading from '@precursor/heading';
import Input from '@precursor/input';
import Image from '@precursor/image';
import Label from '@precursor/label';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '@precursor/modal';
import Panel from '@precursor/panel';
import Radio from '@precursor/radio';
import Select from '@precursor/select';
import TextArea from '@precursor/textarea';
import Emoji from '@precursor/emoji';
import Keyboard from '@precursor/keyboard';
import Stack from '@precursor/stack';
import Grid from '@precursor/grid';
import { Tabs, Tab, TabList, TabPanel } from '@precursor/tabs';
import List, { ListItem } from '@precursor/list';
import { theme, ThemeProvider } from '@precursor/theme';

const Box = () => (
    <div
        css={{
            display: 'block',
            minHeight: '40px',
            minWidth: '40px',
            backgroundColor: '#eaeaea',
            borderRadius: '3px',
        }}
    />
);

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
                <Heading id="typography">Typography</Heading>
                <Panel>
                    <Heading weight="h1">Heading One</Heading>
                    <Heading>Heading Two</Heading>
                    <Heading weight="h3">Heading Three</Heading>
                    <Heading weight="h4">Heading Four</Heading>
                    <Heading weight="h5">Heading Five</Heading>
                    <Heading weight="h6">Heading Six</Heading>
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
                            Mauris volutpat,{' '}
                            <Text as="em">odio vitae tempus interdum, sem</Text>
                            erat scelerisque justo.
                        </Text>
                    </Text>
                    <Text>
                        <Text as="small">
                            Small text <Emoji label="mouse">🐁</Emoji> Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            <Text as="del">Mauris volutpat, odio</Text> vitae
                            tempus interdum, sem erat scelerisque justo.
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
                    <Grid>
                        <List>
                            <ListItem>Item</ListItem>
                            <ListItem>Item</ListItem>
                            <ListItem>Item</ListItem>
                            <ListItem>Item</ListItem>
                            <ListItem>Item</ListItem>
                            <ListItem>Item</ListItem>
                        </List>
                        <List type="ol">
                            <ListItem>Item</ListItem>
                            <ListItem>Item</ListItem>
                            <ListItem>Item</ListItem>
                            <ListItem>Item</ListItem>
                            <ListItem>Item</ListItem>
                            <ListItem>Item</ListItem>
                        </List>
                    </Grid>
                </Panel>
                <Heading id="tabs">Tabs</Heading>
                <Panel>
                    <Tabs defaultActive="Foo">
                        <TabList label="Entertainment">
                            <Tab id="Foo">Foo</Tab>
                            <Tab id="Bar">Bar</Tab>
                            <Tab id="Baz">Baz</Tab>
                        </TabList>
                        <TabPanel id="Foo">
                            <Text>
                                Nils Frahm is a German musician, composer and
                                record producer based in Berlin. He is known for
                                combining classical and electronic music and for
                                an unconventional approach to the piano in which
                                he mixes a grand piano, upright piano, Roland
                                Juno-60, Rhodes piano, drum machine, and Moog
                                Taurus.
                            </Text>
                        </TabPanel>
                        <TabPanel id="Bar">
                            <Text>
                                Agnes Caroline Thaarup Obel is a Danish
                                singer/songwriter. Her first album,
                                Philharmonics, was released by PIAS Recordings
                                on 4 October 2010 in Europe. Philharmonics was
                                certified gold in June 2011 by the Belgian
                                Entertainment Association (BEA) for sales of
                                10,000 Copies.
                            </Text>
                        </TabPanel>
                        <TabPanel id="Baz">
                            <Text>
                                was released by PIAS Recordings on 4 October
                                2010 in Europe. Philharmonics was certified gold
                                in June 2011 by the Belgian Entertainment
                                Association (BEA) for sales of 10,000 Copies.
                            </Text>
                        </TabPanel>
                    </Tabs>
                </Panel>
                <Heading id="Stack">Stack</Heading>
                <Panel>
                    <Stack>
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </Stack>
                </Panel>
                <Heading id="Grid">Grid</Heading>
                <Panel>
                    <Grid>
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </Grid>
                </Panel>
                <Heading id="images">Images</Heading>
                <Panel>
                    <Stack>
                        <Image src="logo-large-alt.png" />
                        <Grid columns={2}>
                            <Image src="logo-large-alt.png" />
                            <Image src="logo-large-alt.png" />
                        </Grid>
                    </Stack>
                </Panel>
                <Heading id="keyboard">Key combos</Heading>
                <Panel>
                    <Text>
                        Mac modifiers <Keyboard command />
                        <Keyboard shift />
                        <Keyboard option />
                        <Keyboard ctrl />
                    </Text>
                    <Text>
                        Key combinations <Keyboard command>t</Keyboard>
                        <Keyboard shift>Hello</Keyboard>
                        <Keyboard option command></Keyboard>
                        <Keyboard ctrl>c</Keyboard>
                    </Text>
                </Panel>
                <Heading id="code-blocks">Code blocks</Heading>
                <Panel>
                    <Code inline>
                        {`.some-class { background-color: red; }`}
                    </Code>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris volutpat,
                        <Code inline>
                            {`.some-class { background-color: red; }`}
                        </Code>{' '}
                        odio vitae tempus interdum, sem erat scelerisque justo.
                    </Text>
                    <Code>{`.some-class { background-color: red; }`}</Code>
                </Panel>
                <Heading id="avatar">Avatar</Heading>
                <Panel>
                    <Avatar
                        src="https://avatars3.githubusercontent.com/u/3030010?s=400&u=36ccfde6e6ed4b6398bb3c79b596636ee25586ec&v=4"
                        alt="Daniel"
                        href="https://github.com/danieldelcore"
                    />
                </Panel>
                <Heading id="badge">Badges</Heading>
                <Panel>
                    <Badge>100</Badge>
                    <Badge>+50%</Badge>
                    <Badge>-50%</Badge>
                    <Badge>
                        <Emoji label="trophy">🏆</Emoji>
                    </Badge>
                </Panel>
                <Heading id="panels">Panels</Heading>
                <Panel>
                    <Panel>
                        <Text>
                            Hello world <Emoji label="wave">👋</Emoji>
                        </Text>
                    </Panel>
                </Panel>
                <Heading id="input">Input</Heading>
                <Panel>
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
                <Heading id="textarea">Text Area</Heading>
                <Panel>
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
                <Heading id="select">Select</Heading>
                <Panel>
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
                <Heading id="checkbox">Checkboxes</Heading>
                <Panel>
                    <Checkbox
                        id="test2"
                        name="test2"
                        value="isChecked"
                        checked
                        onChange={() => console.log('onChange')}
                        label="My checkbox"
                    />
                </Panel>
                <Heading id="radio">Radios</Heading>
                <Panel>
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
                <Heading id="range">Range</Heading>
                <Panel>
                    <Text>TODO</Text>
                </Panel>
                <Heading id="toggle">Toggle</Heading>
                <Panel>
                    <Text>TODO</Text>
                </Panel>
                <Heading id="buttons">Buttons</Heading>
                <Panel>
                    <Grid>
                        <Button>Base</Button>
                        <Button primary>Primary</Button>
                    </Grid>
                    <Heading weight="h3">Disabled</Heading>
                    <Grid>
                        <Button disabled>Disabled Base</Button>
                        <Button disabled primary>
                            Disabled Primary
                        </Button>
                    </Grid>
                </Panel>
                <Heading id="modals">Modals</Heading>
                <Panel>
                    <Modal
                        open={isModalOpen}
                        onClickOutside={() => closeModal()}
                        onEscKeyPress={() => closeModal()}
                    >
                        <ModalHeader>Modal heading</ModalHeader>
                        <ModalBody>
                            <Text>
                                Some content contained within the Modal.
                            </Text>
                        </ModalBody>
                        <ModalFooter>
                            <Grid>
                                <Button onClick={() => closeModal()}>
                                    Cancel
                                </Button>
                                <Button primary onClick={() => closeModal()}>
                                    Submit
                                </Button>
                            </Grid>
                        </ModalFooter>
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
