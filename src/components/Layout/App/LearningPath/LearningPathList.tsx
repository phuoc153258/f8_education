import React, { useState, useEffect } from 'react';
import styles from './LearningPathList.module.scss';
import LearningPathItem from './LearningPathItem';
import LearningPathService from '../../../../services/learningPath';

const LearningPathList = (): JSX.Element => {
    const [show, setShow] = useState<any>(false);
    const [learningPath, setLearningPath] = useState<any>(null);
    const fetchData = async () => {
        setShow(false);
        const learningPathResponse: any = await LearningPathService.list({});
        if (learningPathResponse.data.data) setLearningPath(learningPathResponse.data.data);
        setShow(true);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!show) return <></>;
    return (
        <div className={styles.content}>
            <>
                {learningPath.map((item: any, index: any) => {
                    return <LearningPathItem key={index} item={item} />;
                })}
            </>
        </div>
    );
};

export default LearningPathList;
