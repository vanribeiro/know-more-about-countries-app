import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Header from ".";

describe('When I click on Dark Mode Button', () => {
    it('should have switcher theme button', () => {
        const toggleTheme = jest.fn();
        render(
            <BrowserRouter>
                <Header toggleTheme={toggleTheme}/>
            </BrowserRouter>
        );
        fireEvent.click(screen.getByText('Dark Mode'));
        expect(toggleTheme).toHaveBeenCalled();
    });

});