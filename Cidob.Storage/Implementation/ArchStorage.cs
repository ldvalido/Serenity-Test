using Cidob.Model.Model;
using System.Collections.Generic;
using Cidob.Storage.Base;
using Cidob.Storage.Context;


namespace Cidob.Storage.Implementation
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Cidob.Storage.Base.StorageBase{Cidob.Model.Model.Arch, System.Int32}" />
    public class ArchStorage : StorageBase<Arch,int>
    {
        #region Overrides of StorageBase<ArchStorage,int>

        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns></returns>
        public override IEnumerable<Arch> GetAll()
        {

            return this.DbContext.Set<Arch>()
				.Include("Product")
;
        }

        #endregion

        #region Overrides of StorageBase<Arch,int>

        /// <summary>
        /// Gets the specified value.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns></returns>
        public override Arch Get(int value)
        {

            using (var ctx = new CidobContext())
            {
                var entry = ctx.Set<Arch>().Find(value);
				ctx.Entry(entry).Reference(t => t.Product).Load();

                return entry;
            }
        }

        #endregion

    }
}