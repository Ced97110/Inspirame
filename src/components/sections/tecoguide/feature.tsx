import { IntroProduct } from "./intro-product/intro-product";
import { Product } from "./tabproducts/tabproduct";
import CardFeature from "./cards-feature/card-feature";



export const FeatureHero = async ({params:{locale}}) => {
  return (
    <section className="relative overflow-hidden flex flex-col items-center min-h-screen ">
      <IntroProduct params={{ locale }}/>
      <Product />
      <CardFeature params={{locale}}/>
    </section>
  );
};
