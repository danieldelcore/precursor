/** @jsx jsx */
import { jsx } from '@trousers/core';
import collector from '@trousers/collector';
import { FC, useRef } from 'react';

import { Theme } from '@precursor/theme';

export interface SliderProps {
    disabled?: boolean;
    value: number;
    progress: string;
    min: number;
    max: number;
    onDrag: (event: MouseEvent | TouchEvent) => void;
}

const styles = (disabled: SliderProps['disabled']) =>
    collector<Theme>('Thumb').element`
    width: var(--range-thumb-height);
    height: var(--range-thumb-height);
    border-radius: 50%;
    position: absolute;
    top: calc(var(--range-track-height) / 2 * -1);
    background-color: ${({ color }) => color.primary.base};
    transition: background-color 200ms;

    &:hover {
        background-color: ${({ color }) => color.primary.dark};
    }

    &:active {
        background-color: ${({ color }) => color.primary.darker};
    }

    &:focus {
        box-shadow: ${({ color }) => color.primary.base} 0px 0px 2px 1px;
        outline: 0;
    }
`.modifier('disabled', disabled)`
    background-color: ${({ color }) => color.neutral.light};
    cursor: not-allowed;

    &:hover {
        background-color: ${({ color }: Theme) => color.neutral.lighter};
    }
`;

const Slider: FC<SliderProps> = ({
    disabled,
    value,
    progress,
    min,
    max,
    onDrag,
}) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    function handleMouseMove(event: MouseEvent) {
        onDrag(event);
    }

    function handleTouchMove(event: TouchEvent) {
        onDrag(event);
    }

    function handleMouseUp() {
        if (!sliderRef.current) return;
        sliderRef.current.ownerDocument.removeEventListener(
            'mousemove',
            handleMouseMove,
        );

        sliderRef.current.ownerDocument.removeEventListener(
            'mouseup',
            handleMouseUp,
        );
    }

    function handleMouseDown() {
        if (!sliderRef.current) return;
        sliderRef.current.ownerDocument.addEventListener(
            'mousemove',
            handleMouseMove,
        );
        sliderRef.current.ownerDocument.addEventListener(
            'mouseup',
            handleMouseUp,
        );
    }

    function handleTouchEnd() {
        if (!sliderRef.current) return;
        sliderRef.current.ownerDocument.removeEventListener(
            'touchmove',
            handleTouchMove,
        );

        sliderRef.current.ownerDocument.removeEventListener(
            'touchend',
            handleTouchEnd,
        );
    }

    function handleTouchStart() {
        if (!sliderRef.current) return;
        sliderRef.current.ownerDocument.addEventListener(
            'touchend',
            handleTouchEnd,
        );

        sliderRef.current.ownerDocument.addEventListener(
            'touchmove',
            handleTouchMove,
        );
    }

    return (
        <div
            ref={sliderRef}
            role={!disabled ? 'slider' : undefined}
            tabIndex={disabled ? -1 : 0}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            css={styles(disabled)}
            style={{
                left: `calc(${progress} - var(--range-thumb-height) / 2)`,
            }}
            draggable="false"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        />
    );
};

export default Slider;
