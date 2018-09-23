import React from 'react';
import {Tooltip, withTooltip} from 'react-tippy';
import 'react-tippy/dist/tippy.css';

class ReactTooltip extends React.Component {
    render() {
        const {children, ...props} = this.props;

        if (!props.title && props.html === null) {
            return children;
        }
        return (
            <Tooltip {...props}>
                {children}
            </Tooltip>
        )
    }
}

ReactTooltip.propTypes = Tooltip.propTypes;
ReactTooltip.defaultProps = {
    ...Tooltip.defaultProps,
    position: 'bottom',
    arrow: true,
    html: null
};

export const hocWithTooltip = withTooltip;
export default ReactTooltip