import Axios from './axios';
import axios from 'axios';
import cookie from 'js-cookie';

export function convertToQueryString(params?: any) {
    if (typeof params == 'string') return params;
    let paramString = '';
    Object.keys(params).forEach((key) => {
        if (params[key] !== '') {
            paramString += key + '=' + params[key] + '&';
        }
    });
    paramString = paramString.slice(0, -1);
    return paramString;
}

export const fetch = {
    async get(url: string, params?: any, token?: any) {
        let strURL = '';
        return new Promise(async (res, rej) => {
            let queryString = '';
            let response: any;
            if (params) {
                queryString = convertToQueryString(params);
            }

            if (params) {
                strURL = url + '?' + queryString;
            } else {
                strURL = url;
            }

            try {
                if (token) {
                    response = await axios({
                        method: 'get',
                        url: url,
                        data: {},
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                } else {
                    response = Axios.get(strURL);
                }

                return res(response);
            } catch (error) {
                console.log(error);
            }
        });
    },

    async get1(url: string, token?: any) {
        return new Promise(async (res, rej) => {
            let response: any;

            try {
                if (token) {
                    response = await axios({
                        method: 'get',
                        url: url,
                        data: {},
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                } else {
                    response = Axios.get(url);
                }

                return res(response);
            } catch (error) {
                console.log(error);
            }
        });
    },

    async put(url: string, params?: any) {
        return new Promise((res, rej) => {
            try {
                let response = Axios.put(url, params);
                return res(response);
            } catch (error) {
                rej(error);
            }
        });
    },

    async put1(url: string, params?: any) {
        let strURL = '';
        return new Promise((res, rej) => {
            let queryString = '';
            if (params) {
                queryString = convertToQueryString(params);
            }

            if (params) {
                strURL = url + '?' + queryString;
            } else {
                strURL = url;
            }
            try {
                let response = Axios.put(strURL, params);
                return res(response);
            } catch (error) {
                rej(error);
            }
        });
    },

    async patch(url: string, params?: any) {
        return new Promise((res, rej) => {
            try {
                let response = Axios.patch(url, params);
                return res(response);
            } catch (error) {
                rej(error);
            }
        });
    },

    async post(url: string, params?: any) {
        return new Promise((res, rej) => {
            try {
                let response = Axios.post(url, params);
                return res(response);
            } catch (error) {
                rej(error);
            }
        });
    },

    async postFile(url: string, formData?: any) {
        const token = cookie.get('token') || null;
        return new Promise((res, rej) => {
            try {
                let response = axios.post(url, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                return res(response);
            } catch (error) {
                rej(error);
            }
        });
    },

    async putFile(url: string, formData?: any) {
        const token = cookie.get('token') || null;
        return new Promise((res, rej) => {
            try {
                let response = axios.put(url, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                return res(response);
            } catch (error) {
                rej(error);
            }
        });
    },

    async delete(url: string, params?: any) {
        return new Promise(async (res, rej) => {
            try {
                let response = Axios.delete(url, { data: params });

                return res(response);
            } catch (error) {
                rej(error);
            }
        });
    },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function fmt<TObject>(text: string, myHash: any) {
    let key;
    for (key in myHash) {
        text = text.replace(new RegExp('\\{' + key + '\\}', 'gm'), myHash[key]);
    }
    return text;
}
