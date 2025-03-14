import React from "react";
import ProductImageCarousel from "../../components/ProductImageCarousel";
import { ProductDetailsImages } from "../../config/staticData";

const page = () => {
  return (
    <section className="flex justify-center items-center mt-[30px]">
      <ProductImageCarousel images={ProductDetailsImages} />
    </section>
  );
};

export default page;
