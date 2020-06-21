import React, {
    FC,
    ReactNode,
    useState,
    Children,
    useRef,
    useLayoutEffect,
} from 'react';
import TabsContext from './TabsContext';

export interface TabsProps {
    defaultActive?: string;
    active?: string;
    onChange?: (id: string) => void;
    children: ReactNode;
}

const Tabs: FC<TabsProps> = ({
    defaultActive,
    active: activeTab,
    onChange: onChangeHandler,
    children,
}) => {
    const tabs = useRef<any[]>([]);
    const [active, setActive] = useState<string | undefined>(
        activeTab || defaultActive,
    );

    useLayoutEffect(() => {
        tabs.current = Children.toArray(children).filter(child => {
            return (
                //@ts-ignore
                React.isValidElement(child) && child.type.name === 'TabPanel'
            );
        }) as React.ReactElement[];

        console.log(tabs.current);
    }, [children]);

    const onChange = (id: string) => {
        onChangeHandler && onChangeHandler(id);

        if (!activeTab) {
            setActive(id);
        }
    };

    const setLast = () => {
        onChange(tabs.current[tabs.current.length - 1].props.id);
    };

    const setFirst = () => {
        onChange(tabs.current[0].props.id);
    };

    const setPrev = () => {
        const currentIndex = tabs.current.findIndex(
            tab => tab.props.id === active,
        );

        if (currentIndex === -1) {
            setFirst();
        } else if (currentIndex === 0) {
            setLast();
        } else {
            onChange(tabs.current[currentIndex - 1].props.id);
        }
    };

    const setNext = () => {
        const currentIndex = tabs.current.findIndex(
            tab => tab.props.id === active,
        );

        if (currentIndex === -1) {
            setFirst();
        } else if (currentIndex === tabs.current.length - 1) {
            setFirst();
        } else {
            onChange(tabs.current[currentIndex + 1].props.id);
        }
    };

    return (
        <TabsContext.Provider
            value={{
                active,
                setActive: onChange,
                setLast,
                setFirst,
                setNext,
                setPrev,
            }}
        >
            {children}
        </TabsContext.Provider>
    );
};

export default Tabs;
