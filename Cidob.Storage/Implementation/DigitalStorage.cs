using Cidob.Model.Model;
using System.Collections.Generic;
using Cidob.Storage.Base;
using Cidob.Storage.Context;


namespace Cidob.Storage.Implementation
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Cidob.Storage.Base.StorageBase{Cidob.Model.Model.Digital, System.Int32}" />
    public class DigitalStorage : StorageBase<Digital,int>
    {
        #region Overrides of StorageBase<DigitalStorage,int>

        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns></returns>
        public override IEnumerable<Digital> GetAll()
        {

            return this.DbContext.Set<Digital>()
				.Include("Product")
;
        }

        #endregion

        #region Overrides of StorageBase<Digital,int>

        /// <summary>
        /// Gets the specified value.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns></returns>
        public override Digital Get(int value)
        {

            using (var ctx = new CidobContext())
            {
                var entry = ctx.Set<Digital>().Find(value);
				ctx.Entry(entry).Reference(t => t.Product).Load();

                return entry;
            }
        }

        #endregion

    }
}