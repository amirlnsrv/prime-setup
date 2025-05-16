import style from './Blog2.module.scss'
// import img from './assets/images/blog2.png'
import { UsefulCard } from '@/ui/UsefulCard';



// import Image from 'next/image';

export function Blog2(){
    return <section className={style.blogContainer} >
        <div className={style.sectionContainer}>
        <div className={style.container}>
            <div className={style.textContainer}>
            <h2 className={style.h2}>Как открыть бизнес в Дубае: пошаговое руководство</h2>

<div className={style.conteinerP}>
    <div><p className={style.textAlign}>Дата публикации: 20 апреля 2025    </p>  </div>
    <div>  <p className={style.textAlign}> <span className={style.blueBlack}>Ритиш Шарма</span> (автор)  <span  className={style.blueBlack}>Джейкоб Джой Мэтью </span>(рецензент)</p></div>
</div>
            </div>
{/* <Image src={img} alt='img' className={style.img}/> */}
        </div>

        <div className={style.dubaiContainer}>
                <p className={style.dubaiText}>Дубай — один из самых 
                    привлекательных городов для ведения бизнеса благодаря гибкой экономике,
                     низким налогам и благоприятной юридической системе. В этой статье мы расскажем,
                      как пошагово открыть бизнес в Дубае, на что обратить внимание и чего избегать.</p>
           
           <div>
            <p className={style.p}>
                <div className={style.blue}>Шаг 1: Определитесь с типом юрисдикции</div>
В ОАЭ существует три основные формы регистрации:
Free Zone (Свободные экономические зоны) — выгодны для иностранных предпринимателей, позволяют 100% владение бизнесом.
Mainland (наземная юрисдикция) — подходит, если вы хотите работать напрямую с местными компаниями и государственными структурами.
Offshore — для международных операций и налогового планирования, но не подходит для работы внутри ОАЭ.
            </p>
           </div>
           


           <div>
            <p className={style.p}>
                <div className={style.blue}>Шаг 2: Выберите вид деятельности
</div>
Каждому бизнесу необходима лицензия, которая зависит от сферы деятельности:
Торговая
Профессиональная
Промышленная
Медиа, IT, финансы и др.
Важно правильно указать сферу, иначе возможны отказы или ограничения.
            </p>
           </div>







           <div>
            <p className={style.pZone}>
                <div className={style.blue}>Шаг 3: Выбор свободной зоны или регистрационного органа
</div>
Если вы выбрали Free Zone, то нужно определить, какая зона вам подходит. Например:
DMCC — торговля, драгоценные металлы, криптовалюта
IFZA — низкие затраты на регистрацию
DIFC — финансы, банки, инвестиции
            </p>
           </div>



           <div>
            <p className={style.pZonee}>
                <div className={style.blue}>Шаг 4: Подготовьте документы
</div>
<div>Стандартный набор:</div>
<div>Копия паспорта</div>
<div>Резюме (в некоторых зонах)</div>
<div>Название компании</div>
<div>План деятельности</div>
<div>Аренда офиса (виртуального или физического)</div>
            </p>
           </div>




           <div>
            <p className={style.p}>
                <div className={style.blue}>Шаг 5: Подача заявки и получение лицензии


</div>
Вы подаёте документы онлайн или через зарегистрированного агента. 
Сроки: от 3 до 15 рабочих дней. После этого вы получаете лицензию и можете начать работу.
            </p>
           </div>


           <div>
            <p className={style.p}>
                <div className={style.blue}>Дополнительно: открытие счёта и визы
</div>
После регистрации можно открыть корпоративный банковский счёт и оформить инвесторскую визу,
 а также визу для сотрудников, если планируете нанимать персонал.
            </p>
           </div>
            </div>

            <h2 className={style.h2Like}>Вам также может понравиться</h2>

<div className={style.ContainerDiv}>

   
    <UsefulCard/>
    <UsefulCard/>
    <UsefulCard/>

      </div>


        </div>
        
       
    </section>
}