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
        className: PropTypes.string,
        onMouseEnter: PropTypes.func,
        onShowTooltip: PropTypes.func
    };

    static defaultProps = {
        tooltip: {
            disabled: false
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
                className={props.className}
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
                    {...props.tooltip}
                >
                    <div
                        className={props.className}
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