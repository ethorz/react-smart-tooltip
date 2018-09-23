import React from 'react'
import {render} from 'react-dom'
import SmartTooltip from '../../src';

import highlight from 'highlight.js/lib'
import 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/dracula.css'
import '../css/styles.css';

class App extends React.Component {
    componentDidMount() {
        highlight.initHighlightingOnLoad();
    }

    render() {
        return (
            <div>
                <h1 className="react-smart-tooltip_title">
                    Smart Tooltip
                </h1>
                <div className="react-smart-tooltip_wrapper">
                    <h3>
                        Full width container
                    </h3>
                    <div className="react-smart-tooltip_content">
                        <pre><code className="javascript">
                            {`<SmartTooltip
    text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
/>`}</code></pre>
                        <SmartTooltip
                            text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"/>
                    </div>
                    <h3>
                        200px width container
                    </h3>
                    <pre><code className="javascript">
                            {`<SmartTooltip
    text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
/>`}</code></pre>
                    <div className="react-smart-tooltip_content" style={{width: 200}}>
                        <SmartTooltip
                            text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"/>
                    </div>
                    <h3>
                        200px width container and disabled SmartTooltip
                    </h3>
                    <pre><code className="javascript">
                            {`<SmartTooltip
    text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
    tooltip={{disabled: true}}
/>`}</code></pre>
                    <div className="react-smart-tooltip_content" style={{width: 200}}>
                        <SmartTooltip
                            text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                            tooltip={{disabled: true}}/>
                    </div>
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

render(<App/>, document.getElementById('root'));