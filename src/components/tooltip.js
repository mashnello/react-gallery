import React, { Component, PropTypes } from 'react';

class Tooltip extends Component {
    static propTypes = {
        tooltipText: PropTypes.string.isRequired
    }

    render() {
        const { tooltipText } = this.props;
        return (
            <div className='tooltip-content'>
                {tooltipText}
            </div>
        );
    }
}

export default Tooltip;