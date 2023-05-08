import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './WillLearn.module.scss';
import clsx from 'clsx';

function WillLearn() {
    return (
        <div className={clsx(styles.wrapper, styles.payment)}>
            <h2 className={clsx(styles.title, styles.titleWrapper)}>
                <p>Bạn sẽ học được những gì?</p>
            </h2>
            <div className={styles.content}>
                <section className="index-module_row">
                    <section className="index-module_col index-module_c-6 index-module_m-3 index-module_l-3">
                        <ul>
                            <li>Cấu trúc file HTML</li>
                            <li>Tìm hiểu các thẻ meta</li>
                            <li>Thuộc tính trong HTML</li>
                            <li>Sử dụng liên kết</li>
                            <li>Sử dụng Emmet</li>
                            <li>Tính thừa kế CSS</li>
                            <li>Thẻ inline và block</li>
                            <li>Đệm, viền, khoảng lề</li>
                        </ul>
                    </section>
                    <section className="index-module_col index-module_c-6 index-module_m-3 index-module_l-3">
                        <ul>
                            <li>Đơn vị trong CSS</li>
                            <li>Làm việc với font chữ</li>
                            <li>Làm việc với hình ảnh</li>
                            <li>Làm việc với background</li>
                            <li>Thuộc tính vị trí (position)</li>
                            <li>Sử dụng biến trong CSS</li>
                            <li>CSS selectors nâng cao</li>
                            <li>Đặt tên className chuẩn BEM</li>
                        </ul>
                    </section>
                    <section className="index-module_col index-module_c-6 index-module_m-3 index-module_l-3">
                        <ul>
                            <li>Semantic trong HTML5</li>
                            <li>Sử dụng Flexbox</li>
                            <li>Sử dụng CSS Grid</li>
                            <li>Form và validation</li>
                            <li>Responsive web design</li>
                            <li>Grid system 12 columns</li>
                            <li>Sử dụng Animations</li>
                            <li>Hướng dẫn sử dụng Sass</li>
                        </ul>
                    </section>
                    <section className="index-module_col index-module_c-6 index-module_m-3 index-module_l-3">
                        <ul>
                            <li>Web accessibility</li>
                            <li>Tìm hiểu về UI và UX</li>
                            <li>Luyện độ chi tiết (easy)</li>
                            <li>Sử dụng Git, Github</li>
                            <li>Kiến thức SEO cơ bản</li>
                            <li>Tra cứu thẻ HTML</li>
                            <li>Tính hợp lệ của HTML</li>
                            <li>Tìm hiểu pseudo-elements</li>
                        </ul>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default WillLearn;
