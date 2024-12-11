import React from 'react'
const brandsData = [
  {
    imageSrc:
      "/Img/Brand/ApplePay.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg",
    altText: "graygrids",
    link: "#",
  },
  {
    imageSrc:
      "/Img/Brand/Mastercard.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg",
    altText: "lineicons",
    link: "#",
  },
  {
    imageSrc: "/Img/Brand/Stripe.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg",
    altText: "uideck",
    link: "#",
  },
  {
    imageSrc: "/Img/Brand/Stripe.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
    altText: "ayroui",
    link: "#",
  },
];

function Brand() {

  return (
    <section className="bg-white py- lg:py-[20px] dark:bg-dark">
    <div className="container mx-auto py-5">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center gap-20">
            {brandsData.map((brand, i) => (
              <img src={brand.imageSrc} className='w-20' />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Brand