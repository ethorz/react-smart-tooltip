import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from './Tooltip';

const ReactSmartTooltip = ({ 
    tooltip = {}, 
    text, 
    style, 
    className, 
    onMouseEnter = () => {},
    onShowTooltip = () => {},
}) => {
    const [width, setWidth] = useState({
        offsetWidth: 0,
        scrollWidth: 0
    });

    const handleMouseEnter = useCallback((event) => {
        const { offsetWidth, scrollWidth } = event.target;

        onMouseEnter(event);

        setWidth({
            offsetWidth,
            scrollWidth
        });
    }, [onMouseEnter]);

    const isShowTooltip = useMemo(() => 
            width.offsetWidth < width.scrollWidth && !tooltip.disabled, 
        [width, tooltip]);

    const contentStyles = {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        ...style
    };

    let content = [
        <div
            key="originalContent"
            style={contentStyles}
            className={className}
            onMouseEnter={handleMouseEnter}
        >
            {text}
        </div>
    ];

    if (isShowTooltip) {
        if (!tooltip.title) {
            tooltip.title = text;
        }

        onShowTooltip();

        content = [
            <ReactTooltip
                key={'originalDotTooltipWrapper'}
                {...tooltip}
            >
                <div
                    className={className}
                    style={contentStyles}
                    onMouseEnter={handleMouseEnter}
                >
                    {text}
                </div>
            </ReactTooltip>
        ];
    }

    return content;
};

ReactSmartTooltip.propTypes = {
    tooltip: PropTypes.shape({
        title: PropTypes.string,
        arrow: PropTypes.bool,
        position: PropTypes.string,
        className: PropTypes.string,
        disabled: PropTypes.bool
    }),
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onShowTooltip: PropTypes.func
};

export default ReactSmartTooltip;