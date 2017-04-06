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
    public class RAController : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly IRAService _raService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("ra")]
        [HttpGet]
        public List<RA> List()
        {
            return _raService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("ra/{id:int}")]
        public RA Get(int id)
        {
            return _raService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="ra">The ras.</param>
        /// <returns></returns>
        [Route("ra")]
        [HttpPut]
        public RA Update(RA ra)
        {
            return _raService.Update(ra);
        }
		/// <summary>
        /// Creates the specified RA.
        /// </summary>
        /// <param name="ra">The ra.</param>
        /// <returns></returns>
        [Route("ra")]
        [HttpPost]
        public RA Create(RA ra)
        {
            return _raService.Create(ra);
        }
        /// <summary>
        /// Deletes the specified ra.
        /// </summary>
        /// <param name="ra">The ra.</param>
        [Route("ra")]
        [HttpDelete]
        public void Delete(RA ra)
        {
            _raService.Delete(ra);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="raService"></param>
        #region C...tor
        public RAController(IRAService raService)
        {
            _raService = raService;
        }
        #endregion
    }
}
