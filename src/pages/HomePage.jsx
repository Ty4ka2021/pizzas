import React, { useEffect, useState } from "react"
import Categories from '../components/Categories/Categories'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Skeleton from '../components/Skeleton/Skeleton'
import Sort from '../components/Sort/Sort'

const HomePage = () => {

	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch('https://64c232d1eb7fd5d6ebcf68ff.mockapi.io/items')
			.then(res => res.json())
			.then(json => {
				setTimeout(() => {
					setItems(json)
					setIsLoading(false)
				}, 1000)
			})
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<div className="content__top">
				<Categories />

				<Sort />

			</div>

			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoading
					? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
					: items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
				}


			</div>
		</>
	)
}

export default HomePage