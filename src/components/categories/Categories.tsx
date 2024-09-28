import { useQuery } from "convex/react"
import { useEffect, useState } from "react"
import { FaFire } from "react-icons/fa"
import { GiConverseShoe } from "react-icons/gi"
import { IoShirtSharp } from "react-icons/io5"
import { PiPantsFill } from "react-icons/pi"
import { api } from "../../../convex/_generated/api"
import "./categories.scss"

interface CategoryUI {
  name: string;
  isActive: boolean;
  icon: JSX.Element;
  categoryId: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<CategoryUI[]>([])

  const categoriesQuery = useQuery(api.index.categories)

  const handleOnClick = (index: number) => {
    const newCat = [...categories]
    const currentActive = newCat.findIndex((item) => item.isActive)
    newCat[currentActive].isActive = false
    newCat[index].isActive = true

    setCategories(newCat)
  }

  useEffect(() => {

    // @ts-expect-error bruhhu ahhaha
    const categoriesUI: CategoryUI[] = categoriesQuery?.map((category) => {
      switch (category.name) {
        case "Shoes":
          return {
            name: category.name,
            isActive: false,
            icon: <GiConverseShoe size={25} className="icon" />,
            categoryId: category.id
          }
          case "Pants":
            return {
              name: category.name,
              isActive: false,
              icon: <PiPantsFill size={25} className="icon" />,
              categoryId: category.id
            }
            case "Tops":
              return {
                name: category.name,
                isActive: false,
                icon: <IoShirtSharp size={25} className="icon" />,
                categoryId: category.id
                }
        default:
          throw new Error("categories error");
      }
    })

    if(categoriesUI) {
      setCategories([
        {
          name: 'Offers',
          isActive: true,
          icon: <FaFire size={25} className="icon" />,
          categoryId: ''
        },
        ...categoriesUI,
      ])
    }
  }, [categoriesQuery])

  return (
    <div className="categories">
      {
        categoriesQuery ? (
          categories?.map((category, index) => (
            <Category
              category={category.name}
              isActive={category.isActive}
              handleOnClick={handleOnClick}
              icon={category.icon}
              index={index}
              key={index}
            />
          ))
        ) : (
          <p>Loading...</p>
        )
      }
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
