import style from "./Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className={style.heroBackground}>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-4/5 lg:pl-24 md:pl-16 flex flex-col items-start text-left">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Save Our Earth
            <br className="inline-block" />
            With Recycle Your waste
          </h1>
          <p className="mb-8 leading-relaxed text-gray-100 md:w-3/4 lg:w-2/3">
            Mari kurangi sampah di muka bumi dengan mendaurulang sampah kamu.
            Kami menyediakan alat untuk membantu kamu menentukan sampah yang
            dapat didaur ulang. Karena setiap usaha kamu sangat berarti bagi
            bumi kita.
          </p>
          <div className="flex justify-center">
            <Link
              to="/recycle"
              className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"
            >
              Start Recycle
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
