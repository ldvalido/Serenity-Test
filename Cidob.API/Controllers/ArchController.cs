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
    public class ArchController : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly IArchService _archService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("arch")]
        [HttpGet]
        public List<Arch> List()
        {
            return _archService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("arch/{id:int}")]
        public Arch Get(int id)
        {
            return _archService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="arch">The archs.</param>
        /// <returns></returns>
        [Route("arch")]
        [HttpPut]
        public Arch Update(Arch arch)
        {
            return _archService.Update(arch);
        }
		/// <summary>
        /// Creates the specified Arch.
        /// </summary>
        /// <param name="arch">The arch.</param>
        /// <returns></returns>
        [Route("arch")]
        [HttpPost]
        public Arch Create(Arch arch)
        {
            return _archService.Create(arch);
        }
        /// <summary>
        /// Deletes the specified arch.
        /// </summary>
        /// <param name="arch">The arch.</param>
        [Route("arch")]
        [HttpDelete]
        public void Delete(Arch arch)
        {
            _archService.Delete(arch);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="archService"></param>
        #region C...tor
        public ArchController(IArchService archService)
        {
            _archService = archService;
        }
        #endregion
    }
}
