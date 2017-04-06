using Cidob.Model.Model;
using System.Collections.Generic;
using Cidob.Storage.Base;
using Cidob.Storage.Context;


namespace Cidob.Storage.Implementation
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Cidob.Storage.Base.StorageBase{Cidob.Model.Model.Shape, System.Int32}" />
    public class ShapeStorage : StorageBase<Shape,int>
    {
        #region Overrides of StorageBase<ShapeStorage,int>

        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns></returns>
        public override IEnumerable<Shape> GetAll()
        {

            return this.DbContext.Set<Shape>()
				.Include("Product")
;
        }

        #endregion

        #region Overrides of StorageBase<Shape,int>

        /// <summary>
        /// Gets the specified value.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns></returns>
        public override Shape Get(int value)
        {

            using (var ctx = new CidobContext())
            {
                var entry = ctx.Set<Shape>().Find(value);
				ctx.Entry(entry).Reference(t => t.Product).Load();

                return entry;
            }
        }

        #endregion

    }
}