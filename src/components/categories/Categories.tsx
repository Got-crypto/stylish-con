import { useState } from "react"
import { FaFire } from "react-icons/fa"
import { GiConverseShoe } from "react-icons/gi"
import { IoShirtSharp } from "react-icons/io5"
import { PiPantsFill } from "react-icons/pi"
import "./categories.scss"

export default function Categories() {
  const [categories, setCategories] = useState([
    {
      name: 'Popular',
      isActive: true,
      icon: <FaFire size={25} />
    },
    {
      name: 'Tops',
      isActive: false,
      icon: <IoShirtSharp size={25} />
    },
    {
      name: 'Bottoms',
      isActive: false,
      icon: <PiPantsFill size={25} />
    },
    {
      name: 'Shoes',
      isActive: false,
      icon: <GiConverseShoe size={25} />
    }
  ])

  const handleOnClick = (index: number) => {
    const newCat = [...categories]
    const currentActive = newCat.findIndex((item) => item.isActive)
    newCat[currentActive].isActive = false
    newCat[index].isActive = true

    setCategories(newCat)
  }

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <Category
          category={category.name}
          isActive={category.isActive}
          handleOnClick={handleOnClick}
          icon={category.icon}
          index={index}
          key={index}
        />
      ))}
    </div>
  )
}

interface Props {
  category: string;
  isActive: boolean;
  handleOnClick: (index: number) => void;
  icon: JSX.Element;
  index: number;
}

const Category = ({category, isActive, handleOnClick, icon, index}: Props) => {
  return (
    <button onClick={() => handleOnClick(index)} className={`category ${isActive && 'active'}`}>
      <span>
        {icon}
      </span>
      {isActive && (
        <p>{category}</p>
      )}
    </button>
  )
}
