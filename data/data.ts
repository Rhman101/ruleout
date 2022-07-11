import axios from 'axios';

type CreateUserResponse = {
    email?: string;
    token?: string;
    error?: string;
}

let url = 'https://ruleout-backend.glitch.me';

const createUser = async (name: string, email: string, password: string) => {
    try {
        const { data } = await axios.post<CreateUserResponse>(`${url}/person`, {
            name,
            email,
            password
        })
        return data;
    } catch (e) {
        console.log('ERROR IN data.createUser');
        console.log('name email', { name, email });
        console.log(e);
        return { error: "Please try again." }
    }
}

const logoutUser = async (token: string) => {
    try {
        const response = await axios.post(`${url}/person/logout`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.log('ERROR IN data.logoutUser');
        console.log('token', { token });
        console.log(e);
        return false;
    }
}

type LoginUserResponse = {
    name?: string;
    email?: string;
    token?: string;
    error?: string;
}

const loginUser = async (email: string, password: string) => {
    try {
        const { data } = await axios.post<LoginUserResponse>(`${url}/person/login`, {
            email,
            password
        })
        return data
    } catch (e) {
        console.log('ERROR IN data.loginUser');
        console.log('name email', { email, password });
        console.log(e);
        return { error: "Please try again." }
    }
}

const pushCompletedActivity = async (token: string, email: string, grade: string, activityName: string) => {
    try {
        const response = await axios.post(`${url}/activity`, {
            gradeName: grade,
            activityName, 
            email
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (response.status === 200) {
            return response;
        } else {
            return false;
        }
    } catch (e) {
        console.log('ERROR IN data.pushCompletedActivity');
        console.log('token', { token, email, grade, activityName });
        console.log(e);
        return false;
    }
}

interface completedActivities {
    name: string;
    gradeName: string;
}

const getCompletedActivities = async (token: string) => {
    try {
        const { data } = await axios.get<completedActivities[]>(`${url}/activity`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data;

    } catch (e) {
        console.log('ERROR IN data.getCompletedActivities');
        console.log('token', { token });
        console.log(e);
        return [];
    }
}

const data = { createUser, logoutUser, loginUser, pushCompletedActivity, getCompletedActivities };

export default data;