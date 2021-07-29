import { render, screen } from '@testing-library/react';
import { Root } from './Root';

describe('Root ', () => {
  it('Should render Root', () => {
    render(
      <Root />
    );
    expect(screen.getByText('ts-monorepo')).not.toBeNull();
  });
});