export const getWebpVariant = (src: string) => src.replace(/\.png$/i, '.webp');

export const hasWebpVariant = (src: string) => /\.png$/i.test(src);
