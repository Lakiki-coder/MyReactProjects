import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../../src/components/Navbar'

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    expect(screen.getByText(/home/i)).toBeInTheDocument()
  })
})