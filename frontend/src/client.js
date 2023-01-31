import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "l6yuavcj",
  dataset: "production",
  apiVersion: "2022-01-16",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}
