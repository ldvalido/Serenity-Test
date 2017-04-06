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
    public class GenderController : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly IGenderService _genderService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("gender")]
        [HttpGet]
        public List<Gender> List()
        {
            return _genderService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("gender/{id:int}")]
        public Gender Get(int id)
        {
            return _genderService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="gender">The genders.</param>
        /// <returns></returns>
        [Route("gender")]
        [HttpPut]
        public Gender Update(Gender gender)
        {
            return _genderService.Update(gender);
        }
		/// <summary>
        /// Creates the specified Gender.
        /// </summary>
        /// <param name="gender">The gender.</param>
        /// <returns></returns>
        [Route("gender")]
        [HttpPost]
        public Gender Create(Gender gender)
        {
            return _genderService.Create(gender);
        }
        /// <summary>
        /// Deletes the specified gender.
        /// </summary>
        /// <param name="gender">The gender.</param>
        [Route("gender")]
        [HttpDelete]
        public void Delete(Gender gender)
        {
            _genderService.Delete(gender);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="genderService"></param>
        #region C...tor
        public GenderController(IGenderService genderService)
        {
            _genderService = genderService;
        }
        #endregion
    }
}
