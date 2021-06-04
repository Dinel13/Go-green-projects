import React from "react";

export default function Testimonial() {
  return (
    <div className="mx-auto px-4 xl:px-0 container py-2 md:py-4 lg:py-10 mb-4">
      <div className="text-color f-f-l">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center">
          "Coming together is a beginning.
          <br />
          Keeping together is progress.
          <br />
          Working together is success".
          <br />
        </h1>
        <h1 className="text-indigo-600 text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center pt-5 lg:pt-14">
          - Henry Ford.
        </h1>
      </div>
    </div>
  );
}
