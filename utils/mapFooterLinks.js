import { v4 as uuid } from "uuid";

export const mapFooterLinksServices = (linksServices) => {
  return linksServices.map((linkServices) => ({
    id: uuid(),
    destination: linkServices.linkServices.destination?.url || '',
    label: linkServices.linkServices.label,
  }));
};

export const mapFooterLinksNavigate = (linksNavigate) => {
  return linksNavigate.map((linkNavigate) => ({
    id: uuid(),
    destination: linkNavigate.linkNavigate.destination?.uri || '',
    label: linkNavigate.linkNavigate.label,
  }));
};
