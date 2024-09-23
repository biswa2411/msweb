// components/OfferCard.js

const OfferCard = () => {
    return (
        <div className="sm:h-80 h-20 w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-4 flex items-center space-x-4 overflow-hidden">
        {/* Image Section */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnFf6DXcgRxe71BOQm1orHpnKjJloo9c2jg&s"
          alt="Offer"
          className="size-24 rounded-full object-cover"
        />
  
        {/* Text Section */}
        <div className="text-white">
          <h2 className="text-lg font-semibold">Special Offer!</h2>
          <p className="text-sm">Save 20% on all items</p>
        </div>
      </div>
    );
  };
  
  export default OfferCard;
  