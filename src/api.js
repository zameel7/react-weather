export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
	}
};

export const GEO_API_URL = process.env.REACT_APP_RAPID_API_URL

export const WEATHER_API_URL = process.env.WEATHER_API_URL