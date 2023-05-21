import React, { useState, useEffect } from 'react';
import styles from './DefaultLayout.module.scss';
import LearningPath from '../LearningPath/LearningPathList';
import MarkdownParser from '../../Content/MarkdownParser/MarkdownParser';
import SuggestionBox from '../../../Share/SuggestionBox/SuggestionBox';
import { useParams } from 'react-router-dom';
import LearningPathService from '../../../../services/learningPath';
import LearningPathGroup from '../LearningPath/LearningPathGroup';
import CourseService from '../../../../services/course';
import ScrollList from '../Home/ScrollList/ScrollList';
import { ENV } from '../../../../config';

const DefaultLayout = ({ page }: any): JSX.Element => {
    const { slug } = useParams();
    const [analytics, setAnalytics] = useState<any>({});
    const [courses, setCourses] = useState<any>([]);
    const [coursesPro, setCoursesPro] = useState<any>([]);

    // const [show, setShow] = useState<any>(false);
    const [learningPath, setLearningPath] = useState<any>(false);

    const fetchData = async () => {
        if (slug !== undefined) {
            const learningPathResponse: any = await LearningPathService.shows({}, slug);
            if (learningPathResponse.data.data) setLearningPath(learningPathResponse.data.data);
        }

        // setShow(false);

        // setShow(true);
    };

    const fetchDataCourse = async () => {
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

        if (slug !== undefined) {
            const learningPathResponse: any = await LearningPathService.shows({}, slug);
            if (learningPathResponse.data.data) setLearningPath(learningPathResponse.data.data);
        }

        // setShow(false);

        // setShow(true);
    };
    useEffect(() => {
        if (slug) fetchData();
        if (page === 'courses') fetchDataCourse();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    // if (!show) return <></>;
    return (
        <div className={styles.container}>
            {page === 'courses' ? (
                <>
                    {' '}
                    <div className={styles.containerTop}>
                        <h1 className={styles.heading}>Khóa học</h1>
                        <MarkdownParser
                            step={{
                                description: `<p>Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học miễn phí, chất lượng, nội dung dễ hiểu.</p>`,
                            }}
                        />
                    </div>
                    <div className="container-body">
                        {
                            <>
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
                                <SuggestionBox
                                    content={{
                                        title: 'Bạn đang tìm kiếm lộ trình học cho người mới?',
                                        description:
                                            'Các khóa học được thiết kế phù hợp cho người mới, lộ trình học rõ ràng, nội dung dễ hiểu.',
                                        href: '/learning-paths',
                                        btn: 'Xem lộ trình',
                                    }}
                                />
                            </>
                        }
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.containerTop}>
                        <h1 className={styles.heading}>{slug === undefined ? 'Lộ trình học' : learningPath.name}</h1>
                        <MarkdownParser
                            step={{
                                description:
                                    slug === undefined
                                        ? `<p>
                    Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với
                    vị trí "Lập trình viên Front-end" bạn nên tập trung vào lộ trình "Front-end".
                </p>`
                                        : learningPath.content,
                            }}
                        />
                    </div>
                    <div className="container-body">
                        {slug === undefined ? (
                            <>
                                {' '}
                                <LearningPath />
                                <SuggestionBox
                                    content={{
                                        title: 'Tham gia cộng đồng học viên F8 trên Facebook',
                                        description:
                                            'Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.',
                                        href: 'https://www.facebook.com/groups/f8official',
                                        btn: 'Tham gia nhóm',
                                    }}
                                />
                            </>
                        ) : (
                            <>
                                <section className="index-module_row">
                                    <section className="index-module_col index-module_c-12 index-module_m-12 index-module_l-8">
                                        <>
                                            {learningPath?.group_course_roles?.map((item: any, index: any) => {
                                                return (
                                                    <LearningPathGroup
                                                        key={index}
                                                        index={index}
                                                        group_course_role={item}
                                                    />
                                                );
                                            })}
                                        </>
                                    </section>
                                </section>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default DefaultLayout;
