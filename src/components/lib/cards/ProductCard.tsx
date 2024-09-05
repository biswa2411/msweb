// components/ProductCard.tsx

interface ProductCardProps {
    image: string;
    name: string;
    mrp: number;
    offerPrice: number;
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ image, name, mrp, offerPrice }) => {
    return (
      <div className="max-w-xs bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-4 flex flex-col items-center justify-between space-y-4">
        {/* Product Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-md"
        />
  
        {/* Product Name */}
        <h3 className="text-white text-lg font-semibold">{name}</h3>
  
        {/* Prices */}
        <div className="flex flex-col items-center">
          <span className="text-red-400 line-through text-sm">MRP: ₹{mrp}</span>
          <span className="text-green-300 text-lg font-bold">
            Offer Price: ₹{offerPrice}
          </span>
        </div>
  
        {/* Buy Now Button */}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          Buy Now
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  