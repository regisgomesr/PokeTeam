import React from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import './styles.css'

export default function Navbar({ next, prev, handleSearch, getSearchData }) {
    return (
        <div className='buttons-container'>
            <button 
                onClick={() => {
                    prev();
            }}>
                <FiArrowLeft size={20} color='#FFF' />
            </button>

            <input 
                type='text'
                onChange={e => {
                    handleSearch(e.target.value);
                }} 
                placeholder='ex: pikachu'
            />

            <button
                className='search-button'
                onClick={e => {
                    getSearchData(e);
                }}    
            >
                Pesquisar
            </button>

            <button
                onClick={() => {
                    next();
                }}
            >
                <FiArrowRight size={20} color='#FFF' />
            </button>

        </div>
    )
}