/* eslint-disable jsx-a11y/no-static-element-interactions */
/** @jsx jsx */
import { jsx } from '@trousers/core';
import collector from '@trousers/collector';
import { FC, useRef, useState } from 'react';

import Slider from './Slider';
import Track from './Track';

export interface RangeProps {
    disabled?: boolean;
    id?: string;
    name: string;
    value?: number;
    defaultValue?: number;
    size?: 's' | 'm' | 'l';
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
}

function getValueFromPosition(
    position: { x: number; y: number },
    min: number,
    max: number,
    clientRect: ClientRect,
) {
    const sizePerc = position.x / clientRect.width || 0;
    const valueDiff = max - min;

    return min + valueDiff * sizePerc;
}

function getStepFromValue(value: number, valuePerStep: number) {
    return Math.round(value / valuePerStep) * valuePerStep;
}

const styles = (size: RangeProps['size']) =>
    collector('Thumb').element`
        --range-track-height: 2px;
        --range-thumb-height: 18px;
        height: var(--range-thumb-height);
        cursor: pointer;
        position: relative;
    `.modifier('small', size === 's')`
        --range-thumb-height: 16px;
    `.modifier('large', size === 'l')`
        --range-thumb-height: 22px;
    `;

const Range: FC<RangeProps> = ({
    max = 100,
    min = 0,
    step = 1,
    size,
    value,
    defaultValue,
    ...props
}) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [currentValue, setCurrentValue] = useState(
        value || defaultValue || 0,
    );
    const [progress, setProgress] = useState(
        `${Math.round(max * (currentValue / 100))}%`,
    );

    function getTrackClientRect() {
        return trackRef.current && trackRef.current.getBoundingClientRect();
    }

    function updateValue(rawValue: number) {
        let nextValue = rawValue;

        if (rawValue > max) nextValue = max;
        if (rawValue < min) nextValue = min;

        setCurrentValue(nextValue);
        setProgress(
            nextValue === 0 ? '0%' : `${Math.round(max * (nextValue / 100))}%`,
        );

        props.onChange && props.onChange(nextValue);
    }

    function handleKeyDown(event: React.KeyboardEvent) {
        if (props.disabled) return;

        switch (event.keyCode) {
            case 35:
                event.preventDefault();
                updateValue(max);
                break;
            case 36:
                event.preventDefault();
                updateValue(min);
                break;
            case 37:
            case 40:
                event.preventDefault();
                updateValue(currentValue - step);
                break;
            case 39:
            case 38:
                event.preventDefault();
                updateValue(currentValue + step);
                break;
            default:
                break;
        }
    }

    function handleTrackMouseDown(
        event:
            | React.MouseEvent<HTMLDivElement>
            | React.TouchEvent<HTMLDivElement>,
    ) {
        const trackClientRect = getTrackClientRect();

        if (props.disabled || !trackClientRect) return;

        event.preventDefault();

        const { clientX } = (event as React.TouchEvent<HTMLDivElement>).touches
            ? (event as React.TouchEvent<HTMLDivElement>).touches[0]
            : (event as React.MouseEvent<HTMLDivElement>);

        const position = {
            x: clientX - trackClientRect.left,
            y: 0,
        };

        const value = getValueFromPosition(position, min, max, trackClientRect);
        const stepValue = getStepFromValue(value, step);

        updateValue(stepValue);
    }

    function handleSliderDrag(event: MouseEvent | TouchEvent) {
        const trackClientRect = getTrackClientRect();
        if (props.disabled || !trackClientRect) return;

        const { clientX } = (event as TouchEvent).touches
            ? (event as TouchEvent).touches[0]
            : (event as MouseEvent);

        const position = {
            x: Math.min(
                Math.max(clientX - trackClientRect.left, 0),
                trackClientRect.width,
            ),
            y: 0,
        };

        setIsDragging(true);
        requestAnimationFrame(() => {
            const value = getValueFromPosition(
                position,
                min,
                max,
                trackClientRect,
            );
            const stepValue = getStepFromValue(value, step);
            updateValue(stepValue);
        });
    }

    function handleInteractionEnd() {
        if (isDragging) setIsDragging(false);
    }

    return (
        <div
            css={styles(size)}
            onKeyDown={handleKeyDown}
            onMouseDown={handleTrackMouseDown}
            onTouchStart={handleTrackMouseDown}
            onMouseUp={handleInteractionEnd}
            onTouchEnd={handleInteractionEnd}
            aria-disabled={props.disabled}
        >
            <Track
                ref={trackRef}
                progress={progress}
                disabled={props.disabled}
            />
            <Slider
                min={min}
                max={max}
                value={currentValue}
                progress={progress}
                disabled={props.disabled}
                onDrag={handleSliderDrag}
            />
            <input id={props.id} name={props.name} type="hidden" />
        </div>
    );
};

export default Range;
