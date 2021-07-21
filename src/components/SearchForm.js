import React from 'react'
import { useGlobalContext } from '../context'
export default function SearchForm() {
  const { setSearchTerm, searchValue, setSearchValue } = useGlobalContext()
  const searchContainer = React.useRef('')

  React.useEffect(() => {
    searchContainer.current.focus()
  }, [])

  function searchCocktail() {
    setSearchValue(searchContainer.current.value)
    setSearchTerm(searchValue)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchContainer}
            value={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}
