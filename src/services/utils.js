export const callMethod = async (name, options) => {
  return new Promise((resolve, reject) => {
    const queryString = Object
      .entries(options)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');

    const url = `callback:${name}?${queryString}`;

    const frame = document.createElement('iframe');

    frame.style.display = 'none';
    frame.src = url;
    document.documentElement.appendChild(frame);

    setTimeout( () => {
      document.documentElement.removeChild(frame);
    }, 0);
  });
};
