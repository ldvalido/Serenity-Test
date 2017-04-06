using Cidob.Model.Model;
using System.Collections.Generic;
using Cidob.Storage.Base;
using Cidob.Storage.Context;


namespace Cidob.Storage.Implementation
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Cidob.Storage.Base.StorageBase{Cidob.Model.Model.RA, System.Int32}" />
    public class RAStorage : StorageBase<RA,int>
    {
        #region Overrides of StorageBase<RAStorage,int>

        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns></returns>
        public override IEnumerable<RA> GetAll()
        {

            return this.DbContext.Set<RA>()
				.Include("Product")
;
        }

        #endregion

        #region Overrides of StorageBase<RA,int>

        /// <summary>
        /// Gets the specified value.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns></returns>
        public override RA Get(int value)
        {

            using (var ctx = new CidobContext())
            {
                var entry = ctx.Set<RA>().Find(value);
				ctx.Entry(entry).Reference(t => t.Product).Load();

                return entry;
            }
        }

        #endregion

    }
}