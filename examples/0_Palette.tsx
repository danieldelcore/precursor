/* eslint-disable jsx-a11y/accessible-emoji */
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import Avatar from '@precursor/avatar';
import Blockquote from '@precursor/blockquote';
import Text from '@precursor/text';
import Button from '@precursor/button';
import Badge from '@precursor/badge';
import Lozenge from '@precursor/lozenge';
import Checkbox from '@precursor/checkbox';
import Code from '@precursor/code';
import Heading from '@precursor/heading';
import Input from '@precursor/input';
import Range from '@precursor/range';
import Image from '@precursor/image';
import Label from '@precursor/label';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '@precursor/modal';
import Message from '@precursor/message';
import Panel from '@precursor/panel';
import Radio from '@precursor/radio';
import Select from '@precursor/select';
import TextArea from '@precursor/textarea';
import Emoji from '@precursor/emoji';
import Keyboard from '@precursor/keyboard';
import Stack from '@precursor/stack';
import Spinner from '@precursor/spinner';
import Skeleton from '@precursor/skeleton';
import Grid, { Column, Row } from '@precursor/grid';
import Inline from '@precursor/inline';
import Toggle from '@precursor/toggle';
import { Tabs, Tab, TabList, TabPanel } from '@precursor/tabs';
import List, { ListItem } from '@precursor/list';
// import { theme as baseTheme, Theme, ThemeProvider } from '@precursor/theme';
// import deepObject from 'object-deep-key';
import {
    Box,
    Container,
    // ThemeEditor,
    //themeSchema
} from '../fixtures';

