using Cidob.Model.Model;
using System.Collections.Generic;
using Cidob.Storage.Base;
using Cidob.Storage.Context;


namespace Cidob.Storage.Implementation
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Cidob.Storage.Base.StorageBase{Cidob.Model.Model.Cover, System.Int32}" />
    public class CoverStorage : StorageBase<Cover,int>
    {
        #region Overrides of StorageBase<CoverStorage,int>

        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns></returns>
        public override IEnumerable<Cover> GetAll()
        {

            return this.DbContext.Set<Cover>()
				.Include("Product")
;
        }

        #endregion

        #region Overrides of StorageBase<Cover,int>

        /// <summary>
        /// Gets the specified value.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns></returns>
        public override Cover Get(int value)
        {

            using (var ctx = new CidobContext())
            {
                var entry = ctx.Set<Cover>().Find(value);
				ctx.Entry(entry).Reference(t => t.Product).Load();

                return entry;
            }
        }

        #endregion

    }
}