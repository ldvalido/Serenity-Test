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
    public class OnlineFeetController : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly IOnlineFeetService _onlinefeetService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("onlinefeet")]
        [HttpGet]
        public List<OnlineFeet> List()
        {
            return _onlinefeetService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("onlinefeet/{id:int}")]
        public OnlineFeet Get(int id)
        {
            return _onlinefeetService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="onlinefeet">The onlinefeets.</param>
        /// <returns></returns>
        [Route("onlinefeet")]
        [HttpPut]
        public OnlineFeet Update(OnlineFeet onlinefeet)
        {
            return _onlinefeetService.Update(onlinefeet);
        }
		/// <summary>
        /// Creates the specified OnlineFeet.
        /// </summary>
        /// <param name="onlinefeet">The onlinefeet.</param>
        /// <returns></returns>
        [Route("onlinefeet")]
        [HttpPost]
        public OnlineFeet Create(OnlineFeet onlinefeet)
        {
            return _onlinefeetService.Create(onlinefeet);
        }
        /// <summary>
        /// Deletes the specified onlinefeet.
        /// </summary>
        /// <param name="onlinefeet">The onlinefeet.</param>
        [Route("onlinefeet")]
        [HttpDelete]
        public void Delete(OnlineFeet onlinefeet)
        {
            _onlinefeetService.Delete(onlinefeet);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="onlinefeetService"></param>
        #region C...tor
        public OnlineFeetController(IOnlineFeetService onlinefeetService)
        {
            _onlinefeetService = onlinefeetService;
        }
        #endregion
    }
}
