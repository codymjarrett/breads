const React = require('react')
const Default = require('./layouts/Default')

function Index (props) {
    const breads = props.breads;
    const title = props.title;
    return (
      <Default title={title}>
          <div className="newButton">
                <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
          <ul>
          {breads.map((bread) => {
              return (
              <li key={bread.id}>
                  <a href={`/breads/${bread.id}`}>{bread.name}</a>
             </li>
              )
          })}
          </ul>
      </Default>
    )
}

module.exports = Index