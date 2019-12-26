import React from 'react';

class ComponentContent extends React.Component {
    render() {
        return (
            <div
                id={this.props.id}
                onDrop={this.dropButton}
                onDragOver={this.dragOver}
                onDragStart={this.dragStart}
                draggable={true}
                className={this.props.class}
                style={{display: 'none'}}>
                {this.props.class === 'string' && <div><label>Комментарий для Строки </label><input/></div>}
                {this.props.class === 'number' && <div><label>Комментарий для Числа </label><input/></div>}
            </div>
        )}
    dragStart = (event) => {
        const target = event.target;
        event.dataTransfer.setData('card_id', target.id);
        this.setState({count: this.state.count + 1});
    }
    dropButton = (event) => {
        event.preventDefault();
        const card_id = event.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        if(event.target.closest('.button') && card.closest('.place-zone')) {
            const element = card.children[1].cloneNode(true);
            event.target.appendChild(element);
        }
    }
    dragOver = (event) => {
        event.preventDefault();
    }
}

export default ComponentContent;