using Cidob.Domain.Base;
using Cidob.Domain.Contract;
using Cidob.Model.Model;

namespace Cidob.Domain.Implementation
{
    public class ShapeService : CrudService<Shape,int>,IShapeService
    {
    }
}
