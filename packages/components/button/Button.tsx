/** @jsx jsx */
import { FC, ReactNode, Fragment } from 'react';
import { jsx } from '@trousers/core';
import collector from '@trousers/collector';

import { Theme } from '@precursor/theme';
import Spinner from '@precursor/spinner';

export interface ButtonProps {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    primary?: boolean;
    disabled?: boolean;
    loading?: boolean;
    onClick?: React.MouseEventHandler;
}

const styles = (props: ButtonProps) => collector<Theme>('Button').element`
        display: inline-block;
        position: relative;
        min-height: 30px;
        color: ${({ color }) => color.typography.base};
        text-align: center;
        font-weight: ${({ fontWeight }) => fontWeight.base};
        line-height: ${({ lineHeight }) => lineHeight.base};
        letter-spacing: .1rem;
        text-decoration: none;
        white-space: nowrap;
        background-color: ${({ color }) => color.neutral.lighter};
        border-radius: ${({ radius }) => radius.l};
        padding: ${({ spacePreset }) => `${spacePreset.insetSquish}`};
        cursor: pointer;
        user-select: none;
        border: none;
        outline: none;
        transition: background-color 200ms;

        > * {
            pointer-events: none;
        }

        &:focus {
            box-shadow: ${({ color }) => color.neutral.base} 0px 0px 2px 1px;
            outline: 0;
        }

        &:hover {
            background-color: ${({ color }) => color.neutral.light};
        }

        &:active {
            background-color: ${({ color }) => color.neutral.base};
        }
    `.modifier('primary', props.primary)`
        color: ${({ color }) => color.typography.baseInverse};
        background-color: ${({ color }) => color.primary.base};

        &:focus {
            box-shadow: ${({ color }) => color.primary.base} 0px 0px 2px 1px;
            outline: 0;
        }

        &:hover {
            background-color: ${({ color }) => color.primary.dark};
        }

        &:active {
            background-color: ${({ color }) => color.primary.darker};
        }
    `.modifier('disabled', props.disabled || props.loading)`
        color: #CFD8E3;
        background-color: ${({ color }: Theme) => color.neutral.lighter};
        cursor: not-allowed;

        &:hover {
            background-color: ${({ color }: Theme) => color.neutral.lighter};
        }
    `;

const Button: FC<ButtonProps> = props => (
    <button
        css={styles(props)}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled || props.loading}
    >
        {props.loading ? (
            <Fragment>
                <div
                    css={{
                        position: 'absolute',
                        display: 'flex',
                        pointerEvents: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
                >
                    <Spinner />
                </div>
                <span css={{ opacity: 0 }}>{props.children}</span>
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
