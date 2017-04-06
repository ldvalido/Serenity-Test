using Cidob.Model.Model;
using System.Collections.Generic;
using Cidob.Storage.Base;
using Cidob.Storage.Context;


namespace Cidob.Storage.Implementation
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Cidob.Storage.Base.StorageBase{Cidob.Model.Model.TransversalArch, System.Int32}" />
    public class TransversalArchStorage : StorageBase<TransversalArch,int>
    {
        #region Overrides of StorageBase<TransversalArchStorage,int>

        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns></returns>
        public override IEnumerable<TransversalArch> GetAll()
        {

            return this.DbContext.Set<TransversalArch>()
				.Include("Product")
;
        }

        #endregion

        #region Overrides of StorageBase<TransversalArch,int>

        /// <summary>
        /// Gets the specified value.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns></returns>
        public override TransversalArch Get(int value)
        {

            using (var ctx = new CidobContext())
            {
                var entry = ctx.Set<TransversalArch>().Find(value);
				ctx.Entry(entry).Reference(t => t.Product).Load();

                return entry;
            }
        }

        #endregion

    }
}