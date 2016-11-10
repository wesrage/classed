import React from 'react';
import classnames from 'classnames';

const classed = {};
const factory = tagName => classes => {
    const component = props => {
        const className = classnames(classes, props.className);
        return React.createElement(tagName, { ...props, className });
    };
    component.displayName = `classed.${tagName}(${classes})`;
    return component;
};

Object.keys(React.DOM).forEach(tagName => {
    classed[tagName] = factory(tagName);
});

export default classed;
