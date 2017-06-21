import React from 'react';
import classnames from 'classnames';
import tagNames from './utils/tagNames';

const classed = {};
const factory = tagName => (...classes) => {
    return class WrappedComponent extends React.Component {
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

tagNames.forEach(tagName => {
    classed[tagName] = factory(tagName);
});

export default classed;
