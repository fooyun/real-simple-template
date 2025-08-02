// 使用双指针实现模板引擎
export type ObjectData = Record<string, any>;

export const renderTemplate = (template: string = '', data: ObjectData = {}) => {
  let start = 0;
  let result = '';

  while (start < template.length) {
    if (template[start] === '$' && template[start + 1] === '{') {
      let end = start + 2;
      while (template[end] !== '}' && end < template.length) {
        end++;
      }
      if (end < template.length && template[end] === '}') {
        const key = template.slice(start + 2, end).trim();
        result += getObjectValue(data, key, '');
        start = end + 1;
      } else {
        // No closing brace found, treat as literal
        result += template.slice(start, end);
        start = end;
      }
    } else {
      result += template[start];
      start++;
    }
  }

  return result;
};

export const getObjectValue = (obj: ObjectData, propertyPath: string, defaultValue: any) => {
  const keys = propertyPath.split('.');
  const value = keys.reduce((currentObj, key) => {
    return currentObj?.[key];
  }, obj);
  return value ?? defaultValue;
};
