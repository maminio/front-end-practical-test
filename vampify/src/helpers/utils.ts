export const toBase64 = (file: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export const truncate = (str: string, max = 10): string | null => {
  if (!str?.length) {
    return null;
  }
  const array = str.trim().split(' ');
  const ellipsis = array.length > max ? '...' : '';

  return array.slice(0, max).join(' ') + ellipsis;
};

export const placeUrl = (url: string, params: any): string => {
  let reference = url;
  Object.keys(params).map((key: string) => {
    if (reference.includes(`:${key}`)) {
      reference = reference.replace(`:${key}`, params[key]);
    }
  });
  return reference;
};
