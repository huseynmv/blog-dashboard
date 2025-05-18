import Blogs from "./components/blog/blog-list"
import Charts from "./components/chart"

const App = () => {
  return (
    <div className="container">
      <Charts/>
      <Blogs/>
    </div>
  )
}

export default App