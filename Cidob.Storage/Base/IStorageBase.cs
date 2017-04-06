using System;
using System.Collections.Generic;

namespace Cidob.Storage.Base
{
    public interface IStorageBase<T,TS> where T : class
    {
        IEnumerable<T> GetAll();
        IEnumerable<T> GetByCriteria(Func<T, bool> fncCriteria);
        T Get(TS value);
        T Remove(T element);
        T Save(T element);
        T Update(T entity);
    }
}