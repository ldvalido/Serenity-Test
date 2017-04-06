using BaseRow = Cidob.Model.Model.Base;
using System.Collections.Generic;
using Cidob.Storage.Base;
using Cidob.Storage.Context;


namespace Cidob.Storage.Implementation
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Cidob.Storage.Base.StorageBase{Cidob.Model.Model.Base, System.Int32}" />
    public class BaseStorage : StorageBase<BaseRow, int>
    {
        #region Overrides of StorageBase<BaseStorage,int>

        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns></returns>
        public override IEnumerable<BaseRow> GetAll()
        {

            return this.DbContext.Set<BaseRow>()
				.Include("Product")
;
        }

        #endregion

        #region Overrides of StorageBase<Base,int>

        /// <summary>
        /// Gets the specified value.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns></returns>
        public override BaseRow Get(int value)
        {

            using (var ctx = new CidobContext())
            {
                var entry = ctx.Set<BaseRow>().Find(value);
				ctx.Entry(entry).Reference(t => t.Product).Load();

                return entry;
            }
        }

        #endregion

    }
}