using Cidob.Model.Model;
using System.Collections.Generic;
using Cidob.Storage.Base;
using Cidob.Storage.Context;


namespace Cidob.Storage.Implementation
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Cidob.Storage.Base.StorageBase{Cidob.Model.Model.Olive, System.Int32}" />
    public class OliveStorage : StorageBase<Olive,int>
    {
        #region Overrides of StorageBase<OliveStorage,int>

        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns></returns>
        public override IEnumerable<Olive> GetAll()
        {

            return this.DbContext.Set<Olive>()
				.Include("Product")
;
        }

        #endregion

        #region Overrides of StorageBase<Olive,int>

        /// <summary>
        /// Gets the specified value.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns></returns>
        public override Olive Get(int value)
        {

            using (var ctx = new CidobContext())
            {
                var entry = ctx.Set<Olive>().Find(value);
				ctx.Entry(entry).Reference(t => t.Product).Load();

                return entry;
            }
        }

        #endregion

    }
}