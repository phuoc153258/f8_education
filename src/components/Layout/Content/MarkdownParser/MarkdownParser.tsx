import React from 'react';
import styles from './MarkdownParser.module.scss';

const MarkdownParser = ({ step }: any): JSX.Element => {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: step.description }}
            className={styles.wrapper}
            style={{ '--font-size': '1.6rem', '--line-height': 2 } as React.CSSProperties}
        >
            {/* {step.description} */}
        </div>
    );
};

export default MarkdownParser;
