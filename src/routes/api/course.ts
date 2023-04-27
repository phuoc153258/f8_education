import { ENV } from '../../config';

export const COURSE_ROUTER = {
    combined: `${ENV.apiUrl}/api/v1/course/combined`,
    analytics: `${ENV.apiUrl}/api/v1/course/analytics`,
    courseDetail: `${ENV.apiUrl}/api/v1/course/`,
    registerCourse: `${ENV.apiUrl}/api/v1/course/`,
};
