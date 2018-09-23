import React from 'react'
import {render} from 'react-dom'
import SmartTooltip from '../../src';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Smart Tooltip
                </h1>
                <div className="react-smart-tooltip_wrapper">
                    <h3>
                        Full width container
                    </h3>
                    <div className="react-smart-tooltip_content">
                        <SmartTooltip text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit" />
                    </div>
                    <pre>
                        props: text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                    </pre>
                    <h3>
                        200px width container
                    </h3>
                    <div className="react-smart-tooltip_content" style={{width: 200}}>
                        <SmartTooltip text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit" />
                    </div>
                    <pre>
                        props: text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                    </pre>
                    <h3>
                        200px width container and disabled SmartTooltip
                    </h3>
                    <div className="react-smart-tooltip_content" style={{width: 200}}>
                        <SmartTooltip text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit" tooltip={{disabled: true}}/>
                    </div>
                    <pre>
                        props: text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"; tooltip= disabled: true;
                    </pre>
                </div>
                <h1>
                    Tooltip && hocWithTooltip
                </h1>
                <div className="react-smart-tooltip_content">
                    See react-tippy <a href="https://github.com/tvkhoa/react-tippy" target="_blank">docs</a>
                </div>
            </div>
        )
    }
}

render(
    <App/>,
    document.getElementById('root')
);