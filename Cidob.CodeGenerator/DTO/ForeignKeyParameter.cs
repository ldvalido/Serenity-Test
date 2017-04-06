namespace Cidob.CodeGenerator.DTO
{
    public class ForeignKeyParameter
    {
        public string FieldName { get; set; }
        public string RefTableName { get; set; }
        public string RefFieldName { get; set; }

        public string PropertyFriendlyName { get; set; }
    }
}
