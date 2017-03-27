using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using Antlr4.StringTemplate;
using Cidob.CodeGenerator.MODEL.Database;
using Microsoft.SqlServer.Management.Common;
using Microsoft.SqlServer.Management.Smo;

namespace Cidob.CodeGenerator
{
    public class StoreProcedureGenerator
    {
        private readonly ExecutionInfo _info;
        public StoreProcedureGenerator(ExecutionInfo execInfo)
        {
            _info = execInfo;
        }

        public void Generate()
        {
            var fileDalContent = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Templates\DALClassTemplate.st");
            var modelDalContent = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Templates\MODELClassTemplate.st");


            var lstStores = GetStoreProcedure();

            var groups = (from sp in lstStores group sp by GetGroupName(sp.SpName)).ToDictionary(v => v.Key, v => v);
            var outputFolder = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "GENERATED");

            if (!Directory.Exists(outputFolder))
            {
                Directory.CreateDirectory(outputFolder);
            }

            foreach (var key in groups.Where(key => !String.IsNullOrEmpty(key.Key)))
            {
                var entityName = key.Key.Replace("udp_", String.Empty);

                var spLst = key.Value.FirstOrDefault(sp => sp.SpName.Contains("lst"));

                if (spLst != null)
                {
                    GenerateModelTemplate(modelDalContent, outputFolder, spLst);    
                }
                var stDal = new Template(File.ReadAllText(fileDalContent));
                
                stDal.Add("methods", key.Value);
                stDal.Add("entity", entityName);

                var friendlyName = entityName + "DAL";

                var outputFile = Path.Combine(outputFolder, friendlyName + ".cs");

                var content = stDal.ToString();

                if (File.Exists(outputFile))
                {
                    File.Delete(outputFile);
                }

                File.WriteAllText(outputFile, content);
            }
        }

        void GenerateModelTemplate(string templateFileName, string outputFolder, StoreProcedure sp)
        {
            var entityName = sp.SpName
                .Replace("udp_", string.Empty)
                .Replace("_lst", string.Empty);

            var stModel = new Template(File.ReadAllText(templateFileName));
            
            stModel.Add("entity", NormalizeEntityName(entityName) );
            
            stModel.Add("Parameters",sp.Parameters);
            
            var modelFriendlyName = entityName ;
            
            var modelOutputFile = Path.Combine(outputFolder, NormalizeEntityName(modelFriendlyName) + ".cs");
            
            var modelContent = stModel.ToString();
            
            if (File.Exists(modelOutputFile))
            {
                File.Delete(modelOutputFile);
            }

            File.WriteAllText(modelOutputFile, modelContent);
        }
        
        string NormalizeEntityName(string entityName)
        {
            if (entityName != null)
            {
                var returnValue = entityName.Substring(0, 1).ToUpperInvariant() +
                                     entityName.Substring(1, entityName.Length - 1).ToLowerInvariant();

                return returnValue;
            }
            return string.Empty;
        }
        static string GetGroupName(string storeProcedureName)
        {
            var returnValue = String.Empty;
            var reg = new Regex(@"^udp_[a-zA-Z]+_[sel|lst|ups|del|delLogic]");
            if (reg.IsMatch(storeProcedureName))
            {
                var section = storeProcedureName.Split(new[] { "_" }, StringSplitOptions.RemoveEmptyEntries);
                returnValue = String.Join("_", section.Take(section.Count() - 1).ToArray());
            }

            return returnValue;
        }

        private List<StoreProcedure> GetStoreProcedure()
        {
            var returnValue = new List<StoreProcedure>();
            var conn = new SqlConnection(@"Data Source=.\SQLExpress;Initial Catalog=master;Integrated Security=True");
            var srv = new Server(new ServerConnection(conn));

            var db = srv.Databases[_info.DatabaseName];

            foreach (StoredProcedure sp in db.StoredProcedures)
            {
                if (!sp.IsSystemObject)
                {
                    var elSp = new StoreProcedure { SpName = sp.Name, SchemaName = sp.Schema };
                    foreach (StoredProcedureParameter spParam in sp.Parameters)
                    {
                        elSp.Parameters.Add(new StoreProcedureParam
                                                {
                                                    ParamName = spParam.Name,
                                                    ParamType = spParam.DataType.Name
                                                });
                    }
                    returnValue.Add(elSp);
                }

            }
            return returnValue;
        }
    }
}