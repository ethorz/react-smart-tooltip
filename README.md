# React Smart Tooltip
React Smart Tooltip usage [react-tippy](https://github.com/tvkhoa/react-tippy).

[![npm install react-smart-tooltip](https://nodei.co/npm/react-smart-tooltip.png?mini=true)](https://npmjs.org/package/react-smart-tooltip/)

[Demo](https://ethorz.github.io/react-smart-tooltip)

## Usage

```javascript
import SmartTooltip from 'react-smart-tooltip'; // by default import SmartTooltip
//or
import SmartTooltip, { Tooltip, hocWithTooltip } from 'react-smart-tooltip'; // Tooltip - react-tippy, hocWithTooltip - react-tippy HOC. See docs of react-tippy

render() {
    <div> // wrapper with width in px or %
	    <SmartTooltip text="Text" /> // Text that should apply ellipsis styles and while hovering, display a hint with the full text
	    <Tooltip {...props}/>
	    //or
	    <Tooltip {...props}>
	        <div>Hover me</div>
	    </Tooltip>
	</div>
}
```

## Props Tooltip

See [react-tippy props](https://github.com/tvkhoa/react-tippy#props).

## Props SmartTooltip

|Setting|Default|Options|Role|
|--- |--- |--- |--- |
|tooltip|disabled: false|See [react-tippy props](https://github.com/tvkhoa/react-tippy#props).
|text|undefined|string|Text that should apply ellipsis styles and while hovering, display a hint with the full text
|style|whiteSpace: 'nowrap'; textOverflow: 'ellipsis'; overflow: 'hidden'|object|Styles for overwriting the standard styles
|className|---|string|Classname for content, you can use with style prop
|onMouseEnter|---|function|On mouse enter handler
|onShowTooltip|---|function|Callback after on mouse enter then tooltip show


## Contributing

If you want to contribute to the development of a component - leave the issues or PR.

Thank you