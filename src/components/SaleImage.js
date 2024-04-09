import salesimage from "../assets/images/sales-image.jpg"
function SaleImage() {
    return (
        <div className="sale-image">
        <img src={salesimage} alt="sales Image" />
        <div className="sale-image__offer">
          <h2>Udemy Flash Sale! 24 hours to save. </h2>
          <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn</p>
        </div>
      </div>
    )
}
export default SaleImage