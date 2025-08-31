type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const ProductView = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      <h1>Product Page</h1>
      {products.map((product: ProductType) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductView;
