module.exports = {
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    // Adding 'dist' folder allows access to Parcel-bundled CSS/JS in 'preview-head.html'.
    staticDirs: ['../public', '../dist'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-a11y',
        {
            name: '@storybook/addon-essentials',
            options: {
                actions: false,
                backgrounds: false,
            }
        }
    ]
  }
