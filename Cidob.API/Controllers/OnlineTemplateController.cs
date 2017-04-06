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
    public class OnlineTemplateController : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly IOnlineTemplateService _onlinetemplateService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("onlinetemplate")]
        [HttpGet]
        public List<OnlineTemplate> List()
        {
            return _onlinetemplateService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("onlinetemplate/{id:int}")]
        public OnlineTemplate Get(int id)
        {
            return _onlinetemplateService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="onlinetemplate">The onlinetemplates.</param>
        /// <returns></returns>
        [Route("onlinetemplate")]
        [HttpPut]
        public OnlineTemplate Update(OnlineTemplate onlinetemplate)
        {
            return _onlinetemplateService.Update(onlinetemplate);
        }
		/// <summary>
        /// Creates the specified OnlineTemplate.
        /// </summary>
        /// <param name="onlinetemplate">The onlinetemplate.</param>
        /// <returns></returns>
        [Route("onlinetemplate")]
        [HttpPost]
        public OnlineTemplate Create(OnlineTemplate onlinetemplate)
        {
            return _onlinetemplateService.Create(onlinetemplate);
        }
        /// <summary>
        /// Deletes the specified onlinetemplate.
        /// </summary>
        /// <param name="onlinetemplate">The onlinetemplate.</param>
        [Route("onlinetemplate")]
        [HttpDelete]
        public void Delete(OnlineTemplate onlinetemplate)
        {
            _onlinetemplateService.Delete(onlinetemplate);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="onlinetemplateService"></param>
        #region C...tor
        public OnlineTemplateController(IOnlineTemplateService onlinetemplateService)
        {
            _onlinetemplateService = onlinetemplateService;
        }
        #endregion
    }
}
