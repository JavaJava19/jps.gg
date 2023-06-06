import style from "../../../css/toppage.module.css";
import slide1 from "../../../images/slider/slide1.png";
import slide2 from "../../../images/slider/slide2.png";
import slide3 from "../../../images/slider/slide3.png";
import slide4 from "../../../images/slider/slide4.png";
import slide5 from "../../../images/slider/slide5.png";
import slide6 from "../../../images/slider/slide6.png";
import slide7 from "../../../images/slider/slide7.png";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Slider = ({ props }) => {

    const imageData = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
        slide7
    ]


    return (
        <div className={style.SlideField}>
            <Splide
                aria-label="Slide"
                options={{
                    autoplay: true, // 自動再生を有効
                    interval: 4000, // 自動再生の間隔を3秒に設定
                    arrows: false,
                    rewind: true,
                    pagination: false,
                    pauseOnHover: false,
                    drag: false,
                    type: "fade"
                }}
            >
                {imageData.map(data => (
                    <SplideSlide key={data}>
                        <img className={style.SlideImage} src={data} alt="" />
                    </SplideSlide>
                ))}
            </Splide>

            <div className={style.Content}>{props}</div>
        </div>
    )
}

export default Slider
