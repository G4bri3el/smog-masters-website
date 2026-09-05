export const site = {
  businessName: 'Smog Masters Smog Check',
  shortName: 'Smog Masters',
  serviceName: 'Smog Check',
  address: {
    street: '725 W Gardena Blvd',
    city: 'Gardena',
    state: 'CA',
    zip: '90247',
    country: 'United States',
    countryCode: 'US',
  },
  phoneDisplay: '+1 (213) 352-8483',
  phoneInternational: '+1 (213) 352-8483',
  phoneHref: 'tel:+12133528483',
  domain: 'smogmasterssmogcheck.com',
  siteUrl: 'https://smogmasterssmogcheck.com',
  email: 'smogmasterscheck@gmail.com',
  showEmail: false,
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=725%20W%20Gardena%20Blvd%2C%20Gardena%2C%20CA%2090247',
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=725%20W%20Gardena%20Blvd%2C%20Gardena%2C%20CA%2090247&output=embed',
  socialLinks: [],
  seo: {
    title: 'Smog Masters Smog Check | Gardena, CA',
    description:
      'Smog Masters Smog Check provides vehicle emissions testing services at 725 W Gardena Blvd in Gardena, California. Call +1 (213) 352-8483 for more information.',
    keywords: [
      'Smog Check Gardena CA',
      'Smog Check in Gardena',
      'Vehicle Emissions Testing Gardena',
      'Smog Testing Gardena California',
    ],
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export const addressLines = [
  site.address.street,
  `${site.address.city}, ${site.address.state} ${site.address.zip}`,
] as const;

export const currentYear = new Date().getFullYear();

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.businessName,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: site.address.countryCode,
  },
  telephone: site.phoneInternational,
};

