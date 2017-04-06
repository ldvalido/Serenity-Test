using Cidob.Model.Model;
using System.Collections.Generic;
using Cidob.Storage.Base;
using Cidob.Storage.Context;


namespace Cidob.Storage.Implementation
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Cidob.Storage.Base.StorageBase{Cidob.Model.Model.OnlineTemplate, System.Int32}" />
    public class OnlineTemplateStorage : StorageBase<OnlineTemplate,int>
    {
        #region Overrides of StorageBase<OnlineTemplateStorage,int>

        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns></returns>
        public override IEnumerable<OnlineTemplate> GetAll()
        {

            return this.DbContext.Set<OnlineTemplate>()
				.Include("Base")
				.Include("Cover")
				.Include("Gender")
				.Include("Shape")
				.Include("Users")
;
        }

        #endregion

        #region Overrides of StorageBase<OnlineTemplate,int>

        /// <summary>
        /// Gets the specified value.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns></returns>
        public override OnlineTemplate Get(int value)
        {

            using (var ctx = new CidobContext())
            {
                var entry = ctx.Set<OnlineTemplate>().Find(value);
				ctx.Entry(entry).Reference(t => t.Base).Load();
				ctx.Entry(entry).Reference(t => t.Cover).Load();
				ctx.Entry(entry).Reference(t => t.Gender).Load();
				ctx.Entry(entry).Reference(t => t.Shape).Load();

                return entry;
            }
        }

        #endregion

    }
}