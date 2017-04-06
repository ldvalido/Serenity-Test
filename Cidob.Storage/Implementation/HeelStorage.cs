using Cidob.Model.Model;
using System.Collections.Generic;
using Cidob.Storage.Base;
using Cidob.Storage.Context;


namespace Cidob.Storage.Implementation
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Cidob.Storage.Base.StorageBase{Cidob.Model.Model.Heel, System.Int32}" />
    public class HeelStorage : StorageBase<Heel,int>
    {
        #region Overrides of StorageBase<HeelStorage,int>

        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns></returns>
        public override IEnumerable<Heel> GetAll()
        {

            return this.DbContext.Set<Heel>()
				.Include("Product")
;
        }

        #endregion

        #region Overrides of StorageBase<Heel,int>

        /// <summary>
        /// Gets the specified value.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns></returns>
        public override Heel Get(int value)
        {

            using (var ctx = new CidobContext())
            {
                var entry = ctx.Set<Heel>().Find(value);
				ctx.Entry(entry).Reference(t => t.Product).Load();

                return entry;
            }
        }

        #endregion

    }
}