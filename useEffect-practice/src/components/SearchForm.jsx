import { React } from 'react'

const SearchForm = ({ handleSubmit }) => {
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    <label>
                      <p>User Name</p>
                      <input type="text" name="user" placeholder='user'
                       />
                    </label>
                </fieldset>
                <button>Search user</button>
            </form>
        </>
    );
}

export default SearchForm
