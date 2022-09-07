import React, { useState } from 'react'
import PropsTypes from 'prop-types'
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onSumit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length <= 1) return;
        // onAddCategori((categories) => [inputValue,...categories]);
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    const onInputChange = ({ target })  => {
        setInputValue(target.value)
    }


  return (
    <form onSubmit={onSumit} aria-label="form">
        <input 
        type="text" 
        placeholder='Buscar Gifts'
        value={inputValue}
        onChange={onInputChange}
        />
    </form>    
)
}

// PropsTypes
AddCategory.propTypes = {
    onNewCategory:PropsTypes.func.isRequired,
}