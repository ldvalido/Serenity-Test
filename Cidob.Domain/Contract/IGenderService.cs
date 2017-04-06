using Cidob.Domain.Base;
using Cidob.Model.Model;
namespace Cidob.Domain.Contract
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Cidob.Domain.Base.ICrudService{Cidob.Model.Model.Gender}" />
    public interface IGenderService:ICrudService<Gender,int>
    {
    }
}
