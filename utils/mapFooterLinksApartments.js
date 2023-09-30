import { v4 as uuid } from "uuid";

export const mapFooterLinksFaq = (linksFaq) => {
  return linksFaq.map((linkFaq) => ({
    id: uuid(),
    destination: linkFaq.linkFaq.destination?.uri,
    label: linkFaq.linkFaq.label,
  }));
};