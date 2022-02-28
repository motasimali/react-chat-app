import { render, screen } from '@testing-library/react'
import React from 'react'
import TopHeaderComponent from '../TopHeader';

test('Renders Top Header Text', () => {
    render(<TopHeaderComponent text={"Header Text"} />);
    const text = screen.getByText(/Header Text/i)
    expect(text).toBeInTheDocument()
});
