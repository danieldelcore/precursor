/** @jsx jsx */
import { ChangeEventHandler, ReactNode, FC } from 'react';
import { jsx, css, useStyles } from '@trousers/core';
import collector from '@trousers/collector';
import { useTheme } from '@trousers/theme';
// @ts-ignore
import ChevronDown from 'react-feather/dist/icons/chevron-down';

import { Theme } from '@precursor/theme';

export interface SelectProps {
    children: ReactNode | string;
    className?: string;
    disabled?: boolean;
    id?: string;
    name?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    value?: string;
    state?: 'success' | 'error' | 'warning';
    size?: 's' | 'm' | 'l';
    defaultValue?: string;
}

const styles = ({ size, state, disabled }: SelectProps) => collector<Theme>(
    'Select',
).element`
    --select-height: 44px;
    --select-border-color: #E2E8F0;
    height: var(--select-height);
    padding: 0 10px;
    background-color: ${({ color }) => color.background.base};
    border-radius: ${({ radius }) => radius.m};
    border-color: var(--select-border-color);
    border-style: solid;
    border-width: 2px;
    box-shadow: none;
    appearance: none;
    width: 100%;
    margin: 0;
    font-family: ${({ font }) => font.base};
    color: ${({ color }) => color.typography.base};

    &::placeholder {
        color: ${({ color }) => color.typography.placeholder};
    }

    &:focus {
        box-shadow: var(--select-border-color) 0px 0px 2px 1px;
        outline: 0;
    }
`.modifier('success', state === 'success')`
    --select-border-color: #31C48D;
`.modifier('warning', state === 'warning')`
    --select-border-color: #FDBA8C;
`.modifier('error', state === 'error')`
    --select-border-color: #F98080;
`.modifier('disabled', disabled)`
    cursor: not-allowed;
    background-color: ${({ color }: Theme) => color.background.light};
`.modifier('small', size === 's')`
    --select-height: 36px;
`.modifier('large', size === 'l')`
    --select-height: 52px;
`;

const Select: FC<SelectProps> = props => {
    const classNames = useStyles(styles(props));
    const { theme } = useTheme();

    return (
        <div
            css={css`
                position: relative;
            `}
        >
            <select
                className={classNames}
                id={props.id}
                name={props.name}
                onChange={props.onChange}
                onBlur={props.onChange}
                value={props.value || props.defaultValue}
                disabled={props.disabled}
            >
                {props.children}
            </select>
            <span
                css={css`
                    align-items: center;
                    display: flex;
                    height: 100%;
                    justify-content: center;
                    padding-right: 10px;
                    pointer-events: none;
                    position: absolute;
                    right: 0;
                    top: 0;
                `}
            >
                <ChevronDown
                    size="20"
                    color={theme.color.typography.placeholder}
                />
            </span>
        </div>
    );
};

export default Select;
