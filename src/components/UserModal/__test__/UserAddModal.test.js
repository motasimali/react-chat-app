import { render, screen } from '@testing-library/react'
import React from 'react'
import UserAddModal from '../UserAddModal';

test('Renders User Add Modal', () => {
    render(<UserAddModal />);
    const text = screen.getByText(/Add Your User/i)
    expect(text).toBeInTheDocument()
});
