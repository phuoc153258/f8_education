import React, { useState, useEffect } from 'react';
import styles from './DefaultLayout.module.scss';
import LearningPath from '../LearningPath/LearningPathList';
import MarkdownParser from '../../Content/MarkdownParser/MarkdownParser';
import SuggestionBox from '../../../Share/SuggestionBox/SuggestionBox';
import { useParams } from 'react-router-dom';
import LearningPathService from '../../../../services/learningPath';
import LearningPathGroup from '../LearningPath/LearningPathGroup';

const DefaultLayout = (): JSX.Element => {
    const { slug } = useParams();

    // const [show, setShow] = useState<any>(false);
    const [learningPath, setLearningPath] = useState<any>(false);

    const fetchData = async () => {
        // setShow(false);
        if (slug !== undefined) {
            const learningPathResponse: any = await LearningPathService.shows({}, slug);
            if (learningPathResponse.data.data) setLearningPath(learningPathResponse.data.data);
        }
        // setShow(true);
    };
    useEffect(() => {
        if (slug) fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    // if (!show) return <></>;

    return (
        <div className={styles.container}>
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
                {typeof slug === 'undefined' ? (
                    <>
                        {' '}
                        <LearningPath />
                        <SuggestionBox />
                    </>
                ) : (
                    <>
                        <section className="index-module_row">
                            <section className="index-module_col index-module_c-12 index-module_m-12 index-module_l-8">
                                <>
                                    {learningPath?.group_course_roles?.map((item: any, index: any) => {
                                        return <LearningPathGroup key={index} index={index} group_course_role={item} />;
                                    })}
                                </>
                            </section>
                        </section>
                    </>
                )}
            </div>
        </div>
    );
};

export default DefaultLayout;
