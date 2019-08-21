import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'zdui0ur5',
	dataset: 'production',
	useCdn: false
});

export default client;
