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
    public class TransversalArchController : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly ITransversalArchService _transversalarchService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("transversalarch")]
        [HttpGet]
        public List<TransversalArch> List()
        {
            return _transversalarchService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("transversalarch/{id:int}")]
        public TransversalArch Get(int id)
        {
            return _transversalarchService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="transversalarch">The transversalarchs.</param>
        /// <returns></returns>
        [Route("transversalarch")]
        [HttpPut]
        public TransversalArch Update(TransversalArch transversalarch)
        {
            return _transversalarchService.Update(transversalarch);
        }
		/// <summary>
        /// Creates the specified TransversalArch.
        /// </summary>
        /// <param name="transversalarch">The transversalarch.</param>
        /// <returns></returns>
        [Route("transversalarch")]
        [HttpPost]
        public TransversalArch Create(TransversalArch transversalarch)
        {
            return _transversalarchService.Create(transversalarch);
        }
        /// <summary>
        /// Deletes the specified transversalarch.
        /// </summary>
        /// <param name="transversalarch">The transversalarch.</param>
        [Route("transversalarch")]
        [HttpDelete]
        public void Delete(TransversalArch transversalarch)
        {
            _transversalarchService.Delete(transversalarch);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="transversalarchService"></param>
        #region C...tor
        public TransversalArchController(ITransversalArchService transversalarchService)
        {
            _transversalarchService = transversalarchService;
        }
        #endregion
    }
}
