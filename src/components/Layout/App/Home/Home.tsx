import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import SlideShow from './SlideShow/SlideShow';
import ScrollList from './ScrollList/ScrollList';
import { scrollListData, commonItemPostData, commonItemVideoData } from '../../../../data';
import CourseService from '../../../../services/course';
import { ENV } from '../../../../config';

const Home = (): JSX.Element => {
    const [analytics, setAnalytics] = useState<any>({});
    const [courses, setCourses] = useState<any>([]);
    const [coursesPro, setCoursesPro] = useState<any>([]);

    const fetchData = async () => {
        try {
            const courseResponse: any = await CourseService.combined({});
            const analyticsResponse: any = await CourseService.analytics({});

            if (courseResponse?.data?.data) {
                const newCourses = courseResponse?.data?.data.freeCourses.map((item: any) => {
                    if (item.isRegister) item.btnContent = 'Tiếp tục học';
                    else item.btnContent = 'Xem khóa học';
                    item.backgroundImage = `${ENV.apiUrl}/api/v1/file/${item.image}`;
                    item.href = `/courses/${item.slug}`;
                    return item;
                });
                setCourses(newCourses);

                const newCoursesPro = courseResponse?.data?.data.proCourses.map((item: any) => {
                    if (item.isRegister) item.btnContent = 'Tiếp tục học';
                    else item.btnContent = 'Xem khóa học';
                    item.backgroundImage = `${ENV.apiUrl}/api/v1/file/${item.image}`;
                    item.href = `/${!item.isRegister ? 'payment' : 'courses'}/${item.slug}`;
                    return item;
                });
                setCoursesPro(newCoursesPro);
            }
            if (analyticsResponse?.data?.data) setAnalytics(analyticsResponse.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className={styles.slideshow}>
                <SlideShow />
            </div>
            <div className={styles.wrapper}>
                <ScrollList
                    key={'1'}
                    scrollListData={{
                        countRegister: 0,
                        heading: 'Khóa học Pro',
                    }}
                    commonItemData={coursesPro}
                />
                <ScrollList
                    key={'2'}
                    scrollListData={{
                        countRegister: analytics.studentCount,
                        exploreBtn: 'Xem lộ trình',
                        href: '/learning-paths/',
                        heading: 'Khóa học miễn phí',
                    }}
                    commonItemData={courses}
                />
                <ScrollList key={'3'} scrollListData={scrollListData[1]} commonItemData={commonItemPostData} />
                <ScrollList key={'4'} scrollListData={scrollListData[2]} commonItemData={commonItemVideoData} />
            </div>
        </>
    );
};

export default Home;
