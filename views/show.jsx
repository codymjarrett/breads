const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
    console.log(bread)
    console.log(index)

    return (
        <Default>
        <a href="/breads">Go home</a>
        <div className='show-container'>
          <div>
            <h3>{bread.name}</h3>
          <form action={`/breads/${index}?_method=DELETE`} method="POST">
            <input type='submit' value="DELETE"/>
          </form>
          <a href={`/breads/${index}/edit`}><button>Edit</button></a>
          <p>
            and it
            {
              bread.hasGluten
              ? <span> does </span>
              : <span> does NOT </span>
            }
            have gluten.
          </p>
          <h4>Ingredients:</h4>
          <ul>
          {bread.ingredients.map((ingredient, index) =><li key={index}>{ingredient}</li>
          )}
          </ul>
          <h4>Directions:</h4>
          <ol>
          {bread.directions.map((direction, index) => <li key={index}>{direction}</li>)}
          </ol>
          </div>
          <div>
          <img src={bread.image} alt={bread.name} />
          </div>
        </div>
        
      </Default>
    )
}

module.exports = Show