import React from 'react'

export default function Features() {
  return (
    <div>
         <div className="mt-32 mb-32">
        <h1 className="text-4xl font-sans text-center lg:text-left  lg:ml-[273px] font-semibold mb-16">
          Features
        </h1>
        <div className="flex justify-center flex-wrap gap-8 mt-6">
          <div>
            <img
              src="/images/features/customizable-products.svg"
              alt="customizable-products"
              className="mx-auto"
            />
            <h1 className=" font-sans text-3xl font-semibold text-center  mb-4">
              customizable products
            </h1>
            <p className="text-center">
              we understand that everyone has unique needs and <br />{" "}
              preferences when it comes to technology products.
              <br />
              That's why we offer a wide range of customizable <br /> products
              that can be tailored to your exact <br /> specifications
            </p>
          </div>
          <div>
            <img
              src="/images/features/delivery.svg"
              alt="customizable-products"
              className="mx-auto"
            />
            <h1 className=" font-sans text-3xl font-semibold text-center  mb-4">
              Fast Delivery
            </h1>
            <p className="text-center">
              we offer lightning-fast delivery options, with same-day <br />
              and next-day delivery available for many products. <br />
              Plus, our delivery team is dedicated to making sure <br />
              your order arrives on time and in perfect condition <br />
            </p>
          </div>
          <div>
            <img
              src="/images/features/warranty.svg"
              alt="customizable-products"
              className="mx-auto"
            />
            <h1 className=" font-sans text-3xl font-semibold text-center mb-4">
              Warranty
            </h1>
            <p className="text-center">
              Our warranties and guarantees typically include coverage for{" "}
              <br />
              defects in materials for one year after purchase.
              <br /> We want you to feel confident in your purchase,
              <br /> which is why we stand behind our products with these <br />{" "}
              guarantees.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
