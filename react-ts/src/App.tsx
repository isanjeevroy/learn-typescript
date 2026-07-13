import { ChaiCard } from "./components/ChaiCard.tsx"
import { Counter } from "./components/Counter.tsx"

import ChaiList from "./components/ChaiList.tsx"

import type { Chai } from "./types.ts"
import OrderForm from "./components/OrderForm.tsx"
import Card from "./components/Card.tsx"

const menu: Chai[] = [
  { id: 1, name: "Masala", price: 25 },
  { id: 2, name: "Ginger", price: 30 },
  { id: 3, name: "Lemon", price: 50 },
]

function App() {

  return (
    <div>
      <h1>Hello Bacho</h1>

      <ChaiCard name="Headphones" price={5000} />

      <ChaiCard name="Iphone" price={80000} />

      <Counter />

      <ChaiList items={menu} />

      <OrderForm onSubmit={(order) => { console.log("Placed", order.name, order.cups) }} />

      <Card title="Chai Aur TypeScript" footer={<button>Order Now</button>} />
    </div>

  )
}

export default App
