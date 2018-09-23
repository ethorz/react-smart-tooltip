import React from 'react'
import {render} from 'react-dom'
import SmartTooltip from '../../src';

class App extends React.Component {
    render() {
        return (
            <div style={{width: 200}}>
            <SmartTooltip text={'wegfsdfsdf sdf sdf sdf sdf sdf dsf sdf sdf dsf dsf'} />
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById('root')
);