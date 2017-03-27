using System;
using System.IO;
using System.Linq;
using Cidob.CodeGenerator.Setting;
using Cidob.CodeGenerator.Tools;

namespace Cidob.CodeGenerator.MODEL.Database
{
    public class StoreProcedureParam
    {
        public string ParamName { get; set; }
        public string ParamType { get; set; }

        public override string ToString()
        {
            var returnValue = $"{GetNetRepresentation(ParamType)} {ParamName.Replace("@", string.Empty)}";
            return returnValue;
        }

        public string FriendlyName
        {
            get
            { 
                var returnValue = $"{ParamName.Replace("@", String.Empty)}";
                return returnValue; 
            }
           
        }
        string GetNetRepresentation(string ParamType)
        {
            
            var genSettings = XmlSerializationHelper.DeSerializeFromFile<GeneratorSettings>(
                Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "setting.xml")
                );

            var dictEquivalences = genSettings.LstTypeSettings.ToDictionary(v => v.DatabaseType, k => k.NetFxType);

            if (dictEquivalences.ContainsKey(ParamType.ToUpperInvariant()))
            {
                return dictEquivalences[ParamType.ToUpperInvariant()];
            }
            else
            {
                throw new ArgumentException(ParamType + "is not supported " );
            }
        }
    }
}
