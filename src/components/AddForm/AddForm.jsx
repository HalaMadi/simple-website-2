

const AddForm = () => {
  return (
    <div className="container my-3">
      <h2 className="text-center py-4">Add Product</h2>
      <form className=" w-50 mx-auto">
        <div className=" mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="productName"  />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Product Price</label>
          <input type="email" className="form-control" id="productPrice" />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image</label>
          <input type="file" className="form-control" id="image"  />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label" style={{ fontSize: '0.9rem' }}>
            Product Description
          </label>
          <textarea
            className="form-control"
            id="productDescription"
            rows="3"
            placeholder="Enter product description"
          ></textarea>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}

export default AddForm