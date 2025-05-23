import style from "./Blog2.page.module.scss";
import { UsefulCard } from "@/ui/UsefulCard";

import Image from "next/image";
import img from "#/images/blog2.png";
export default function blog2() {
  return (
    <section className={style.blogContainer}>
      <div className={style.sectionContainer}>
        <div className={style.container}>
          <div className={style.textContainer}>
            <h2 className={style.h2}>
              Как открыть бизнес в Дубае: пошаговое руководство
            </h2>
            <div className={style.conteinerP}>
              <div>
                <p className={style.textAlign}>
                  Дата публикации: 20 апреля 2025
                </p>
              </div>
              <div className={style.containerText}>
                <p className={style.textAlign}>
                  <span className={style.blueBlack}>Ритиш Шарма</span> (автор)
                  <span className={style.blueBlack}>Джейкоб Джой Мэтью </span>
                  (рецензент)
                </p>
              </div>
            </div>
          </div>
          <Image src={img} alt="img" className={style.img} width={1283} height={742} />
        </div>
        <div className={style.ContainerBlog}>
          <div className={style.containerDiv}>
            <p className={style.dubaiText}>
              Дубай — один из самых привлекательных городов для ведения бизнеса
              благодаря гибкой экономике, низким налогам и благоприятной
              юридической системе. В этой статье мы расскажем, как пошагово
              открыть бизнес в Дубае, на что обратить внимание и чего избегать.
            </p>
          </div>

          <div className={style.containerDiv}>
            <div className={style.blue}>
              Шаг 1: Определитесь с типом юрисдикции
            </div>
            <p className={style.p}>
              В ОАЭ существует три основные формы регистрации:
              <br />
              Free Zone (Свободные экономические зоны) — выгодны для иностранных
              предпринимателей, позволяют 100% владение бизнесом.
              <br />
              Mainland (наземная юрисдикция) — подходит, если вы хотите работать
              напрямую с местными компаниями и государственными структурами.
              <br />
              Offshore — для международных операций и налогового планирования,
              но не подходит для работы внутри ОАЭ.
            </p>
          </div>

          <div className={style.containerDiv}>
            <div className={style.blue}>
              Шаг 1: Определитесь с типом юрисдикции
            </div>
            <p className={style.p}>
              В ОАЭ существует три основные формы регистрации:
              <br />
              Free Zone (Свободные экономические зоны) — выгодны для иностранных
              предпринимателей, позволяют 100% владение бизнесом.
              <br />
              Mainland (наземная юрисдикция) — подходит, если вы хотите работать
              напрямую с местными компаниями и государственными структурами.
              <br />
              Offshore — для международных операций и налогового планирования,
              но не подходит для работы внутри ОАЭ.
            </p>
          </div>

          <div className={style.containerDiv}>
            <div className={style.blue}>
              Шаг 1: Определитесь с типом юрисдикции
            </div>
            <p className={style.p}>
              В ОАЭ существует три основные формы регистрации:
              <br />
              Free Zone (Свободные экономические зоны) — выгодны для иностранных
              предпринимателей, позволяют 100% владение бизнесом.
              <br />
              Mainland (наземная юрисдикция) — подходит, если вы хотите работать
              напрямую с местными компаниями и государственными структурами.
              <br />
              Offshore — для международных операций и налогового планирования,
              но не подходит для работы внутри ОАЭ.
            </p>
          </div>

          <div className={style.containerDiv}>
            <div className={style.blue}>
              Шаг 1: Определитесь с типом юрисдикции
            </div>
            <p className={style.p}>
              В ОАЭ существует три основные формы регистрации:
              <br />
              Free Zone (Свободные экономические зоны) — выгодны для иностранных
              предпринимателей, позволяют 100% владение бизнесом.
              <br />
              Mainland (наземная юрисдикция) — подходит, если вы хотите работать
              напрямую с местными компаниями и государственными структурами.
              <br />
              Offshore — для международных операций и налогового планирования,
              но не подходит для работы внутри ОАЭ.
            </p>
          </div>

          <div className={style.containerDiv}>
            <div className={style.blue}>
              Шаг 1: Определитесь с типом юрисдикции
            </div>
            <p className={style.p}>
              В ОАЭ существует три основные формы регистрации:
              <br />
              Free Zone (Свободные экономические зоны) — выгодны для иностранных
              предпринимателей, позволяют 100% владение бизнесом.
              <br />
              Mainland (наземная юрисдикция) — подходит, если вы хотите работать
              напрямую с местными компаниями и государственными структурами.
              <br />
              Offshore — для международных операций и налогового планирования,
              но не подходит для работы внутри ОАЭ.
            </p>
          </div>
        </div>

        <h2 className={style.h2Like}>Вам также может понравиться</h2>

        <div className={style.containerCard}>
          <UsefulCard />
          <UsefulCard />
          <UsefulCard />
        </div>
      </div>
    </section>
  );
}
