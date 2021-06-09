import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { showNotification, hideNotification } from "../../store/uiSlice";
import style from "./Hero.module.css";

export default function Hero() {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
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
            dapat didaur ulang. Kamu kemudian dapat menjual hasil daurulang atau
            membeli hasil daurulang orang lain di marketplace kami. Karena
            setiap usaha kamu sangat berarti bagi bumi kita.
          </p>
          <div className="flex flex-col justify-center">
            <div className="w-full block">
              <Link
                to="/recycle"
                className="inline-flex  items-center text-white bg-green-600 border-0 py-1.5 px-3 hover:bg-green-700 rounded"
              >
                Start Recycle
              </Link>
              <button
                onClick={() => {
                  if (!token) {
                    dispatch(
                      showNotification({
                        status: "error",
                        title: "Kamu belum login",
                        message: "Silahkan login dulu untuk melanjutkan",
                        action: null,
                      })
                    );
                    setTimeout(() => {
                      history.push("/login");
                      dispatch(hideNotification());
                    }, 2000);
                  } else {
                    history.push("/marketplace");
                  }
                }}
                className="inline-flex  items-center text-white bg-green-600 border-0 ml-1.5 py-1.5 px-3 hover:bg-green-700 rounded"
              >
                Marketplace
              </button>
            </div>
            <p className="text-gray-200 font-medium text-md text-center my-2">
              Atau
            </p>
            <a
              href="https://storage.googleapis.com/b21-cap0199/GoGreen.apk"
              className="flex items-center justify-center bg-gray-300 hover:bg-green-700  text-grey-800 py-1 px-3 rounded"
            >
              <img
                src="https://img.icons8.com/color/32/000000/android-os.png"
                alt="icon"
              />
              <span>Download Android App</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
