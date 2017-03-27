using System.Collections.Specialized;

namespace Cidob.CodeGenerator.MODEL.Database
{
    public class DBBaseObject
    {
        internal string ObjectName { get; set; }
        internal StringCollection Script { get; set; }
    }
}
