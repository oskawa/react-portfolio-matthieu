export function replaceUrlParams(urlTemplate: string, params: { [key: string]: string | number }): string {
  const missingParams = [] as string[];
  const templateParams = urlTemplate.match(/:[a-zA-Z0-9]+/g) || [];
  templateParams.forEach((param) => {
    const key = param.slice(1);
    if (!(key in params)) {
      missingParams.push(key);
    }
  });
  if (missingParams.length > 0) {
    throw new Error(`Missing URL parameters: ${missingParams.join(', ')}`);
  }

  return Object.keys(params).reduce((url, key) => {
    const value = encodeURIComponent(String(params[key]));
    return url.replace(new RegExp(`:${key}(?=/|$)`, 'g'), value);
  }, urlTemplate);
}