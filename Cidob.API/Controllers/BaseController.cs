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
    public class BaseController : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly IBaseService _baseService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("base")]
        [HttpGet]
        public List<Base> List()
        {
            return _baseService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("base/{id:int}")]
        public Base Get(int id)
        {
            return _baseService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="baseEntity">The bases.</param>
        /// <returns></returns>
        [Route("base")]
        [HttpPut]
        public Base Update(Base baseEntity)
        {
            return _baseService.Update(baseEntity);
        }
        /// <summary>
        /// Creates the specified Base.
        /// </summary>
        /// <param name="baseEntity">The base.</param>
        /// <returns></returns>
        [Route("base")]
        [HttpPost]
        public Base Create(Base baseEntity)
        {
            return _baseService.Create(baseEntity);
        }
        /// <summary>
        /// Deletes the specified base.
        /// </summary>
        /// <param name="baseEntity">The base.</param>
        [Route("base")]
        [HttpDelete]
        public void Delete(Base baseEntity)
        {
            _baseService.Delete(baseEntity);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="baseService"></param>
        #region C...tor
        public BaseController(IBaseService baseService)
        {
            _baseService = baseService;
        }
        #endregion
    }
}
