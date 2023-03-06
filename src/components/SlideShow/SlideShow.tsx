import React from 'react';
import styles from './SlideShow.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Item from './Item/Item';

const SlideShow = (): JSX.Element => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-angle-left"></i></button>`,
        // nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-angle-right"></i></button>`,
        dots: true,
    };

    return (
        <div className={styles.wrapper}>
            <Slider {...settings}>
                <Item
                    bannerNumer={1}
                    heading="Khóa học HTML CSS Pro"
                    title="Đây là khóa học đầy đủ và chi tiết nhất bạn có thể tìm thấy được ở trên Internet!"
                    btnContent="Tìm hiểu thêm"
                    btnHref="https://fullstack.edu.vn/landing/htmlcss/"
                />
                <Item
                    bannerNumer={2}
                    heading="Học ReactJS Miễn Phí!"
                    title="Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS."
                    btnContent="Đăng ký ngay"
                    btnHref="https://fullstack.edu.vn/courses/reactjs"
                />
                <Item
                    bannerNumer={3}
                    heading="Thành quả của học viên"
                    title="Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ."
                    btnContent="Xem thành quả"
                    btnHref="https://fullstack.edu.vn/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8.html"
                />
                <Item
                    bannerNumer={4}
                    heading="F8 trên Youtube"
                    title="F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó."
                    btnContent="Truy cập kênh"
                    btnHref="https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw"
                />
                <Item
                    bannerNumer={5}
                    heading="F8 trên Facebook"
                    title="F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó."
                    btnContent="Truy cập Facebook"
                    btnHref="https://www.facebook.com/f8vnofficial"
                />
            </Slider>
        </div>
    );
};

export default SlideShow;
