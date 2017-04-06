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
    public class OliveController : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly IOliveService _oliveService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("olive")]
        [HttpGet]
        public List<Olive> List()
        {
            return _oliveService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("olive/{id:int}")]
        public Olive Get(int id)
        {
            return _oliveService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="olive">The olives.</param>
        /// <returns></returns>
        [Route("olive")]
        [HttpPut]
        public Olive Update(Olive olive)
        {
            return _oliveService.Update(olive);
        }
		/// <summary>
        /// Creates the specified Olive.
        /// </summary>
        /// <param name="olive">The olive.</param>
        /// <returns></returns>
        [Route("olive")]
        [HttpPost]
        public Olive Create(Olive olive)
        {
            return _oliveService.Create(olive);
        }
        /// <summary>
        /// Deletes the specified olive.
        /// </summary>
        /// <param name="olive">The olive.</param>
        [Route("olive")]
        [HttpDelete]
        public void Delete(Olive olive)
        {
            _oliveService.Delete(olive);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="oliveService"></param>
        #region C...tor
        public OliveController(IOliveService oliveService)
        {
            _oliveService = oliveService;
        }
        #endregion
    }
}
