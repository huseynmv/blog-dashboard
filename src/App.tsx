import Blogs from "./components/blog/blog-list"
import Charts from "./components/chart"

const App = () => {
  return (
    <div className="container md:!px-[50px] sm:!px-[20px]">
      <Charts/>
      <Blogs/>
    </div>
  )
}

export default App