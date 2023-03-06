export default function getJSONProperty(json: Record<string, any>, property: string | string[]): any {
  if (Array.isArray(property)) {
    return property.reduce((obj: Record<string, any>, prop: string) => obj[prop], json);
  }
  return json[property];
  }
 