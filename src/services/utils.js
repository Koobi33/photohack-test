export const callMethod = async (name, options) => {
    const queryString = Object
      .entries(options)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');

    return `callback:${name}?${queryString}`;
};
