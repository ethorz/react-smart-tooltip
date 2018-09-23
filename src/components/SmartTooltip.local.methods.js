import React from 'react';

class ReactSmartTooltipMethods extends React.Component {
    state = {
        offsetWidth: 0,
        scrollWidth: 0
    };
    onMouseEnter = (e) => {
        const props = this.props;

        props.onMouseEnter(e);

        this.setState({
            offsetWidth: e.target.offsetWidth,
            scrollWidth: e.target.scrollWidth
        });
    };
    isEllipsisActive = () => this.state.offsetWidth < this.state.scrollWidth;
}

export default ReactSmartTooltipMethods