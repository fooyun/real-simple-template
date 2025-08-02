import { describe, it, expect } from 'vitest';

import { renderTemplate, getObjectValue } from '@/engine';

describe('getObjectValue', () => {
  it('should return the value of a nested property', () => {
    const obj = { user: { name: 'John', age: 30 } };
    const result = getObjectValue(obj, 'user.name', '');
    expect(result).toBe('John');
  });

  it('should return the default value for a missing property', () => {
    const obj = { user: { name: 'John' } };
    const result = getObjectValue(obj, 'user.age', 0);
    expect(result).toBe(0);
  });

  it('should return the default value for an invalid property path', () => {
    const obj = { user: { name: 'John' } };
    const result = getObjectValue(obj, 'user.address.city', 'Unknown');
    expect(result).toBe('Unknown');
  });
});

describe('renderTemplate', () => {
  it('should render template with given data', () => {
    const template = 'Hello, ${name}!';
    const data = { name: 'John' };
    const result = renderTemplate(template, data);
    expect(result).toBe('Hello, John!');
  });

  it('should handle nested properties', () => {
    const template = 'Hello, ${user.name}!';
    const data = { user: { name: 'Jane' } };
    const result = renderTemplate(template, data);
    expect(result).toBe('Hello, Jane!');
  });

  it('should handle missing data', () => {
    const template = 'Hello, ${name}!';
    const data = {};
    const result = renderTemplate(template, data);
    expect(result).toBe('Hello, !');
  });

  it('should handle multiple placeholders', () => {
    const template = 'Hello, ${name} ${lastName}!';
    const data = { name: 'John', lastName: 'Doe' };
    const result = renderTemplate(template, data);
    expect(result).toBe('Hello, John Doe!');
  });

  it('should return the template as is if no placeholders are found', () => {
    const template = 'Hello, World!';
    const data = {};
    const result = renderTemplate(template, data);
    expect(result).toBe('Hello, World!');
  });

  it('should handle empty template', () => {
    const template = '';
    const data = {};
    const result = renderTemplate(template, data);
    expect(result).toBe('');
  });

  it('should handle not closing placeholders', () => {
    const template = 'Hello, ${name!';
    const data = { name: 'John' };
    const result = renderTemplate(template, data);
    expect(result).toBe('Hello, ${name!');
  });

  it('should handle not opening placeholders', () => {
    const template = 'Hello, name}!';
    const data = { name: 'John' };
    const result = renderTemplate(template, data);
    expect(result).toBe('Hello, name}!');
  });

  it('should handle empty placeholders', () => {
    const template = 'Hello, ${}!';
    const data = {};
    const result = renderTemplate(template, data);
    expect(result).toBe('Hello, !');
  });

  it('should handle placeholders with spaces', () => {
    const template = 'Hello, ${ name }!';
    const data = { name: 'John' };
    const result = renderTemplate(template, data);
    expect(result).toBe('Hello, John!');
  });

  it('should handle invalid template syntax', () => {
    const template = 'Hello, ${name ${age}!';
    const data = { name: 'John', age: 30 };
    const result = renderTemplate(template, data);
    expect(result).toBe('Hello, !');
  });
});
