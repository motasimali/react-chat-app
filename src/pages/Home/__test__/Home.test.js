import { render, screen } from '@testing-library/react'
import Home from '../Home'
import React from 'react'

test('renders learn react link', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Home Page/i)
    expect(linkElement).toBeInTheDocument("Home Page")
});
