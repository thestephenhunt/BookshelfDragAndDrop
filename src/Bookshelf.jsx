import React, { useEffect } from 'react'
import Book from './Book'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import './styles/bookshelf.css'
import { useSelector, useDispatch } from 'react-redux'

function Bookshelf() {
    const bookList = useSelector(state => state.bookList) || []
    const dispatch = useDispatch()

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
      
        return result;
    };
    
    function onDragEnd(result) {
        if (!result.destination) {
          return;
        }

        if (result.destination.index === result.source.index) {
          return;
        }
    
        const books = reorder(
          bookList,
          result.source.index,
          result.destination.index
        );

        dispatch({ type: 'REORDER_BOOKS', payload: books });
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <h3>Books</h3>
            <Droppable droppableId="shelf" direction="horizontal">
                {provided => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="bookshelf">
                        {bookList.map((item, index) => {
                            return (<Book key={item.primary_isbn10} title={item.title} id={item.primary_isbn10} index={index} />)
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Bookshelf