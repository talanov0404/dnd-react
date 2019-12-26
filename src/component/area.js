import React from 'react';
import List from "./list";
import Component from "./Component";
import Trash from "./Trash";

class Area extends React.Component {
    render() {
        return (
            <div className="page-wrapper">
                <div className="page-wrap">
                    <header>
                        <h1>Пример</h1>
                    </header>
                    <div className="main-container">
                        <List/>
                        <div className="set-elements">
                            <Component id='button_1' className='button' name={'String'} draggable='true' />
                            <Component id='button_2' className='button' name={'Number'} draggable='true' />
                            <Component id='button_3' className='button' name={'Layout'} draggable='true' />
                            <Trash className="trash"/>
                        </div>
                    </div>
                </div>
            </div>
        )}
}

export default Area;