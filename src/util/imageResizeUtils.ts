const DEFAULT_RESOLUTION = "300x";

export const resizeImageUrl = (
  imageUrl: string = '',
  resolution: string = DEFAULT_RESOLUTION
): string => {
  const urlParts = imageUrl.split("/");
  const domain = urlParts[2];
  const path = urlParts.slice(3).join("/");
  const resizedUrl = `https://${domain}/resize/${resolution}/${path}`;
  return resizedUrl;
};
