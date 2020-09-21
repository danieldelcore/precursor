<p align="center">
  <img src="assets/logo-large-alt.png" alt="precursor Logo" />
</p>

# Precursor

Start your projects with a minimalistic, composable, lightweight and themable component library.

## Layout & Composability 💎

## Theming 💅

## Iconography 👾

Precursor does not export its own set of iconography in order to try to remain agnostic.
However, it does make use of a few icons from the wonderful [Feather Icons](https://feathericons.com/) project.

## SSR 🤖

Under the hood, precursor uses [trousers 👖](https://github.com/danieldelcore/trousers) for styling. Trousers requires that you do some configuration to enable SSR. Please follow the guide there for more information: [Server side rendering with trousers](https://github.com/danieldelcore/trousers#server-side-rendering-ssr-)

## Folder structure 📂

Precursor uses [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) as the base of the monorepo. Each component can be found as it's own stand-alone package, allowing installation of a sub-set of the components you might need for your project.

Components are categorized into several 'groups':

-   `packages/common`: Shared utilities
-   `packages/components`: Stand-alone components
-   `packages/elements`: Primitive components intended for use in new compositions
-   `packages/layout`: Primitives for arranging components together
-   `packages/theming`: Themes, tokens and other APIs indended for customization

## Inspired by ❤️

-   [Atlassian Design System](https://atlassian.design/)
-   [chakra-ui](https://chakra-ui.com/)
-   [zeit.co/design/](https://zeit.co/design/)
-   [Github Primer](https://primer.style/components)
-   [braid design system](https://seek-oss.github.io/braid-design-system)
-   [react-ui.dev](https://react-ui.dev)
-   [fannypack](https://v5.fannypack.style/)

## Built with...

-   [trousers 👖](https://github.com/danieldelcore/trousers)
-   [changesets 🦋](https://github.com/atlassian/changesets)
-   [manypkg ☔️](https://github.com/Thinkmill/manypkg)
