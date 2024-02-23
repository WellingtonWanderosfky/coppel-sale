import Image from "next/image";

interface CategoryProps {
  textCard: string;
  image: string;
}

interface CategoriesProps {
  categories: CategoryProps[];
  text: string;
}

export const Categories = ({ categories, text }: CategoriesProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl">{text}</h3>
      <div className="flex gap-4  justify-between lg:flex-nowrap flex-wrap">
        {categories.length &&
          categories.map((category,i) => {
            return (
              <div className="flex flex-wrap flex-col items-center justify-center gap-2" key={i}>
                <p className="lg:text-xl text-center text-sm">{category.textCard}</p>
                <Image
                  className="border rounded-full"
                  width={140}
                  height={140}
                  src={category.image}
                  alt={category.textCard}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
