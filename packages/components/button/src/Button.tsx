import React, { FC, ReactNode, Fragment } from 'react';
import { css } from '@trousers/macro';

// import { Theme } from '@precursor/theme';
import Spinner from '@precursor/spinner';

export interface ButtonProps {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    primary?: boolean;
    disabled?: boolean;
    loading?: boolean;
    onClick?: React.MouseEventHandler;
}

const styles = css('Button', {
    display: 'inline-block',
    position: 'relative',
    minHeight: '30px',
    color: 'var(--color-typography-base)',
    textAlign: 'center',
    fontWeight: 'var(--fontWeight-base)',
    lineHeight: 'var(--lineHeight-base)',
    letterSpacing: '.1rem',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    backgroundColor: 'var(--color-neutral-lighter)',
    borderRadius: 'var(--radius.l)',
    padding: `var(--spacePreset-insetSquish)`,
    cursor: 'pointer',
    userSelect: 'none',
    border: 'none',
    outline: 'none',
    transition: 'background-color 200ms',
    '> *': {
        pointerEvents: 'none',
    },
    '&:focus': {
        boxShadow: 'var(--color-neutral-base) 0px 0px 2px 1px',
        outline: 0,
    },
    '&:hover': {
        backgroundColor: 'var(--color-neutral-light)',
    },
    '&:active': {
        backgroundColor: 'var(--color-neutral-base)',
    },
})
    .modifier('primary', {
        color: 'var(--color-typography-baseInverse)',
        backgroundColor: 'var(--color-primary-base)',
        '&:focus': {
            boxShadow: 'var(--color-primary-base) 0px 0px 2px 1px',
            outline: 0,
        },
        '&:hover': {
            backgroundColor: 'var(--color-primary-dark)',
        },
        '&:active': {
            backgroundColor: 'var(--color-primary-darker)',
        },
    })
    .modifier('disabled', {
        color: '#CFD8E3',
        backgroundColor: 'var(--color-neutral-lighter)',
        cursor: 'not-allowed',
        '&:hover': {
            backgroundColor: 'var(--color-neutral-lighter)',
        },
    });

const Button: FC<ButtonProps> = props => (
    <button
        css={styles}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled || props.loading}
        $primary={props.primary}
        $disabled={props.disabled || props.loading}
    >
        {props.loading ? (
            <Fragment>
                <div
                    css={css({
                        position: 'absolute',
                        display: 'flex',
                        pointerEvents: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    })}
                >
                    <Spinner />
                </div>
                <span style={{ opacity: 0 }}>{props.children}</span>
            </Fragment>
        ) : (
            props.children
        )}
    </button>
);

Button.defaultProps = {
    type: 'button',
};

export default Button;
