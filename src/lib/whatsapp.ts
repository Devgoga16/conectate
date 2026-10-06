import { site } from "../data/site";

export const waLink = (msg: string, number: string = site.whatsapp) =>
  `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
