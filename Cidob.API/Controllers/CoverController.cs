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
    public class CoverController : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly ICoverService _coverService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("cover")]
        [HttpGet]
        public List<Cover> List()
        {
            return _coverService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("cover/{id:int}")]
        public Cover Get(int id)
        {
            return _coverService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="cover">The covers.</param>
        /// <returns></returns>
        [Route("cover")]
        [HttpPut]
        public Cover Update(Cover cover)
        {
            return _coverService.Update(cover);
        }
		/// <summary>
        /// Creates the specified Cover.
        /// </summary>
        /// <param name="cover">The cover.</param>
        /// <returns></returns>
        [Route("cover")]
        [HttpPost]
        public Cover Create(Cover cover)
        {
            return _coverService.Create(cover);
        }
        /// <summary>
        /// Deletes the specified cover.
        /// </summary>
        /// <param name="cover">The cover.</param>
        [Route("cover")]
        [HttpDelete]
        public void Delete(Cover cover)
        {
            _coverService.Delete(cover);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="coverService"></param>
        #region C...tor
        public CoverController(ICoverService coverService)
        {
            _coverService = coverService;
        }
        #endregion
    }
}
