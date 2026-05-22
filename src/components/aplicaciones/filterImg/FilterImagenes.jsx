import "./filterImagenes.css"
import { useState } from 'react';
import data from './data'
import { ButtonList } from './ButtonList';
import { ArticleList } from './ArticleList';

const FilterImagenes = () => {
  const allCategories = [
		'Cementix Py',
		...new Set(data.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === 'Cementix Py'){
			setArticles(data)
			return
		}

		const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)
	}
  return (
    <>
			<ButtonList categories={categories} filterCategory={filterCategory}/>
			<ArticleList articles={articles}/>
		</>
  )
}

export default FilterImagenes
