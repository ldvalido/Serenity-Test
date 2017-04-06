using Cidob.Domain.Base;
using Cidob.Domain.Contract;

namespace Cidob.Domain.Implementation
{
    public class BaseService : CrudService<Model.Model.Base,int>,IBaseService
    {
    }
}
