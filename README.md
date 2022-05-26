# Parcel + Storybook/HTML

Minimal setup that allows Sass/JS to be bundled by Parcel, and consumed in Storybook.

Includes:
- Sass Modules with `@forward` and `@use`.
- Hot Module Reloading in Storybook via the `--hmr-port` flag in `parcel watch` command.
- [Differential bundling](https://parceljs.org/features/targets/#differential-bundling) for production builds.

## Commands
- `yarn start` - Watches and compiles files, for development.
- `yarn build` - Minifies files, for production.
- `yarn storybook` - Launches Storybook/HTML. Run this in a separate terminal instance from Parcel.

### Dev dependencies
- Parcel's [default Babel presets](https://parceljs.org/languages/javascript/#default-presets) are sufficient. There's no need for a `.babelrc`.
- Sass compilation is done automatically. If Parcel sees Sass files in the project, it automatically installs `@parcel/transformer-sass`.
- There is no need to install `postcss` or `autoprefixer`.
- Storybook needs `babel-loader`.
