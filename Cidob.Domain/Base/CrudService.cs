using System.Collections.Generic;
using Cidob.Storage.Base;

namespace Cidob.Domain.Base
{
    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public abstract class CrudService<T,TS> : ICrudService<T,TS> where T : class
    {
        public IStorageBase<T,TS> StorageBase { get; set; } 
        /// <summary>
        /// Creates the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns></returns>
        public virtual T Create(T entity)
        {
            return StorageBase.Save(entity);
        }

        /// <summary>
        /// Updates the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns></returns>
        public virtual T Update(T entity)
        {
            return StorageBase.Update(entity);
        }

        /// <summary>
        /// Gets the specified key.
        /// </summary>
        /// <param name="key">The key.</param>
        /// <returns></returns>
        public T Get(TS key)
        {
            return StorageBase.Get(key);
        }

        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        public virtual IEnumerable<T> List()
        {
            return StorageBase.GetAll();
        }

        /// <summary>
        /// Deletes the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        public virtual T Delete(T entity)
        {
            return StorageBase.Remove(entity);
        }
    }
}
