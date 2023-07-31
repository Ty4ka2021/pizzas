import React from "react"

const Categories = ({ categoryId, setCategoryId }) => {

  const pizzas = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>
        {pizzas.map((value, i) => (
          <li key={i} onClick={() => setCategoryId(i)} className={i === categoryId ? "active" : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div >
  )
}

export default Categories