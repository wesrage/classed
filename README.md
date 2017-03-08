# classed
Create reusable className wrappers for DOM elements in React

```js
npm install --save classed
```

## Usage
```js
import classed from 'classed';

const MyComponent = classed.h1('my-css-class');

// This:
<MyComponent>Hello World</MyComponent>

// is equivalent to this:
<h1 className="my-css-class">Hello World</h1>
```

1. Props can be passed down as with any other React components.
2. Besides `h1`, you can use any of the components available from `React.DOM`.
3. Any valid arguments to [classnames](https://github.com/JedWatson/classnames) are valid here.

## Why
This extremely simple package was inspired by [styled-components](https://github.com/styled-components/styled-components), which is a wonderful solution for collocating components with their styles using real CSS. However, not all teams are willing or able to adopt a CSS-in-JS approach in their existing projects. `classed` gives teams with large existing CSS code bases an easy way to tidy up the style-specific elements in their React render methods to make their component hierarchies easier to read.
