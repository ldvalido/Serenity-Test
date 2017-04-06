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
    public class CTController : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly ICTService _ctService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("ct")]
        [HttpGet]
        public List<CT> List()
        {
            return _ctService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("ct/{id:int}")]
        public CT Get(int id)
        {
            return _ctService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="ct">The cts.</param>
        /// <returns></returns>
        [Route("ct")]
        [HttpPut]
        public CT Update(CT ct)
        {
            return _ctService.Update(ct);
        }
		/// <summary>
        /// Creates the specified CT.
        /// </summary>
        /// <param name="ct">The ct.</param>
        /// <returns></returns>
        [Route("ct")]
        [HttpPost]
        public CT Create(CT ct)
        {
            return _ctService.Create(ct);
        }
        /// <summary>
        /// Deletes the specified ct.
        /// </summary>
        /// <param name="ct">The ct.</param>
        [Route("ct")]
        [HttpDelete]
        public void Delete(CT ct)
        {
            _ctService.Delete(ct);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="ctService"></param>
        #region C...tor
        public CTController(ICTService ctService)
        {
            _ctService = ctService;
        }
        #endregion
    }
}
