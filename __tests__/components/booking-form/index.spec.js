import {useReducer} from 'react';
import {render, screen, fireEvent, renderHook} from '@testing-library/react';
import {BookingForm} from '../../../src/components';
import {initialState, reducer} from '../../../src/pages/booking';
import {act} from 'react-dom/test-utils';

const mockFunction = jest.fn();

describe('Testing BookingForm', () => {
	test('Renders the BookingForm heading', () => {
		render(
			<BookingForm times={initialState.times} selectTime={mockFunction} />
		);

		const headingElement = screen.getByText('Booking!');

		expect(headingElement).toBeInTheDocument();
	});

	test('Validates the booking reducer', async () => {
		const {result} = renderHook(() => useReducer(reducer, initialState));
		const [_, dispatch] = result.current;

		act(() => {
			dispatch({type: 'initialize_times'});
		});

		const initialTimes = result.current[0].times;

		expect(initialTimes).not.toHaveLength(0);

		act(() => {
			dispatch({type: 'update_times', payload: '2023/05/27'});
		});

		const updatedTimes = result.current[0].times;

		expect(updatedTimes).not.toEqual(initialTimes);
	});
});
