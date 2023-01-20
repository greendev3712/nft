import { sports } from "./sports"
import { SportsCategoryTitle } from "./styles/AccountElementsStyling"

const SportsCategories = ({ active, setActive }) => {
  return (
    <>
      {sports.map((sport) => (
        <div key={sport.id}>
          <SportsCategoryTitle>{sport.name}</SportsCategoryTitle>
        </div>
      ))}
    </>
  )
}

export default SportsCategories
