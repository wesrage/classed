import React, { Component } from 'react';
import classnames from 'classnames';

const classed = {};
const factory = tagName => (...classes) => {
    return class WrappedComponent extends Component {
        static displayName = `Classed.${tagName}`;
        render() {
            const { className, innerRef, ...props } = this.props;
            const newProps = {
                ...props,
                className: classnames(classnames(...classes), className),
            };
            if (innerRef) {
                newProps.ref = innerRef;
            }
            return React.createElement(tagName, newProps);
        }
    }
};

Object.keys(React.DOM).forEach(tagName => {
    classed[tagName] = factory(tagName);
});

export default classed;
