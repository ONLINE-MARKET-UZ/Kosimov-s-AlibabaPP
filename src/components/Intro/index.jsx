import IntroCarousel from "./IntroCarousel";

const index = () => {
  return (
    <section>
      <div className="container mx-auto">
          <div className="intro_wrapper">
           <ul>
            <li>

            </li>
           </ul>
           {/* carousel */}
           <IntroCarousel/>
           <ul>
            <li>
              <div className="card">
                {/* cards */}
              </div>
            </li>
           </ul>
          </div>

      </div>
    </section>
  );
};

export default index;