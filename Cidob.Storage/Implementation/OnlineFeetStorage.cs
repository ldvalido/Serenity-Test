using Cidob.Model.Model;
using System.Collections.Generic;
using Cidob.Storage.Base;
using Cidob.Storage.Context;


namespace Cidob.Storage.Implementation
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Cidob.Storage.Base.StorageBase{Cidob.Model.Model.OnlineFeet, System.Int32}" />
    public class OnlineFeetStorage : StorageBase<OnlineFeet,int>
    {
        #region Overrides of StorageBase<OnlineFeetStorage,int>

        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns></returns>
        public override IEnumerable<OnlineFeet> GetAll()
        {

            return this.DbContext.Set<OnlineFeet>()
				.Include("Arch")
				.Include("Arch")
				.Include("CT")
				.Include("Digital")
				.Include("Heel")
				.Include("Olive")
				.Include("RA")
;
        }

        #endregion

        #region Overrides of StorageBase<OnlineFeet,int>

        /// <summary>
        /// Gets the specified value.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns></returns>
        public override OnlineFeet Get(int value)
        {

            using (var ctx = new CidobContext())
            {
                var entry = ctx.Set<OnlineFeet>().Find(value);
				ctx.Entry(entry).Reference(t => t.InternalArch).Load();
				ctx.Entry(entry).Reference(t => t.ExternalArch).Load();
				ctx.Entry(entry).Reference(t => t.CT).Load();
				ctx.Entry(entry).Reference(t => t.Digital).Load();
				ctx.Entry(entry).Reference(t => t.Heel).Load();
				ctx.Entry(entry).Reference(t => t.Olive).Load();
				ctx.Entry(entry).Reference(t => t.RA).Load();

                return entry;
            }
        }

        #endregion

    }
}