import { css } from '@trousers/macro';
import React, { FC, useRef } from 'react';

// import { Theme } from '@precursor/theme';

export interface SliderProps {
    disabled?: boolean;
    value: number;
    progress: string;
    min: number;
    max: number;
    onDrag: (event: MouseEvent | TouchEvent) => void;
}

const styles = css('Thumb', {
    width: 'var(--range-thumb-height)',
    height: 'var(--range-thumb-height)',
    borderRadius: '50%',
    position: 'absolute',
    top: 'calc(var(--range-track-height) / 2 * -1)',
    backgroundColor: 'var(--color-primary-base)',
    transition: 'background-color 200ms',
    '&:hover': {
        backgroundColor: 'var(--color-primary-dark)',
    },
    '&:active': {
        backgroundColor: 'var(--color-primary-darker)',
    },
    '&:focus': {
        boxShadow: 'var(--color-primary-base} 0px 0px 2px 1px',
        outline: 0,
    },
}).modifier('disabled', {
    backgroundColor: 'var(--color-neutral-light)',
    cursor: 'not-allowed',
    '&:hover': {
        backgroundColor: 'var(--color-neutral-lighter)',
    },
});

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
            css={styles}
            $disabled={disabled}
            style={{
                left: `calc(${progress} - var(--range-thumb-height) / 2)`,
            }}
            role={!disabled ? 'slider' : undefined}
            tabIndex={disabled ? -1 : 0}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            draggable="false"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        />
    );
};

export default Slider;
