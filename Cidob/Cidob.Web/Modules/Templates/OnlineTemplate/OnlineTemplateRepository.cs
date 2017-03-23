

using Serenity.Data.Mapping;

namespace Cidob.Templates.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.OnlineTemplateRow;

    public class OnlineTemplateRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            #region Overrides of SaveRequestHandler<OnlineTemplateRow,SaveRequest<OnlineTemplateRow>,SaveResponse>

            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                if (IsCreate)
                {
                    Row.IdUserCreation = ((UserDefinition) Authorization.UserDefinition).UserId;
                }
            }

            #endregion
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> {
            #region Overrides of ListRequestHandler<OnlineTemplateRow,ListRequest,ListResponse<OnlineTemplateRow>>

            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);
                query.Where(expression: $"IdUserCreation = {((UserDefinition) Authorization.UserDefinition).UserId}");
            }

            #endregion
        }
    }
}