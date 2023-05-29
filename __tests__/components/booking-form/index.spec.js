import {BrowserRouter} from 'react-router-dom';
import {useReducer} from 'react';
import {render, screen, fireEvent, renderHook} from '@testing-library/react';
import {BookingForm} from '../../../src/components';
import {initialState, reducer} from '../../../src/pages/booking';
import {act} from 'react-dom/test-utils';

const mockFunction = jest.fn();

describe('Testing BookingForm', () => {
	test('Renders the BookingForm heading', () => {
		render(
			<BrowserRouter>
				<BookingForm times={initialState.times} updateTimes={mockFunction} />
			</BrowserRouter>
		);

		const headingElement = screen.getByText('Booking!');

		expect(headingElement).toBeInTheDocument();
	});

	test('Validates the booking reducer', () => {
		const {result} = renderHook(() => useReducer(reducer, initialState));
		const [_, dispatch] = result.current;

		act(() => {
			dispatch({type: 'initialize_times'});
		});

		const initialTimes = result.current[0].times;

		expect(initialTimes).not.toHaveLength(0);

		act(() => {
			dispatch({type: 'update_times', payload: '2023/05/28'});
		});

		const updatedTimes = result.current[0].times;

		expect(updatedTimes).not.toEqual(initialTimes);
	});

	test('Validates the booking form submission', async () => {
		render(
			<BrowserRouter>
				<BookingForm times={['17:00']} updateTimes={mockFunction} />
			</BrowserRouter>
		);

		const guestsInput = screen.getByTestId('res-guests');

		act(() => {
			fireEvent.change(guestsInput, {target: {value: '0'}});
		});

		const submitButton = screen.getByTestId('form-submit');

		act(() => {
			fireEvent.click(submitButton);
		});

		const guestsError = await screen.findByText(
			/Minimum number of guests is 1/i
		);

		expect(guestsError).toBeTruthy();
	});
});
