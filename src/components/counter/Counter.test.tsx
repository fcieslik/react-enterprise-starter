import Counter from "./Counter";
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('<Counter />', () => {
    test('Counter mounts properly', () => {
        const counter = render(<Counter />)
        expect(counter).toBeTruthy()

        const currentCount = screen.getByTestId('current-count');
        expect(currentCount).toHaveTextContent('0');
    })
});
