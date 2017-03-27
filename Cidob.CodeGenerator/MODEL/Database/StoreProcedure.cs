using System.Collections.Generic;
using System.Linq;

namespace Cidob.CodeGenerator.MODEL.Database
{
    public class StoreProcedure : DBBaseObject
    {
        public string SchemaName { get; set; }
        public string SpName { get; set; }

        public List<StoreProcedureParam> Parameters { get; set; }

        public string ParameterRepresentation
        {
            get
            {
                var paramValues = (from x in this.Parameters select x.ToString()).ToArray();
                return string.Join(",", paramValues);
            }
        }
        
        public string ParameterFriendly
        {
            get
            {
                var mapping = new Dictionary<string, string>
                                  {
                                      {"_delLogic","LogicalDelete"},
                                      {"_del","Delete"},
                                      {"_ups","SaveOrUpdate"},
                                      {"_sel","Read"},
                                      {"_lst","List"}
                                  };
                foreach (var k in mapping){
                    if (SpName.EndsWith(k.Key))
                    {
                        return k.Value;
                    }
                }
                return SpName;
            }
        }
        
        public StoreProcedure()
        {
            Parameters = new List<StoreProcedureParam>();
        }
    }
}
