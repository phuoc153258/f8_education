import * as React from 'react';
import styles from './LearningPathGroup.module.scss';
import CourseItem from './CourseItem/CourseItem';

function LearningPathGroup({ group_course_role, index }: any) {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                {index + 1}. {group_course_role.title}
            </h2>
            <p className={styles.desc}>{group_course_role.description}</p>
            <div className="body">
                <>
                    {group_course_role.courses[0] !== null
                        ? group_course_role?.courses?.map((item: any, index: any) => {
                              return <CourseItem course={item} key={index} />;
                          })
                        : ''}
                </>
            </div>
        </div>
    );
}

export default LearningPathGroup;
