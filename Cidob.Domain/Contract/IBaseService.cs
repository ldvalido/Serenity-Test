using Cidob.Domain.Base;
using BaseRow = Cidob.Model.Model.Base;
namespace Cidob.Domain.Contract
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Cidob.Domain.Base.ICrudService{Cidob.Model.Model.Base}" />
    public interface IBaseService:ICrudService<BaseRow,int>
    {
    }
}
