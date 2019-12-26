import React from 'react';

class List extends React.Component {
    render() {
        return (
            <div
                onDrop={this.dropBoard}
                onDragOver={this.dragOver}
                onDragStart={this.dragStart}
                className="place-zone">
            </div>
        )}
    dragStart = (event) => {
        const target = event.target;
        event.dataTransfer.setData('card_id', target.id);
    }
    dropBoard = (event) => {
        event.preventDefault();
        const card_id = event.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        if (event.target.closest('.place-zone') && card.closest('.button')) {
            const element = card.children[1].cloneNode(true);
            element.style.display = 'block';
            event.target.appendChild(element);
        }
        if (event.target.closest('.place-zone') && card.closest('.place-zone') && event.target.id !== card.id) {
            event.target.appendChild(card);
        }
    }
    dragOver = (event) => {
        event.preventDefault();
    }
}

export default List;