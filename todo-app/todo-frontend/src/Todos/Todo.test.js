import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Todo from "./Todo"

const todo = {
    text: 'This is a test todo',
    done: false
}

test('Check Todo component content & event handler calls', async () => {
    const mockHandler = jest.fn()
    const mockHandlerDelete = jest.fn()

    render(
        <Todo
            todo={todo}
            onClickDelete={mockHandlerDelete}
            onClickComplete={mockHandler}
        />
    ) 

    expect(screen.getByText('This is a test todo')).toBeInTheDocument()
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
    expect(screen.getByText('Set as done')).toBeInTheDocument()

    const user = userEvent.setup()
    
    await user.click(screen.getByText('Set as done'))

    expect(mockHandler.mock.calls).toHaveLength(1)
})