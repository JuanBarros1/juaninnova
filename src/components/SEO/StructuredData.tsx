import { Helmet } from 'react-helmet-async';
import { APP_CONFIG } from '@/lib/constants';

interface StructuredDataProps {
  type?: 'Person' | 'Organization' | 'WebPage' | 'Article';
  data?: Record<string, unknown>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({
  type = 'Person',
  data = {}
}) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
    };

    switch (type) {
      case 'Person':
        return {
          ...baseData,
          name: 'Juan',
          jobTitle: 'Web Developer',
          description: APP_CONFIG.SITE_DESCRIPTION,
          url: APP_CONFIG.SITE_URL,
          sameAs: Object.values(APP_CONFIG.SOCIAL_LINKS),
          knowsAbout: [
            'Web Development',
            'React',
            'JavaScript',
            'TypeScript',
            'UI/UX Design',
            'Frontend Development',
            'Responsive Design'
          ],
          serviceType: 'Web Development',
          areaServed: 'Worldwide',
          image: `${APP_CONFIG.SITE_URL}/profile-image.jpg`,
          ...data
        };

      case 'Organization':
        return {
          ...baseData,
          name: APP_CONFIG.SITE_NAME,
          description: APP_CONFIG.SITE_DESCRIPTION,
          url: APP_CONFIG.SITE_URL,
          logo: `${APP_CONFIG.SITE_URL}/logo.png`,
          sameAs: Object.values(APP_CONFIG.SOCIAL_LINKS),
          ...data
        };


      case 'WebPage':
        return {
          ...baseData,
          name: APP_CONFIG.SITE_NAME,
          description: APP_CONFIG.SITE_DESCRIPTION,
          url: APP_CONFIG.SITE_URL,
          isPartOf: {
            '@type': 'WebSite',
            name: APP_CONFIG.SITE_NAME,
            url: APP_CONFIG.SITE_URL
          },
          ...data
        };

      default:
        return { ...baseData, ...data };
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};