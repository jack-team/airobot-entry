export const documentLoaded = (listener: () => void) => {
  document.addEventListener('DOMContentLoaded', listener);
};

export const getElementSize = (el: Element) => {
  const width = el.getAttribute('width') || 640;
  const height = el.getAttribute('height') || 600;
  return { width, height };
}

export const getLocation = () => {
  return new Promise<any>((resolve, reject) => {
    const l = window.navigator.geolocation;
    l.getCurrentPosition((result) => {
      resolve(result.coords.toJSON());
    }, async (error) => {
      reject(error);
    });
  });
}