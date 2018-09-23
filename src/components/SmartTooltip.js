import React from 'react';
import PropTypes from 'prop-types';
import ReactSmartTooltipMethods from './SmartTooltip.local.methods';
import ReactTooltip from './Tooltip';

class ReactSmartTooltip extends ReactSmartTooltipMethods {
    static propTypes = {
        tooltip: PropTypes.shape({
            title: PropTypes.string,
            arrow: PropTypes.bool,
            position: PropTypes.string,
            className: PropTypes.string
        }),
        text: PropTypes.string.isRequired,
        style: PropTypes.object,
        onMouseEnter: PropTypes.func,
        onShowTooltip: PropTypes.func
    };

    static defaultProps = {
        tooltip: {
            disabled: false,
            className: ''
        },
        onMouseEnter: () => {},
        onShowTooltip: () => {}
    };

    render() {
        const props = this.props;
        const isShowTooltip = this.isEllipsisActive() && !props.tooltip.disabled;

        const style = {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            ...props.style
        };

        let content = [
            <div
                key="originalContent"
                style={style}
                onMouseEnter={this.onMouseEnter}
            >
                {props.text}
            </div>
        ];

        if (isShowTooltip) {
            if (!props.tooltip.title) {
                props.tooltip.title = props.text;
            }

            props.onShowTooltip();

            content = [
                <ReactTooltip
                    key={'originalDotTooltipWrapper'}
                    className={props.tooltip.className}
                    {...props.tooltip}
                >
                    <div
                        style={style}
                        onMouseEnter={this.onMouseEnter}
                    >
                        {props.text}
                    </div>
                </ReactTooltip>
            ];
        }

        return content;
    }
}

export default ReactSmartTooltip