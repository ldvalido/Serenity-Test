using System.Collections.Generic;
using System.Linq;

namespace Cidob.CodeGenerator.DTO
{
    internal class TableParameter
    {
        public string TableName { get; set; }
        public List<FieldParameter> Parameters { get; set; }
        public List<ForeignKeyParameter> ForeignKeys { get; set; }
        public bool HasForeignKeys => ForeignKeys.Any();

        public TableParameter()
        {
            Parameters = new List<FieldParameter>();
            ForeignKeys = new List<ForeignKeyParameter>();
        }
    }
}
