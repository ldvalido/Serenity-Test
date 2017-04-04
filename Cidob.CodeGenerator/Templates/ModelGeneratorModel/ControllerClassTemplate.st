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
    public class $EntityName$Controller : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly I$EntityName$Service _$EntityNameLower$Service;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("$EntityNameLower$s")]
        [HttpGet]
        public List<$EntityName$> List()
        {
            return _$EntityNameLower$Service.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("$EntityNameLower$s/{id:int}")]
        public $EntityName$ Get(int id)
        {
            return _$EntityNameLower$Service.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="$EntityNameLower$">The $EntityNameLower$s.</param>
        /// <returns></returns>
        [Route("$EntityNameLower$s")]
        [HttpPut]
        public Title Update($EntityName$ $EntityNameLower$)
        {
            return _$EntityNameLower$Service.Update($EntityNameLower$);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="$EntityNameLower$Service"></param>
        #region C...tor
        public TitleController(I$EntityName$Service $EntityNameLower$Service)
        {
            _$EntityNameLower$Service = $EntityNameLower$;
        }
        #endregion
    }
}