const BasicExample = () => {
    // const [theme, setTheme] = useState<Theme>(baseTheme);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    return (
        <React.Fragment>
            {/* <ThemeProvider theme={theme}> */}
            {/* <aside
                style={{
                    width: '320px',
                    height: '100%',
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    padding: theme.space.m,
                    overflow: 'scroll',
                    backgroundColor: theme.color.background.base,
                    borderLeft: `1px solid ${theme.color.background.light}`,
                }}
            >
                <Stack>
                    <Heading weight="h2">Theme editor</Heading>
                    <ThemeEditor
                        schema={themeSchema}
                        theme={baseTheme}
                        onChange={(key, value) => {
                            const nextTheme = { ...theme };
                            deepObject(nextTheme, key).set(value);
                            setTheme(nextTheme);
                        }}
                    />
                </Stack>
            </aside> */}
            <div
                style={{
                    display: 'block',
                    marginRight: '320px',
                }}
            >
                <Container>
                    <Stack>
                        <Heading weight="h1">Precursor ⬢</Heading>
                        <Heading id="typography">Typography</Heading>
                        <Panel>
                            <Stack>
                                <Heading weight="h1">Heading One</Heading>
                                <Heading>Heading Two</Heading>
                                <Heading weight="h3">Heading Three</Heading>
                                <Heading weight="h4">Heading Four</Heading>
                                <Heading weight="h5">Heading Five</Heading>
                                <Heading weight="h6">Heading Six</Heading>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Mauris volutpat, odio vitae
                                    tempus interdum, sem erat scelerisque justo,
                                    at pulvinar nunc quam id sapien. Nam semper
                                    elit at sapien aliquam, eget tincidunt leo
                                    consequat. Aenean sodales ex ut tellus
                                    accumsan, eu condimentum elit pharetra.
                                </Text>
                                <Text>
                                    <Text as="strong">
                                        Strong text{' '}
                                        <Emoji label="gorilla">🦍</Emoji> Lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit. Mauris volutpat,{' '}
                                        <Text as="em">
                                            odio vitae tempus interdum, sem
                                        </Text>
                                        erat scelerisque justo.
                                    </Text>
                                </Text>
                                <Text>
                                    <Text as="small">
                                        Small text{' '}
                                        <Emoji label="mouse">🐁</Emoji> Lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                        <Text as="del">
                                            Mauris volutpat, odio
                                        </Text>{' '}
                                        vitae tempus interdum, sem erat
                                        scelerisque justo.
                                    </Text>
                                </Text>
                                <Blockquote cite="https://zeropoly.github.io/precursor">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Mauris volutpat, odio vitae
                                    tempus interdum, sem erat scelerisque
                                </Blockquote>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Mauris volutpat, odio vitae
                                    tempus interdum, sem erat scelerisque justo.
                                </Text>
                                <Grid>
                                    <Column span={6}>
                                        <List>
                                            <ListItem>Item</ListItem>
                                            <ListItem>Item</ListItem>
                                            <ListItem>Item</ListItem>
                                            <ListItem>Item</ListItem>
                                            <ListItem>Item</ListItem>
                                            <ListItem>Item</ListItem>
                                        </List>
                                    </Column>
                                    <Column span={6}>
                                        <List type="ol">
                                            <ListItem>Item</ListItem>
                                            <ListItem>Item</ListItem>
                                            <ListItem>Item</ListItem>
                                            <ListItem>Item</ListItem>
                                            <ListItem>Item</ListItem>
                                            <ListItem>Item</ListItem>
                                        </List>
                                    </Column>
                                </Grid>
                            </Stack>
                        </Panel>
                        <Heading id="spacing">Spacing</Heading>
                        {/* <Panel>
                            <Stack>
                                {Object.keys(theme.space).map(key => (
                                    <div key={key}>
                                        <Label>
                                            {key} ({theme.space[key]})
                                        </Label>
                                        <Box
                                            backgroundColor={
                                                theme.color.primary.base
                                            }
                                            width={theme.space[key]}
                                        />
                                    </div>
                                ))}
                            </Stack>
                        </Panel> */}
                        <Heading id="Stack">Stack</Heading>
                        <Panel>
                            <Stack>
                                <Box />
                                <Box />
                                <Box />
                                <Box />
                            </Stack>
                        </Panel>
                        <Heading id="Inline">Inline</Heading>
                        <Panel>
                            <Inline>
                                <Box width="105px" />
                                <Box width="200px" />
                                <Box width="50px" />
                                <Box width="15px" />
                                <Box width="220px" />
                                <Box width="53px" />
                            </Inline>
                        </Panel>
                        <Heading id="Grid">Grid</Heading>
                        <Panel>
                            <Stack>
                                <Heading weight="h3">Basic grid</Heading>
                                <Grid gap="m">
                                    <Column span={4}>
                                        <Box />
                                    </Column>
                                    <Column span={4}>
                                        <Box />
                                    </Column>
                                    <Column span={4}>
                                        <Box />
                                    </Column>
                                    <Column span={6}>
                                        <Box />
                                    </Column>
                                    <Column span={6}>
                                        <Box />
                                    </Column>
                                    <Column span={2}>
                                        <Box />
                                    </Column>
                                    <Column span={2}>
                                        <Box />
                                    </Column>
                                    <Column span={2}>
                                        <Box />
                                    </Column>
                                    <Column span={2}>
                                        <Box />
                                    </Column>
                                    <Column span={2}>
                                        <Box />
                                    </Column>
                                    <Column span={2}>
                                        <Box />
                                    </Column>
                                </Grid>
                                <Heading weight="h3">Page layouts</Heading>
                                <Grid>
                                    <Row>
                                        <Box>Navigation</Box>
                                    </Row>
                                    <Column span={4}>
                                        <Box backgroundColor="antiquewhite">
                                            Side bar
                                        </Box>
                                    </Column>
                                    <Column span={8}>
                                        <Box backgroundColor="lavender">
                                            Main content
                                        </Box>
                                    </Column>
                                </Grid>
                            </Stack>
                        </Panel>
                        <Heading id="skeleton">Skeleton</Heading>
                        <Panel>
                            <Stack>
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton as="avatar" />
                                <Skeleton as="image" />
                                <Heading weight="h3">Compositions</Heading>
                                <Inline>
                                    <Skeleton as="avatar" />
                                    <Stack gap="xs">
                                        <Skeleton />
                                        <Skeleton />
                                        <Skeleton />
                                    </Stack>
                                </Inline>
                            </Stack>
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
                            <Stack>
                                <Text>
                                    <Inline gap="xs">
                                        Mac modifiers: <Keyboard command />
                                        <Keyboard shift />
                                        <Keyboard option />
                                        <Keyboard ctrl />
                                    </Inline>
                                </Text>
                                <Text>
                                    <Inline gap="xs">
                                        Key combinations:{' '}
                                        <Keyboard command>t</Keyboard>
                                        <Keyboard shift>Hello</Keyboard>
                                        <Keyboard option command></Keyboard>
                                        <Keyboard ctrl>c</Keyboard>
                                    </Inline>
                                </Text>
                            </Stack>
                        </Panel>
                        <Heading id="code-blocks">Code blocks</Heading>
                        <Panel>
                            <Stack>
                                <Inline>
                                    <Code inline>
                                        {`.some-class { background-color: red; }`}
                                    </Code>
                                </Inline>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Mauris volutpat,
                                    <Code inline>
                                        {`.some-class { background-color: red; }`}
                                    </Code>{' '}
                                    odio vitae tempus interdum, sem erat
                                    scelerisque justo.
                                </Text>
                                <Code>{`.some-class { background-color: red; }`}</Code>
                            </Stack>
                        </Panel>
                        <Heading id="avatar">Avatar</Heading>
                        <Panel>
                            <Avatar
                                src="https://avatars3.githubusercontent.com/u/3030010?s=400&u=36ccfde6e6ed4b6398bb3c79b596636ee25586ec&v=4"
                                alt="Daniel"
                            />
                        </Panel>
                        <Heading id="panels">Panels</Heading>
                        <Panel>
                            <Panel>
                                <Text>
                                    Hello world <Emoji label="wave">👋</Emoji>
                                </Text>
                            </Panel>
                        </Panel>
                        <Heading id="messages">Messages</Heading>
                        <Panel>
                            <Stack>
                                <Message>
                                    <Text>
                                        Hello <Emoji label="wave">👋</Emoji>,
                                        here is some{' '}
                                        <Text as="strong">
                                            contextual information
                                        </Text>
                                    </Text>
                                </Message>
                                <Message status="success">
                                    <Text>
                                        <Text as="strong">Congratulations</Text>
                                        , you did something right!
                                    </Text>
                                </Message>
                                <Message status="warning">
                                    <Text>
                                        Be careful, something bad might happen{' '}
                                        <Emoji label="worried face">😨</Emoji>
                                    </Text>
                                </Message>
                                <Message status="error">
                                    <Text>
                                        <Text as="strong">Oh no</Text>,
                                        something bad happened!{' '}
                                        <Emoji label="sad face">😞</Emoji>
                                    </Text>
                                </Message>
                            </Stack>
                        </Panel>
                        <Heading id="badge">Badges</Heading>
                        <Panel>
                            <Stack>
                                <Heading weight="h3">Default</Heading>
                                <Inline gap="xs">
                                    <Badge>100</Badge>
                                    <Badge>+50%</Badge>
                                    <Badge>-50%</Badge>
                                    <Badge>
                                        <Emoji label="trophy">🏆</Emoji>
                                    </Badge>
                                </Inline>
                                <Heading weight="h3">Warning</Heading>
                                <Inline gap="xs">
                                    <Badge status="warning">100</Badge>
                                    <Badge status="warning">+50%</Badge>
                                    <Badge status="warning">-50%</Badge>
                                    <Badge status="warning">
                                        <Emoji label="trophy">🏆</Emoji>
                                    </Badge>
                                </Inline>
                                <Heading weight="h3">Error</Heading>
                                <Inline gap="xs">
                                    <Badge status="error">100</Badge>
                                    <Badge status="error">+50%</Badge>
                                    <Badge status="error">-50%</Badge>
                                    <Badge status="error">
                                        <Emoji label="trophy">🏆</Emoji>
                                    </Badge>
                                </Inline>
                                <Heading weight="h3">Success</Heading>
                                <Inline gap="xs">
                                    <Badge status="success">100</Badge>
                                    <Badge status="success">+50%</Badge>
                                    <Badge status="success">-50%</Badge>
                                    <Badge status="success">
                                        <Emoji label="trophy">🏆</Emoji>
                                    </Badge>
                                </Inline>
                            </Stack>
                        </Panel>
                        <Heading id="lozenge">Lozenges</Heading>
                        <Panel>
                            <Stack>
                                <Heading weight="h3">Default</Heading>
                                <Inline gap="xs">
                                    <Lozenge>Default</Lozenge>
                                    <Lozenge>Info</Lozenge>
                                    <Lozenge>
                                        Target <Emoji label="trophy">🏆</Emoji>
                                    </Lozenge>
                                </Inline>
                                <Heading weight="h3">Warning</Heading>
                                <Inline gap="xs">
                                    <Lozenge status="warning">Warning</Lozenge>
                                    <Lozenge status="warning">Pending</Lozenge>
                                    <Lozenge status="warning">At risk</Lozenge>
                                </Inline>
                                <Heading weight="h3">Error</Heading>
                                <Inline gap="xs">
                                    <Lozenge status="error">Removed</Lozenge>
                                    <Lozenge status="error">Error</Lozenge>
                                    <Lozenge status="error">Delayed</Lozenge>
                                </Inline>
                                <Heading weight="h3">Success</Heading>
                                <Inline gap="xs">
                                    <Lozenge status="success">Success</Lozenge>
                                    <Lozenge status="success">Shipped</Lozenge>
                                    <Lozenge status="success">Active</Lozenge>
                                </Inline>
                            </Stack>
                        </Panel>
                        <Heading id="input">Input</Heading>
                        <Panel>
                            <Stack>
                                <Heading weight="h3">States</Heading>
                                <Label htmlFor="default-input">Default</Label>
                                <Input
                                    id="default-input"
                                    name="default-input"
                                    placeholder="im a placeholder"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                />
                                <Label htmlFor="input-success">Success</Label>
                                <Input
                                    id="input-success"
                                    name="input-success"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                    appearance="success"
                                />
                                <Label htmlFor="input-warning">Warning</Label>
                                <Input
                                    id="input-warning"
                                    name="input-warning"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                    appearance="warning"
                                />
                                <Label htmlFor="input-error">Error</Label>
                                <Input
                                    id="input-error"
                                    name="input-error"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                    appearance="error"
                                />
                                <Label htmlFor="input-disabled">Disabled</Label>
                                <Input
                                    id="input-disabled"
                                    name="input-disabled"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                    disabled
                                />
                                <Heading weight="h3">Sizing</Heading>
                                <Label htmlFor="small-input">Small</Label>
                                <Input
                                    id="small-input"
                                    name="small-input"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                    size="s"
                                />
                                <Label htmlFor="medium-input">Medium</Label>
                                <Input
                                    id="medium-input"
                                    name="medium-input"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                />
                                <Label htmlFor="large-input">Large</Label>
                                <Input
                                    id="large-input"
                                    name="large-input"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                    size="l"
                                />
                            </Stack>
                        </Panel>
                        <Heading id="textarea">Text Area</Heading>
                        <Panel>
                            <Stack>
                                <Heading weight="h3">States</Heading>
                                <Label htmlFor="default-input">Default</Label>
                                <TextArea
                                    id="default-TextArea"
                                    name="default-TextArea"
                                    placeholder="im a placeholder"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                />
                                <Label htmlFor="TextArea-success">
                                    Success
                                </Label>
                                <TextArea
                                    id="TextArea-success"
                                    name="TextArea-success"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                    appearance="success"
                                />
                                <Label htmlFor="TextArea-warning">
                                    Warning
                                </Label>
                                <TextArea
                                    id="TextArea-warning"
                                    name="TextArea-warning"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                    appearance="warning"
                                />
                                <Label htmlFor="TextArea-error">Error</Label>
                                <TextArea
                                    id="TextArea-error"
                                    name="TextArea-error"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                    appearance="error"
                                />
                                <Label htmlFor="TextArea-disabled">
                                    Disabled
                                </Label>
                                <TextArea
                                    id="TextArea-disabled"
                                    name="TextArea-disabled"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                    disabled
                                />
                                <Heading weight="h3">Sizing</Heading>
                                <Label htmlFor="small-TextArea">Small</Label>
                                <TextArea
                                    id="small-TextArea"
                                    name="small-TextArea"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                    size="s"
                                />
                                <Label htmlFor="medium-TextArea">Medium</Label>
                                <TextArea
                                    id="medium-TextArea"
                                    name="medium-TextArea"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                />
                                <Label htmlFor="large-TextArea">Large</Label>
                                <TextArea
                                    id="large-TextArea"
                                    name="large-TextArea"
                                    onChange={() => console.log('onChange')}
                                    value=""
                                    size="l"
                                />
                            </Stack>
                        </Panel>
                        <Heading id="select">Select</Heading>
                        <Panel>
                            <Stack>
                                <Heading weight="h3">States</Heading>
                                <Label htmlFor="default-input">Default</Label>
                                <Select
                                    id="default-select"
                                    name="default-select"
                                    onChange={() => console.log('onChange')}
                                >
                                    <option value="hello">Hello</option>
                                    <option value="world">world</option>
                                </Select>
                                <Label htmlFor="select-success">Success</Label>
                                <Select
                                    id="select-success"
                                    name="select-success"
                                    onChange={() => console.log('onChange')}
                                    appearance="success"
                                >
                                    <option value="hello">Hello</option>
                                    <option value="world">world</option>
                                </Select>
                                <Label htmlFor="select-warning">Warning</Label>
                                <Select
                                    id="select-warning"
                                    name="select-warning"
                                    onChange={() => console.log('onChange')}
                                    appearance="warning"
                                >
                                    <option value="hello">Hello</option>
                                    <option value="world">world</option>
                                </Select>
                                <Label htmlFor="select-error">Error</Label>
                                <Select
                                    id="select-error"
                                    name="select-error"
                                    onChange={() => console.log('onChange')}
                                    appearance="error"
                                >
                                    <option value="hello">Hello</option>
                                    <option value="world">world</option>
                                </Select>
                                <Label htmlFor="select-disabled">
                                    Disabled
                                </Label>
                                <Select
                                    id="select-disabled"
                                    name="select-disabled"
                                    onChange={() => console.log('onChange')}
                                    disabled
                                >
                                    <option value="hello">Hello</option>
                                    <option value="world">world</option>
                                </Select>
                                <Heading weight="h3">Sizing</Heading>
                                <Label htmlFor="small-select">Small</Label>
                                <Select
                                    id="small-select"
                                    name="small-select"
                                    onChange={() => console.log('onChange')}
                                    size="s"
                                >
                                    <option value="hello">Hello</option>
                                    <option value="world">world</option>
                                </Select>
                                <Label htmlFor="medium-select">Medium</Label>
                                <Select
                                    id="medium-select"
                                    name="medium-select"
                                    onChange={() => console.log('onChange')}
                                >
                                    <option value="hello">Hello</option>
                                    <option value="world">world</option>
                                </Select>
                                <Label htmlFor="large-select">Large</Label>
                                <Select
                                    id="large-select"
                                    name="large-select"
                                    onChange={() => console.log('onChange')}
                                    size="l"
                                >
                                    <option value="hello">Hello</option>
                                    <option value="world">world</option>
                                </Select>
                            </Stack>
                        </Panel>
                        <Heading id="checkbox">Checkboxes</Heading>
                        <Panel>
                            <Stack>
                                <Checkbox
                                    id="test2"
                                    name="test2"
                                    value="isChecked"
                                    checked
                                    onChange={() => console.log('onChange')}
                                    label="My checkbox"
                                />
                            </Stack>
                        </Panel>
                        <Heading id="radio">Radios</Heading>
                        <Panel>
                            <Stack>
                                <Heading weight="h3">Small</Heading>
                                <Radio
                                    id="smallRadio"
                                    name="smallRadio"
                                    value="1"
                                    label="small"
                                    size="s"
                                    checked
                                    onChange={() => console.log('onChange')}
                                />
                                <Radio
                                    id="smallRadio2"
                                    name="smallRadio"
                                    value="2"
                                    label="small 2"
                                    size="s"
                                />
                                <Radio
                                    id="smallRadio3"
                                    name="smalldisabledRadio"
                                    value="3"
                                    label="small 3(disabled)"
                                    size="s"
                                    disabled
                                />
                                <Heading weight="h3">Medium</Heading>
                                <Radio
                                    id="mediumRadio"
                                    name="mediumRadio"
                                    value="1"
                                    label="medium"
                                    checked
                                    onChange={() => console.log('onChange')}
                                />
                                <Radio
                                    id="mediumRadio2"
                                    name="mediumRadio"
                                    value="2"
                                    label="medium 2"
                                />
                                <Radio
                                    id="mediumRadio3"
                                    name="mediumdisabledRadio"
                                    value="medium"
                                    label="medium 3 (disabled)"
                                    disabled
                                />
                                <Heading weight="h3">Large</Heading>
                                <Radio
                                    id="largeRadio"
                                    name="largeRadio"
                                    value="1"
                                    label="large 1"
                                    size="l"
                                    checked
                                    onChange={() => console.log('onChange')}
                                />
                                <Radio
                                    id="largeRadio2"
                                    name="largeRadio"
                                    value="2"
                                    label="large 2"
                                    size="l"
                                />
                                <Radio
                                    id="largeRadio3"
                                    name="largedisabledRadio"
                                    value="3"
                                    label="large 3(disabled)"
                                    size="l"
                                    disabled
                                />
                            </Stack>
                        </Panel>
                        <Heading id="range">Range pickers</Heading>
                        <Panel>
                            <Stack>
                                <Heading weight="h3">Small</Heading>
                                <Range
                                    id="smallRange"
                                    name="smallRange"
                                    size="s"
                                    defaultValue={50}
                                />
                                <Heading weight="h3">Medium</Heading>
                                <Range
                                    id="mediumRange"
                                    name="mediumRange"
                                    defaultValue={50}
                                />
                                <Heading weight="h3">Large</Heading>
                                <Range
                                    id="largeRange"
                                    name="largeRange"
                                    size="l"
                                    defaultValue={50}
                                />
                                <Heading weight="h3">Disabled</Heading>
                                <Range
                                    id="largeDisabledRange"
                                    name="largeDisabledRange"
                                    size="l"
                                    defaultValue={50}
                                    disabled
                                />
                            </Stack>
                        </Panel>
                        <Heading id="toggle">Toggles</Heading>
                        <Panel>
                            <Stack>
                                <Heading weight="h3">Small</Heading>
                                <Toggle
                                    id="smalltoggle"
                                    name="smalltoggle"
                                    value="small"
                                    label="small"
                                    onChange={() => console.log('onChange')}
                                    size="s"
                                />
                                <Toggle
                                    id="smalldisabledtoggle"
                                    name="smalldisabledtoggle"
                                    value="small"
                                    label="small (disabled)"
                                    onChange={() => console.log('onChange')}
                                    size="s"
                                    disabled
                                />
                                <Heading weight="h3">Medium</Heading>
                                <Toggle
                                    id="mediumtoggle"
                                    name="mediumtoggle"
                                    value="medium"
                                    label="medium"
                                    onChange={() => console.log('onChange')}
                                />
                                <Toggle
                                    id="mediumdisabledtoggle"
                                    name="mediumdisabledtoggle"
                                    value="medium"
                                    label="medium (disabled)"
                                    onChange={() => console.log('onChange')}
                                    disabled
                                />
                                <Heading weight="h3">Large</Heading>
                                <Toggle
                                    id="largetoggle"
                                    name="largetoggle"
                                    value="large"
                                    label="large"
                                    onChange={() => console.log('onChange')}
                                    size="l"
                                />
                                <Toggle
                                    id="largedisabledtoggle"
                                    name="largedisabledtoggle"
                                    value="large"
                                    label="large (disabled)"
                                    onChange={() => console.log('onChange')}
                                    size="l"
                                    disabled
                                />
                            </Stack>
                        </Panel>
                        <Heading id="buttons">Buttons</Heading>
                        <Panel>
                            <Stack>
                                <Heading weight="h3">Idle</Heading>
                                <Inline>
                                    <Button>Base</Button>
                                    <Button primary>Primary</Button>
                                </Inline>
                                <Heading weight="h3">Disabled</Heading>
                                <Inline>
                                    <Button disabled>Disabled Base</Button>
                                    <Button disabled primary>
                                        Disabled Primary
                                    </Button>
                                </Inline>
                                <Heading weight="h3">Loading</Heading>
                                <Inline>
                                    <Button loading onClick={() => alert('yo')}>
                                        Loading Base
                                    </Button>
                                    <Button loading primary>
                                        Loading Primary
                                    </Button>
                                </Inline>
                            </Stack>
                        </Panel>
                        <Heading id="spinner">Spinner</Heading>
                        <Panel>
                            <Grid>
                                <Box>
                                    <Spinner />
                                </Box>
                                <Box backgroundColor="black">
                                    <Spinner color={'white'} />
                                </Box>
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
                                        Nils Frahm is a German musician,
                                        composer and record producer based in
                                        Berlin. He is known for combining
                                        classical and electronic music and for
                                        an unconventional approach to the piano
                                        in which he mixes a grand piano, upright
                                        piano, Roland Juno-60, Rhodes piano,
                                        drum machine, and Moog Taurus.
                                    </Text>
                                </TabPanel>
                                <TabPanel id="Bar">
                                    <Text>
                                        Agnes Caroline Thaarup Obel is a Danish
                                        singer/songwriter. Her first album,
                                        Philharmonics, was released by PIAS
                                        Recordings on 4 October 2010 in Europe.
                                        Philharmonics was certified gold in June
                                        2011 by the Belgian Entertainment
                                        Association (BEA) for sales of 10,000
                                        Copies.
                                    </Text>
                                </TabPanel>
                                <TabPanel id="Baz">
                                    <Text>
                                        was released by PIAS Recordings on 4
                                        October 2010 in Europe. Philharmonics
                                        was certified gold in June 2011 by the
                                        Belgian Entertainment Association (BEA)
                                        for sales of 10,000 Copies.
                                    </Text>
                                </TabPanel>
                            </Tabs>
                        </Panel>
                        <Heading id="modals">Modals</Heading>
                        <Panel>
                            <Modal
                                isOpen={isModalOpen}
                                onDismiss={() => closeModal()}
                            >
                                <ModalHeader>Modal heading</ModalHeader>
                                <ModalBody>
                                    <Text>
                                        Some content contained within the Modal.
                                    </Text>
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        primary
                                        onClick={() => closeModal()}
                                    >
                                        Submit
                                    </Button>
                                    <Button onClick={() => closeModal()}>
                                        Cancel
                                    </Button>
                                </ModalFooter>
                            </Modal>
                            <Button primary onClick={() => openModal()}>
                                Open modal
                            </Button>
                        </Panel>
                    </Stack>
                </Container>
            </div>
            {/* </ThemeProvider> */}
        </React.Fragment>
    );
};

storiesOf('Palette', module).add('Component Palette', () => <BasicExample />);
