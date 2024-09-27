import { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { GiSettingsKnobs } from "react-icons/gi"
import "./search-input.scss"

export default function SearchInput() {
  const [searchText, setSearchText] = useState("")

  return (
    <div className="container">
      <div className="input">
        <span className="icon-button">
          <BiSearch />
        </span>

        <input
          type="text"
          value={searchText}
          onChange={({target}) => setSearchText(target.value)}
          placeholder="What do you need?"
        />
      </div>

      <button type="button">
        <GiSettingsKnobs className="icon" size={35} strokeWidth={4} />
      </button>
    </div>
  )
}
