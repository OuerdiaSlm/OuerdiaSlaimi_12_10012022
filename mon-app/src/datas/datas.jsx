import axios from 'axios';

/**
 * Get user infos firstName
 *
 * @param {string} id User id
 * @return {object} Response
 */
export const getUserInfos = async (id) => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}`);
		return res.data.data.userInfos.firstName
	} catch (e) {
		console.log(e);
	}
};


/**
 * Get user activity 
 *
 * @param {string} id User id
 * @return {object} Response
 */
export const getUserActivity = async (id) => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}/activity`);
		return res.data.data.sessions
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user average session 
 *
 * @param {string} id User id
 * @return {object} Response
 */
export const getUserAverageSessions = async (id) => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
		return res.data.data.sessions
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user performance 
 *
 * @param {string} id User id
 * @return {object} Response
 */
export const getUserPerformance = async (id) => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}/performance`);
		return res.data.data.data
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user score 
 *
 * @param {string} id User id
 * @return {object} Response
 */
export const getScoreInfos = async (id) => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}`);
		return res.data.data.todayScore
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user keyData 
 *
 * @param {string} id User id
 * @return {object} Response
 */
 export const getApportsInfos = async (id) => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}`);
		return res.data.data.keyData
	} catch (e) {
		console.log(e);
	}
};