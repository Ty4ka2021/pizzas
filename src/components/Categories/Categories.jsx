import React, { useState } from "react"

const Categories = () => {

  const pizzas = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  const [pizzasIndex, setPizzasIndex] = useState(0)

  return (
    <div className="categories">
      <ul>
        {pizzas.map((value, i) => (
          <li key={i} onClick={() => setPizzasIndex(i)} className={i === pizzasIndex ? "active" : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div >
  )
}

export default Categories