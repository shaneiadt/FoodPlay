import App from './App.svelte';
import { render } from '@testing-library/svelte';

describe('App Component', () => {
  it('renders correctly', async () => {
    const { container } = render(App);

    expect(container).toBeTruthy();
  });
});
