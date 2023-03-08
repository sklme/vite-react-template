import renderer from 'react-test-renderer';
import { test, describe, expect } from 'vitest';
import Root from '~/routes/root';
import { render, screen, userEvent } from '~/test/test-lib-utils';

describe('Root的信息', () => {
  const component = renderer.create(<Root></Root>);

  const tree = component.toJSON() as renderer.ReactTestRendererJSON;

  test('快照', () => {
    expect(tree).toBeDefined();
    expect(tree).toMatchSnapshot();
  });

  test('包含 我是root 的文案', () => {
    render(<Root></Root>);

    const elem = screen.queryByText('我是root');

    expect(elem).not.toBeNull();
  });

  test('触发点击事件', async () => {
    render(<Root></Root>);

    const element = screen.getByRole('button');
    screen.getByText('点击了 0 次');

    await userEvent.click(element);
    screen.getByText('点击了 1 次');
  });
});
