import { Hero } from '@/components/Hero';
import { Input } from '@/ui/Input/Input';
import styles from './Faq.module.scss';
import React from 'react';
import { QuestionsAnswers } from './components/QuestionsAnswers';
import { Contact } from '@/components/Contact';

const FAQPage = () => {
	return (
		<>
			<Hero imgUrl='/assets/images/faqHeroBg.jpg' title='Всё, что вы хотели узнать — в одном месте
' subtitle='Мы собрали ответы на самые распространённые вопросы от наших клиентов. Если не нашли нужной информации — напишите нам, и мы поможем.'/>
			<section className={styles.search}>
				<Input title='Ищете конкретный вопрос?'/>
			</section>
			<QuestionsAnswers/>
			<Contact title='Остались вопросы?' description='Мы с радостью проконсультируем вас лично.
'/>
		</>
	);
};

export default FAQPage;