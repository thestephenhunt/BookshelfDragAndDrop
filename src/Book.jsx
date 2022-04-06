import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './styles/Book.css'

function Book(props) {
    const { title, innerRef, id, index } = props

    return (
        <Draggable key={id} draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="book"
                >
                    {title}
                </div>
            )}
        </Draggable>
    )
}

export default Book