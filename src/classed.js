import React from 'react';
import classnames from 'classnames';

const classed = {};
const factory = tagName => classes => props => {
    const className = classnames(classes, props.className);
    return React.createElement(tagName, { ...props, className });
};

Object.keys(React.DOM).forEach(tagName => {
    classed[tagName] = factory(tagName);
});

export default classed;
