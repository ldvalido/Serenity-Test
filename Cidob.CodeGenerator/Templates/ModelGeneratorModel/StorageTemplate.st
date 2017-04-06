using Cidob.Model.Model;
using System.Collections.Generic;
using Cidob.Storage.Base;
using Cidob.Storage.Context;


namespace Cidob.Storage.Implementation
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Cidob.Storage.Base.StorageBase{Cidob.Model.Model.$EntityName$, System.Int32}" />
    public class $EntityName$Storage : StorageBase<$EntityName$,int>
    {
		$if(HasForeignKeys)$
        #region Overrides of StorageBase<$EntityName$Storage,int>

        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns></returns>
        public override IEnumerable<$EntityName$> GetAll()
        {

            return this.DbContext.Set<$EntityName$>()
				$foreignKeys:{fk|
.Include("$fk.RefTableName$")
}$;
        }

        #endregion

        #region Overrides of StorageBase<$EntityName$,int>

        /// <summary>
        /// Gets the specified value.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns></returns>
        public override $EntityName$ Get(int value)
        {

            using (var ctx = new CidobContext())
            {
                var entry = ctx.Set<$EntityName$>().Find(value);
				$foreignKeys:{fk|
ctx.Entry(entry).Reference(t => t.$fk.RefTableName$).Load();
}$
                return entry;
            }
        }

        #endregion
		$endif$
   
    }
}