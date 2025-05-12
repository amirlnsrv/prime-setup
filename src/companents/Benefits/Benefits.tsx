// import { mockdataIcon } from '@/mockdata/mockdata';
import { mockdataIcon } from '@/mockData/tempfile';
import stylly from './Benefits.module.scss';

export function Benefits(){
    return <section className={stylly.sectionContainer}> 
        <div className={stylly.containerBenefits}> 
        {mockdataIcon.map((item) => (
          <div
            key={item.id}>
        <img src={item.icon} alt="icon"  width={40} height={40}/>
            <h3 className={stylly.title}>{item.title}</h3>
            <p className={stylly.description}>{item.description}</p>
          </div>
        ))}
        </div>
    </section>
}