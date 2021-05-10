import 'react-native';
import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';
import {Movies} from '../src/Screens';
import {useDispatch} from 'react-redux';
import {api_key, base_url} from '../src/Services';
import { MovieCard } from '../src/Components/MovieCard';

it('Movies render correctly', () => {
  useDispatch.mockReturnValue(jest.fn());
  render(<Movies />);
});

test('should api success', async () => {
  const response = await fetch(`${base_url}/movie/upcoming?${api_key}&page=1`);
  
  expect(response.status).toEqual(200);
});
