import React, { useEffect, useState } from "react"
import Categories from './components/Categories/Categories'
import Header from './components/Header/Header'
import PizzaBlock from './components/PizzaBlock/PizzaBlock'
import Skeleton from './components/Skeleton/Skeleton'
import Sort from './components/Sort/Sort'
import './scss/app.scss'
import pizzas from './assets/pizzas.json'


const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   fetch('https://64c232d1eb7fd5d6ebcf68ff.mockapi.io/items')
  //     .then(res => res.json())
  //     .then(json => {
  //       setTimeout(() => {
  //         setItems(json)
  //         setIsLoading(false)
  //       }, 1000)
  //     })
  // }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />

            <Sort />

          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
              : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
            }


          </div>
        </div>
      </div>
    </div>
  )
}

export default App
