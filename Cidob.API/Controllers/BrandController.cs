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
    public class BrandController : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly IBrandService _brandService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("brand")]
        [HttpGet]
        public List<Brand> List()
        {
            return _brandService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("brand/{id:int}")]
        public Brand Get(int id)
        {
            return _brandService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="brand">The brands.</param>
        /// <returns></returns>
        [Route("brand")]
        [HttpPut]
        public Brand Update(Brand brand)
        {
            return _brandService.Update(brand);
        }
		/// <summary>
        /// Creates the specified Brand.
        /// </summary>
        /// <param name="brand">The brand.</param>
        /// <returns></returns>
        [Route("brand")]
        [HttpPost]
        public Brand Create(Brand brand)
        {
            return _brandService.Create(brand);
        }
        /// <summary>
        /// Deletes the specified brand.
        /// </summary>
        /// <param name="brand">The brand.</param>
        [Route("brand")]
        [HttpDelete]
        public void Delete(Brand brand)
        {
            _brandService.Delete(brand);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="brandService"></param>
        #region C...tor
        public BrandController(IBrandService brandService)
        {
            _brandService = brandService;
        }
        #endregion
    }
}
