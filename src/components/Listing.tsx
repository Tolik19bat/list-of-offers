interface Listing {
  title: string;
}

interface MainImage {
  url_570xN: string;
}

interface Item {
  listing_id: number;
  url: string;
  MainImage: MainImage;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

interface ListingProps {
  items: Item[];
}

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  const formatTitle = (title: string) => title.length > 50 ? `${title.substring(0, 50)}…` : title;

  const formatPrice = (price: string, currency: string) => {
    switch(currency) {
      case 'USD':
        return `$${price}`;
      case 'EUR':
        return `€${price}`;
      default:
        return `${price} ${currency}`;
    }
  };

  const getQuantityLevelClass = (quantity: number) => {
    if (quantity <= 10) {
      return 'level-low';
    } else if (quantity <= 20) {
      return 'level-medium';
    } else {
      return 'level-high';
    }
  };

  return (
    <div className="item-list">
      {items.map(item => (
        <div key={item.listing_id} className="item">
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{formatTitle(item.title)}</p>
            <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
            <p className={`item-quantity ${getQuantityLevelClass(item.quantity)}`}>{`${item.quantity} left`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;

