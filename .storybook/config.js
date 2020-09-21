import { configure } from '@storybook/react';

configure(
    require.context('../examples', true, /\.(js|jsx|ts|tsx|md|mdx)$/),
    module,
);
