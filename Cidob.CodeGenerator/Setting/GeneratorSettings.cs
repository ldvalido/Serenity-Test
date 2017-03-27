using System.Collections.Generic;
using CodeGenerator.Setting;

namespace Cidob.CodeGenerator.Setting
{
    public class GeneratorSettings
    {
        public List<GeneratorTypeSettings> LstTypeSettings { get; set; }

        public GeneratorSettings()
        {
            LstTypeSettings = new List<GeneratorTypeSettings>();
        }
    }
}
