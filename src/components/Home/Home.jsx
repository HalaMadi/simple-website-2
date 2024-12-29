import './style.css'
const Home=()=> {
  return (
    <div className="home d-flex flex-column align-items-center justify-content-center vh-100 gap-2">
      <h1>Mini Store</h1>
      <p className="w-50 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque et modi unde nihil, eum esse sed maiores in amet aspernatur ullam! Incidunt excepturi quasi ducimus aut impedit odio. Eligendi, numquam?</p>
      <div className="btnGroup d-flex gap-2">
        <button className="shope btn btn-outline-none">Shope now</button>
        <button className="find btn   btn-outline-secondary">Find more</button>
      </div>
    </div>
  )
}

export default Home