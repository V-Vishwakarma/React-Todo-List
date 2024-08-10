
import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {

    const { todos } = props
    // const { handleDeleteTodo } = props


    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard
                        // handleDeleteTodo={handleDeleteTodo}  // we can also write this as {...props}=> it is used when you want pass all the props without mentioning any of the names and you do not have to const the handleDeleteTodo
                        {...props}
                        index={todoIndex}
                        key={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
