/* eslint-disable react/jsx-key */
import { ProductCard } from "../components/Fragments/ProductCard";

const products = [
  {
    id: 1,
    image: "/img/product-1.jpg",
    alt: "shirt",
    name: "New Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, a! Laborum asperiores iusto debitis amet omnis ad commodi reiciendis corporis. Quo et modi qui cupiditate suscipit, consectetur voluptas officiis eius?",
    price: "Rp. 150.000",
  },
  {
    id: 2,
    image: "/img/product-2.jpg",
    alt: "laptop",
    name: "Mac Book Pro",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, a! Laborum asperiores iusto debitis amet omnis ad commodi reiciendis corporis.",
    price: "Rp. 25.500.000",
  },
  {
    id: 3,
    image: "/img/product-3.jpg",
    alt: "smart watch",
    name: "Smart Watch 09",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, a! Laborum asperiores iusto debitis amet omnis ad commodi reiciendis corporis.",
    price: "Rp. 9.000.000",
  },
];

export const ProductPage = () => {
  return (
    <div className="flex justify-center py-5 flex-wrap gap-5">
      {products.map((product, id) => (
        <ProductCard key={id}>
          <ProductCard.Header image={product.image} alt={product.alt} />
          <ProductCard.Body name={product.name}>
            {product.description}
          </ProductCard.Body>
          <ProductCard.Footer price={product.price} />
        </ProductCard>
      ))}
    </div>
  );
};
