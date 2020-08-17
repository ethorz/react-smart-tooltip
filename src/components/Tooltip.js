import React from 'react'
import { Tooltip as ReactTippy, withTooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

export const Tooltip = ({ children, ...props }) => {
    if (!props.title && props.html === null) {
        return children
    }
    return <ReactTippy {...props}>{children}</ReactTippy>
}

Tooltip.propTypes = ReactTippy.propTypes
Tooltip.defaultProps = {
    ...ReactTippy.defaultProps,
    position: 'bottom',
    arrow: true,
    html: null,
}

export const hocWithTooltip = withTooltip
