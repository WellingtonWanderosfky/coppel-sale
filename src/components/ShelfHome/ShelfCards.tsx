// Import Swiper React components
import { useMedia } from "react-use";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ShelfsCards.module.css";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import Card from "./Card";
import { RequestShelf } from "./requestApiShelf/typeShelf";

export default function ShelfCards({ products }: { products: RequestShelf }) {
  const isMob = useMedia("(max-width: 1024px)", false);

  return (
    <div className={`max-w-[1200px] pt-3 ${styles.containerSwiper}`}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        slidesPerView={isMob ? 1.5 : 4}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product) => {
          return <SwiperSlide key={product.productId}><Card product={product}></Card></SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}
