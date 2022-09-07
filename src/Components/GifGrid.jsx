import { GifItem } from './GifItem'
import { useFechtGifs } from '../hooks/useFechtGifs';
import PropTypes from 'prop-types'
// import React, { useEffect, useState } from 'react'
// import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {
  
  // Custom HOOK
  const { data, isLoading } = useFechtGifs(category);

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading?<h2>Cargando</h2>:null
        }
        
        <div className='card-grid'>
          {data?.map(( image ) => (
            <GifItem 
              key={image.id}
              {...image}
            />
          ))}
        </div>
    </>
  )
}

// PropTypes
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}