import { ProductCard } from "../components/Fragments/ProductCard";

export const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <ProductCard>
        <ProductCard.Header image="/img/product-1.jpg" alt="shirt"/>
        <ProductCard.Body title="New Shirt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, a! Laborum asperiores iusto debitis amet omnis ad commodi reiciendis corporis. Quo et modi qui cupiditate suscipit, consectetur voluptas officiis eius?
        </ProductCard.Body>
        <ProductCard.Footer price="Rp. 150.000"/>
      </ProductCard>

      <ProductCard>
        <ProductCard.Header image="/img/product-2.jpg" alt="laptop"/>
        <ProductCard.Body title="New Laptop">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, a! Laborum asperiores iusto debitis amet omnis ad commodi reiciendis corporis. Quo et modi qui cupiditate suscipit, consectetur voluptas officiis eius?
        </ProductCard.Body>
        <ProductCard.Footer price="Rp. 25.500.000"/>
      </ProductCard>
    </div>
  );
};
