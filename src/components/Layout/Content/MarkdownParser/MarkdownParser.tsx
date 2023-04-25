import React from 'react';
import styles from './MarkdownParser.module.scss';

const MarkdownParser = (): JSX.Element => {
    return (
        <div className={styles.wrapper} style={{ '--font-size': '1.6rem', '--line-height': 2 } as React.CSSProperties}>
            <p>
                Bạn muốn học lập trình hiệu quả hơn không? Hãy học tại trang web{' '}
                <a href="http://fullstack.edu.vn/" target="_blank" rel="noreferrer">
                    http://fullstack.edu.vn
                </a>{' '}
                thay vì Youtube. Lý do tại sao mời bạn bấm vào đây: ...
            </p>
            <hr />
            <h2 id="tham-gia-nhom-reactjs-viet-nam" data-appended="true">
                <a
                    data-link=""
                    href="https://fullstack.edu.vn/learning/reactjs?id=26aea3bd-58be-4ea1-8f89-e3829b6ab4a9#tham-gia-nhom-reactjs-viet-nam"
                    target="_self"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="link"
                        className="svg-inline--fa fa-link "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                    >
                        <path
                            fill="currentColor"
                            d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"
                        ></path>
                    </svg>
                </a>
                Tham gia nhóm ReactJS Việt Nam
            </h2>
            <p>
                Nhóm ReactJS - Việt Nam trước đây (không phải nhóm của F8) đã bị chủ sở hữu cũ bán, nhóm không còn chất
                lượng vì có nhiều tin bán hàng, quảng cáo.
            </p>
            <p>
                Nay F8 tạo nhóm "ReactJS Việt Nam" mới, với mong muốn mang lại môi trường tốt hơn cho việc chia sẻ, học
                tập kiến thức liên quan tới ReactJS tại Việt Nam 🎉
            </p>
            <p>
                👉{' '}
                <strong>
                    Xin mời tham gia tại đây:{' '}
                    <a
                        href="/external-url?continue=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F1134618593772787"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://www.facebook.com/groups/1134618593772787
                    </a>
                </strong>
            </p>
            <blockquote>
                <p>
                    Cao ốc nào cũng được xây từ viên gạch đầu tiên, hãy đăng câu hỏi hoặc chia sẻ kiến thức của bạn để
                    nhóm mới này sớm trở thành tòa cao ốc bạn nhé &lt;3
                </p>
            </blockquote>
        </div>
    );
};

export default MarkdownParser;
