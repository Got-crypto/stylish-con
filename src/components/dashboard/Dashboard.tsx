import { useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api"
import { Product } from "../../global"

export default function Dashboard() {

  const products: Product[] = useQuery(api.index.products) as Product[]


  return (
    <div>
      <ul>
        {products?.map((product, index) => (
          <li key={index}>{product.productName}</li>
        ))}
      </ul>
    </div>
  )
}
