import { Categories, Products, SearchInput } from "../"

import "./dashboard.scss"

export default function Dashboard() {
  return (
    <div className="dashboard">
      <SearchInput />
      <Categories />
      <Products />
    </div>
  )
}
