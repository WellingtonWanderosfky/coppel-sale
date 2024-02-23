import Image from "next/image";
import { Product } from "./requestApiShelf/typeShelf";

const Card = ({ product }: { product: Product }) => {
  return (
    <div className="flex items-center p-3 flex-col gap-3 border shadow-sm min-h-80 ">
      <h3 className="text-lg text-ellipsis line-clamp-1">
        {product.productName}
      </h3>
      <div className="min-h-56 max-h-56">
        <Image
          className="lg:max-w-56 lg:max-h-56 max-w-44 max-h-44"
          width={218}
          height={218}
          alt={product.items[0].images[0].imageLabel}
          src={product.items[0].images[0].imageUrl}
        ></Image>
      </div>
      <span className="text-xs">6 cuotas sin interés</span>

    </div>
  );
};

export default Card;
