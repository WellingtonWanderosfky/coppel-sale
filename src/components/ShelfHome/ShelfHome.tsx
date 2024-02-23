'use client'

import ShelfCards from "./ShelfCards";
import { useSearchCollection } from "./requestApiShelf/useProductCollection";

interface ShelfProps {
  collection: string;
  titleShelf: string;
}

export const ShelfHome = ({ collection, titleShelf }: ShelfProps) => {
  const { loading, products } = useSearchCollection(`fq=productClusterId=${collection}`);
  return (
    <div className="lg:text-2xl text-sm font-bold flex flex-col">
      {titleShelf}
      <ShelfCards products={products}/>
    </div>
  );
};
