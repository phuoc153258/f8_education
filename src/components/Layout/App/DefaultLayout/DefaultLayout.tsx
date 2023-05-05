import React from 'react';
import styles from './DefaultLayout.module.scss';
import LearningPath from '../LearningPath/LearningPathList';
import MarkdownParser from '../../Content/MarkdownParser/MarkdownParser';
import SuggestionBox from '../../../Share/SuggestionBox/SuggestionBox';

const DefaultLayout = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.containerTop}>
                <h1 className={styles.heading}>Lộ trình học</h1>
                <MarkdownParser
                    step={{
                        description: `<p>
                    Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với
                    vị trí "Lập trình viên Front-end" bạn nên tập trung vào lộ trình "Front-end".
                </p>`,
                    }}
                />
            </div>
            <div className="container-body">
                <LearningPath />
                <SuggestionBox />
            </div>
        </div>
    );
};

export default DefaultLayout;
