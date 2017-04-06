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
    public class DigitalController : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly IDigitalService _digitalService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("digital")]
        [HttpGet]
        public List<Digital> List()
        {
            return _digitalService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("digital/{id:int}")]
        public Digital Get(int id)
        {
            return _digitalService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="digital">The digitals.</param>
        /// <returns></returns>
        [Route("digital")]
        [HttpPut]
        public Digital Update(Digital digital)
        {
            return _digitalService.Update(digital);
        }
		/// <summary>
        /// Creates the specified Digital.
        /// </summary>
        /// <param name="digital">The digital.</param>
        /// <returns></returns>
        [Route("digital")]
        [HttpPost]
        public Digital Create(Digital digital)
        {
            return _digitalService.Create(digital);
        }
        /// <summary>
        /// Deletes the specified digital.
        /// </summary>
        /// <param name="digital">The digital.</param>
        [Route("digital")]
        [HttpDelete]
        public void Delete(Digital digital)
        {
            _digitalService.Delete(digital);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="digitalService"></param>
        #region C...tor
        public DigitalController(IDigitalService digitalService)
        {
            _digitalService = digitalService;
        }
        #endregion
    }
}
