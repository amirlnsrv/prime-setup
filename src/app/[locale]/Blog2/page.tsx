import style from "./Blog2.page.module.scss";

import Image from "next/image";
import img from "#/images/blog2.png";
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";

const UsefulCard = dynamic(() => import("@/ui/UsefulCard/UsefulCard"));

export default async function Blog2() {
  const t = await getTranslations("UsefulArticles");
  const blog = await getTranslations("blog2");
  return (
    <section className={style.blogContainer}>
      <div className={style.sectionContainer}>
        <div className={style.container}>
          <div className={style.textContainer}>
            <h2 className={style.h2}>{blog("h2")} </h2>
            <div className={style.conteinerP}>
              <div>
                <p className={style.textAlign}>{blog("textAlign")}</p>
              </div>
              <div className={style.containerText}>
                <p className={style.textAlign}>
                  <span className={style.blueBlack}>{blog("name")}</span>{" "}
                  {blog("user")}
                  <span className={style.blueBlack}>{blog("name2")} </span>
                  {blog("resent")}{" "}
                </p>
              </div>
            </div>
          </div>
          <Image
            src={img}
            alt="img"
            className={style.img}
            width={1283}
            height={742}
          />
        </div>
        <div className={style.ContainerBlog}>
          <div className={style.containerDiv}>
            <p className={style.dubaiText}>{blog("dubaiText")}</p>
          </div>

          <div className={style.containerDiv}>
            <div className={style.blue}>{blog("blue1")}</div>
            <p className={style.p}>
              {blog("three")}
              <br />
              {blog("free")}
              <br />
              {blog("mainland")}
              <br />
              {blog("offshore")}
            </p>
          </div>

          <div className={style.containerDiv}>
            <div className={style.blue}>{blog("blue2")}</div>
            <div className={style.p}>
              <div>{blog("text")}</div>

              <div>{blog("div1")}</div>
              <div>{blog("div2")}</div>
              <div>{blog("div3")}</div>
              <div>{blog("div4")}</div>
              <div>{blog("div5")}</div>
            </div>
          </div>

          <div className={style.containerDiv}>
            <div className={style.blue}>{blog("blue3")}</div>
            <div className={style.pdiv}>
              <p className={style.p}>{blog("text1")}</p>
              <p className={style.p}> {blog("text2")}</p>
              <p className={style.p}> {blog("text3")}</p>
              <p className={style.p}> {blog("text4")}</p>
            </div>
          </div>

          <div className={style.containerDiv}>
            <div className={style.blue}>{blog("step4Title")}</div>
            <div className={style.pdiv}>
              <div className={style.p}>{blog("documentsListTitle")}</div>
              <div className={style.p}> {blog("document1")}</div>
              <div className={style.p}>{blog("document2")}</div>
              <div className={style.p}> {blog("document3")}</div>
              <div className={style.p}>{blog("document4")}</div>
              <div className={style.p}> {blog("document5")}</div>
            </div>
          </div>

          <div className={style.containerDiv}>
            <div className={style.blue}>{blog("blue5")} </div>
            <p className={style.p}>{blog("text12")}</p>
          </div>
          <div className={style.containerDiv}>
            <div className={style.blue}>{blog("blue6")}</div>
            <p className={style.p}>{blog("bank")}</p>
          </div>
        </div>

        <h2 className={style.h2Like}>{blog("h2Like")}</h2>

        <div className={style.containerCard}>
          <UsefulCard
            buttonTxt={t("card.button")}
            subtitleTxt={t("card.subtitle")}
            titleTxt={t("card.title")}
          />
          <UsefulCard
            buttonTxt={t("card.button")}
            subtitleTxt={t("card.subtitle")}
            titleTxt={t("card.title")}
          />
          <UsefulCard
            buttonTxt={t("card.button")}
            subtitleTxt={t("card.subtitle")}
            titleTxt={t("card.title")}
          />
        </div>
      </div>
    </section>
  );
}
