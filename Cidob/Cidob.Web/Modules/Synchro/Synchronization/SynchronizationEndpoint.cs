
using System.Threading;
using Cidob.Modules.Synchro.Synchronization;

namespace Cidob.Synchro.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.SynchronizationRepository;
    using MyRow = Entities.SynchronizationRow;

    [RoutePrefix("Services/Synchro/Synchronization"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Synchro:Synchro")]
    public class SynchronizationController : ServiceEndpoint
    {
        [HttpPost]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        [HttpPost]
        public SynchroResponse Synch(IDbConnection connection, SynchroRequest request)
        {
            Thread.Sleep(2000);
            return new SynchroResponse {Result = true};
        }
    }
}
