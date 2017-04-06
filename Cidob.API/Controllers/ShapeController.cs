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
    public class ShapeController : ApiController
    {

        /// <summary>
        /// The weather condition service
        /// </summary>
        private readonly IShapeService _shapeService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("shape")]
        [HttpGet]
        public List<Shape> List()
        {
            return _shapeService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("shape/{id:int}")]
        public Shape Get(int id)
        {
            return _shapeService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="shape">The shapes.</param>
        /// <returns></returns>
        [Route("shape")]
        [HttpPut]
        public Shape Update(Shape shape)
        {
            return _shapeService.Update(shape);
        }
		/// <summary>
        /// Creates the specified Shape.
        /// </summary>
        /// <param name="shape">The shape.</param>
        /// <returns></returns>
        [Route("shape")]
        [HttpPost]
        public Shape Create(Shape shape)
        {
            return _shapeService.Create(shape);
        }
        /// <summary>
        /// Deletes the specified shape.
        /// </summary>
        /// <param name="shape">The shape.</param>
        [Route("shape")]
        [HttpDelete]
        public void Delete(Shape shape)
        {
            _shapeService.Delete(shape);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="shapeService"></param>
        #region C...tor
        public ShapeController(IShapeService shapeService)
        {
            _shapeService = shapeService;
        }
        #endregion
    }
}
