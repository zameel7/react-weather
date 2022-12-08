export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY,
		'X-RapidAPI-Host': process.env.REACT_RAPID_API_HOST
	}
};

export const GEO_API_URL = REACT_RAPID_API_URL