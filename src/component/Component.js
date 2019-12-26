import React from 'react';
import ComponentContent from "./ComponentContent";

class Component extends React.Component {
    constructor (props) {
        super(props);
        this.state = {count: 0};
    }
    render() {
        return (
            <div
                id={this.props.id}
                className={this.props.className}
                draggable={this.props.draggable}
                onDragStart={this.dragStart}
                onDragOver={this.dragOver}>
                <p>{this.props.name}</p>
                <ComponentContent id={this.props.name.toLowerCase() + '_' + this.state.count} class={this.props.name.toLowerCase()}/>
            </div>
        )}
    dragStart = (event) => {
        const target = event.target;
        event.dataTransfer.setData('card_id', target.id);
        this.setState({count: this.state.count + 1});
    }

    dragOver = (event) => {
        event.stopPropagation();
    }
}

export default Component;