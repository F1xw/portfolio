import { render } from '@testing-library/react';
import FwLandingBubble from './components/FwLandingBubble/FwLandingBubble';

test('renders landing page', () => {
  const {container} = render(<FwLandingBubble />);
  expect(container.getElementsByClassName("landingBubble__text")[0]).toBeInTheDocument();
});
