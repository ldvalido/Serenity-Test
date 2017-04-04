using System.Collections.Generic;

namespace Cidob.CodeGenerator.DTO
{
    internal class TableParameter
    {
        public string TableName { get; set; }
        public List<FieldParameter> Parameters { get; set; }

        public TableParameter()
        {
            Parameters = new List<FieldParameter>();
        }
    }
}
