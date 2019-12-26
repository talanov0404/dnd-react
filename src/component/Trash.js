import React from 'react';

class Trash extends React.Component {
    render() {
        return (
            <div
                onDrop={this.dropTrash}
                onDragOver={this.dragOver}
                className={this.props.className}><p>Trash</p>
            </div>
        )}
    dropTrash = (event) => {
        event.preventDefault();
        const card_id = event.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        if (event.target.closest('.trash') && card.closest('.place-zone')) {
            card.remove();
        }
    }
    dragOver = (event) => {
        event.preventDefault();
    }
}

export default Trash;