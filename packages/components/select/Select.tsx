import React, { ChangeEventHandler, ReactNode, FC } from 'react';
import { css } from '@trousers/macro';
// @ts-ignore
import ChevronDown from 'react-feather/dist/icons/chevron-down';

// import { Theme } from '@precursor/theme';

export interface SelectProps {
    children: ReactNode | string;
    className?: string;
    disabled?: boolean;
    id?: string;
    name?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    value?: string;
    appearance?: 'success' | 'error' | 'warning';
    size?: 's' | 'm' | 'l';
    defaultValue?: string;
}

const styles = css('Select', {
    '--select-height': '44px',
    '--select-border-color': '#E2E8F0',
    height: 'var(--select-height)',
    padding: '0 10px',
    backgroundColor: 'var(--color-background-base)',
    borderRadius: 'var(--radius-m)',
    borderColor: 'var(--select-border-color)',
    borderStyle: 'solid',
    borderWidth: '2px',
    boxShadow: 'none',
    appearance: 'none',
    width: '100%',
    margin: 0,
    fontFamily: 'var(--font-base)',
    color: 'var(--color-typography-base)',
    '&::placeholder': {
        color: 'var(--color-typography-placeholder)',
    },
    '&:focus': {
        'box-shadow': 'var(--select-border-color) 0px 0px 2px 1px',
        outline: 0,
    },
})
    .modifier('success', {
        '--select-border-color': '#31C48D',
    })
    .modifier('warning', {
        '--select-border-color': '#FDBA8C',
    })
    .modifier('error', {
        '--select-border-color': '#F98080',
    })
    .modifier('disabled', {
        cursor: 'not-allowed',
        backgroundColor: 'var(--color-background-light)',
    })
    .modifier('small', {
        '--select-height': '36px',
    })
    .modifier('large', {
        '--select-height': '52px',
    });

const Select: FC<SelectProps> = props => {
    return (
        <div css={css({ position: 'relative' })}>
            <select
                // className={classNames}
                css={styles}
                $success={props.appearance === 'success'}
                $warning={props.appearance === 'warning'}
                $error={props.appearance === 'error'}
                $disabled={props.disabled}
                $small={props.size === 's'}
                $large={props.size === 'l'}
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
                css={css({
                    alignItems: 'center',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    paddingRight: '10px',
                    pointerEvents: 'none',
                    position: 'absolute',
                    right: 0;
                    top: 0;
                })}
            >
                <ChevronDown
                    size="20"
                    color={theme.color.typography.placeholder} // TODO: Fix this
                />
            </span>
        </div>
    );
};

export default Select;
