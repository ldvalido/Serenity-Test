using Cidob.Model.Model;
using System.Collections.Generic;
using Cidob.Storage.Base;
using Cidob.Storage.Context;


namespace Cidob.Storage.Implementation
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Cidob.Storage.Base.StorageBase{Cidob.Model.Model.CT, System.Int32}" />
    public class CTStorage : StorageBase<CT,int>
    {
        #region Overrides of StorageBase<CTStorage,int>

        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns></returns>
        public override IEnumerable<CT> GetAll()
        {

            return this.DbContext.Set<CT>()
				.Include("Product")
;
        }

        #endregion

        #region Overrides of StorageBase<CT,int>

        /// <summary>
        /// Gets the specified value.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns></returns>
        public override CT Get(int value)
        {

            using (var ctx = new CidobContext())
            {
                var entry = ctx.Set<CT>().Find(value);
				ctx.Entry(entry).Reference(t => t.Product).Load();

                return entry;
            }
        }

        #endregion

    }
}