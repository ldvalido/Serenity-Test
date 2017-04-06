using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Cidob.Domain.Contract;
using Cidob.Model.Model;

namespace Cidob.API.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="System.Web.Http.ApiController" />
    [RoutePrefix("")]
    public class ProductController : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly IProductService _productService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("product")]
        [HttpGet]
        public List<Product> List()
        {
            return _productService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("product/{id:int}")]
        public Product Get(int id)
        {
            return _productService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="product">The products.</param>
        /// <returns></returns>
        [Route("product")]
        [HttpPut]
        public Product Update(Product product)
        {
            return _productService.Update(product);
        }
		/// <summary>
        /// Creates the specified Product.
        /// </summary>
        /// <param name="product">The product.</param>
        /// <returns></returns>
        [Route("product")]
        [HttpPost]
        public Product Create(Product product)
        {
            return _productService.Create(product);
        }
        /// <summary>
        /// Deletes the specified product.
        /// </summary>
        /// <param name="product">The product.</param>
        [Route("product")]
        [HttpDelete]
        public void Delete(Product product)
        {
            _productService.Delete(product);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="productService"></param>
        #region C...tor
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }
        #endregion
    }
}
