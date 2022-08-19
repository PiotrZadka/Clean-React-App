import {render, screen } from '@testing-library/react'
import { App } from './App'

it('renders hello world', () =>{
    render(<App/>)
    const ptag = screen.getByText('Hello World')
    expect(ptag).toBeInTheDocument();
})