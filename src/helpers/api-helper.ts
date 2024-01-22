export const getStrapiURL = (path = "") => {
    return `${
        process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://strapi-webservice-cdup.onrender.com"
        }${path}`;
}