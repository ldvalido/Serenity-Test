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
    public class HeelController : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly IHeelService _heelService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("heel")]
        [HttpGet]
        public List<Heel> List()
        {
            return _heelService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("heel/{id:int}")]
        public Heel Get(int id)
        {
            return _heelService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="heel">The heels.</param>
        /// <returns></returns>
        [Route("heel")]
        [HttpPut]
        public Heel Update(Heel heel)
        {
            return _heelService.Update(heel);
        }
		/// <summary>
        /// Creates the specified Heel.
        /// </summary>
        /// <param name="heel">The heel.</param>
        /// <returns></returns>
        [Route("heel")]
        [HttpPost]
        public Heel Create(Heel heel)
        {
            return _heelService.Create(heel);
        }
        /// <summary>
        /// Deletes the specified heel.
        /// </summary>
        /// <param name="heel">The heel.</param>
        [Route("heel")]
        [HttpDelete]
        public void Delete(Heel heel)
        {
            _heelService.Delete(heel);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="heelService"></param>
        #region C...tor
        public HeelController(IHeelService heelService)
        {
            _heelService = heelService;
        }
        #endregion
    }
}
