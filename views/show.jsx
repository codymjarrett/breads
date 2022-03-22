const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread}) {
    console.log(bread)

    return (
        <Default>
        <a href="/breads">Go home</a>
        <div className='show-container'>
          <div>
            <h3>{bread.name}</h3>
          <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
            <input type='submit' value="DELETE"/>
          </form>
          <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
          <p>
            and it
            {
              bread.hasGluten
              ? <span> does </span>
              : <span> does NOT </span>
            }
            have gluten.
          </p>
          <div>
          <img src={bread.image} alt={bread.name} />
          <p>{bread.getBakedBy()}</p>

          </div>
          </div>
        </div>
      </Default>
    )
}

module.exports = Show