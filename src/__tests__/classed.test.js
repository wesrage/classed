import React from 'react';
import classnames from 'classnames';
import classed from '../classed';
import renderer from 'react-test-renderer';

function createInstance(...args) {
    const Component = classed.div(...args);
    return renderer.create(<Component/>);
}

function testClassnames(...args) {
    const instance = createInstance(...args);
    const outputs = instance.toJSON().props.className;
    expect(classnames(...args)).toEqual(outputs);
}

test('works like classnames', () => {
    testClassnames('a');
    testClassnames(['a']);
    testClassnames('a', 'b');
    testClassnames('a', { b: true }, { c: false }, ['d', 'e'], 'f');
});
