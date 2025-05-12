import { mockdataIcon } from '@/mockData/tempfile';
import stylly from './Benefits.module.scss';
// import Image from 'next/image';

export function Benefits(){
    return <section className={stylly.sectionContainer}> 
        <div className={stylly.containerBenefits}> 
        {mockdataIcon.map((item) => (
          <div key={item.id}  className={stylly.containerItem}>
              <div className={stylly.containerCard}>
              {/* <img src={item.img} alt="icon" className={stylly.img}/>
              <img src={item.img2} alt="icon" className={stylly.img2}/> */}
              <h3 className={stylly.title} >{item.title}</h3>
        <p className={stylly.description}>{item.description}</p>
              </div>
          </div>
        ))}
        
        </div>
    </section>
}