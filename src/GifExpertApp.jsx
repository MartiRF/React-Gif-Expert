import { useState } from 'react'
import { AddCategory, GifGrid } from './Components/'


export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['Futurama','God of War']);

    // console.log(categories)
    const onAddCategories = (newCategory) => {
      // console.log(newCategory)
      if(categories.includes(newCategory)) return;
      setcategories([newCategory,...categories])
    }
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        onNewCategory={value => onAddCategories(value)}
      />
      {categories.map((item) =>(
        <GifGrid 
          key={item} 
          category={item}
        />
        ))}

    </>
  )
}
