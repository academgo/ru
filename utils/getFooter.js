import { mapFooterLinksFaq, mapFooterLinksServices, mapFooterLinksNavigate } from "./mapFooterLinks";

export const getFooter = async () => {
  const params = {
    query: `
      query FooterQuery {
        acfOptionsFooter {
          footer {
            linksNavigate {
              linkNavigate {
                label
                destination {
                  ... on Page {
                    uri
                  }
                }
              }
            }
            logo {
              sourceUrl
            }
            linksServices {
              linkServices {
                destination {
                  url
                }
                label
              }
            }
          }
        }
      }
    `,
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  const { data } = await response.json();

  return {
    logo: data.acfOptionsFooter.footer.logo.sourceUrl,
    linksNavigate: mapFooterLinksNavigate(data.acfOptionsFooter.footer.linksNavigate),
    linksServices: mapFooterLinksServices(data.acfOptionsFooter.footer.linksServices),
  };
}