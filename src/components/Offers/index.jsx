import CardOffers from "./CardOffers";

const index = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="offer-wrapper">
          <div className="offers-info">{/* offers info */}</div>
          <ul>
            <li className="list-item">
              <CardOffers/>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default index;