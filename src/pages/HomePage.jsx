import axios from 'axios'
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/Categories/Categories'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Skeleton from '../components/Skeleton/Skeleton'
import Sort from '../components/Sort/Sort'
import { setCategoryId } from '../redux/slices/filterSlice.js'


const HomePage = () => {

	const dispatch = useDispatch()
	const categoryId = useSelector(state => state.filter.categoryId)
	const sortType = useSelector(state => state.filter.sort.sortProperty)
	const searchValue = useSelector(state => state.filter.searchValue)

	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id))
	}


	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)

		const order = sortType.includes('-') ? 'asc' : 'desc'
		const sortBy = sortType.replace('-', '')
		const category = categoryId > 0 ? `category=${categoryId}` : ''


		// fetch(`https://64c232d1eb7fd5d6ebcf68ff.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
		// 	.then(res => res.json())
		// 	.then(json => {
		// 		setItems(json)
		// 		setIsLoading(false)


		// 		// setTimeout(() => {
		// 		// 	setItems(json)
		// 		// 	setIsLoading(false)
		// 		// }, 1000)
		// 	})

		axios.get('https://64c232d1eb7fd5d6ebcf68ff.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}')
			.then(res => {
				console.log(res)
				setItems(res.data)
				setIsLoading(false)
			})




		window.scrollTo(0, 0)
	}, [categoryId, sortType])


	const pizzas = items.filter(obj => {
		if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
			return true
		}

		return false
	}).map((obj) => <PizzaBlock key={obj.id} {...obj} />)

	return (
		<>
			<div className="content__top">
				<Categories categoryId={categoryId} setCategoryId={onChangeCategory} />

				<Sort />

			</div>

			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoading
					? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
					: pizzas
				}
			</div>

		</>
	)
}

export default HomePage