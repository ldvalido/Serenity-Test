using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using Antlr4.StringTemplate;
using Cidob.CodeGenerator.DTO;
using Cidob.CodeGenerator.Extension;
using Microsoft.SqlServer.Management.Common;
using Microsoft.SqlServer.Management.Smo;

namespace Cidob.CodeGenerator.Generator
{
    public class ModelGenerator : IGenerator
    {
        #region Implementation of IGenerator

        public void Generate(ExecutionInfo execInfo)
        {
            var fileControllerTemplate = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Templates\ModelGeneratorModel\ControllerClassTemplate.st");
            var iServiceTemplate= Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Templates\ModelGeneratorModel\IServiceTemplate.st");
            var serviceTemplate = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Templates\ModelGeneratorModel\ServiceTemplate.st");
            var modelTemplate = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Templates\ModelGeneratorModel\ModelTemplate.st");
            var storageTemplate = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Templates\ModelGeneratorModel\StorageTemplate.st");
            var mappingTemplate = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Templates\ModelGeneratorModel\MappingTemplate.st");

            var tableNames = GetTableName(execInfo);
            var outputFolder = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "GENERATED");

            if (!Directory.Exists(outputFolder))
            {
                Directory.CreateDirectory(outputFolder);
            }

            foreach (var table in tableNames)
            {
               TemplateGenerator(fileControllerTemplate,table,t => Path.Combine(outputFolder, "Controller", t + "Controller.cs"));
               TemplateGenerator(iServiceTemplate, table, t => Path.Combine(outputFolder, "Service", "Contract", "I" + t + "Service.cs"));
               TemplateGenerator(serviceTemplate, table, t => Path.Combine(outputFolder, "Service", "Implementation", t + "Service.cs"));
               TemplateGenerator(serviceTemplate, table, t => Path.Combine(outputFolder, "Domain", t + "Service.cs"));
               TemplateGenerator(modelTemplate, table, t => Path.Combine(outputFolder, "Model",t + ".cs"));
               TemplateGenerator(storageTemplate, table, t => Path.Combine(outputFolder, "Storage", t + "Storage.cs"));
               TemplateGenerator(mappingTemplate, table, t => Path.Combine(outputFolder, "Mapping", t + "Mapping.cs"));
            }
        }

        #endregion
        #region Auxiliar Members                
        /// <summary>
        /// Templates the generator.
        /// </summary>
        /// <param name="fileControllerTemplate">The file controller template.</param>
        /// <param name="table">The table.</param>
        /// <param name="fncResolveFileName">FNC resolve filename function.</param>
        void TemplateGenerator(string fileControllerTemplate,TableParameter table,Func<string,string> fncResolveFileName)
        {
            var templateController = new Template(File.ReadAllText(fileControllerTemplate), '$', '$');
            templateController.Add("EntityName", table.TableName.ToCapitalLetter());
            templateController.Add("EntityNameLower", table.TableName.ToLowerInvariant());
            templateController.Add("columns", table.Parameters);
            var templateFinalPath = fncResolveFileName(table.TableName);
            var fileContent = templateController.Render();
            Directory.CreateDirectory(Path.GetDirectoryName(templateFinalPath));
            File.WriteAllText(templateFinalPath, fileContent);
        }
        /// <summary>
        /// Gets the name of the table.
        /// </summary>
        /// <param name="executionInfo">The execution information.</param>
        /// <returns></returns>
        IEnumerable<TableParameter> GetTableName(ExecutionInfo executionInfo)
        {
            var returnValue = new List<TableParameter>();
            var conn = new SqlConnection(executionInfo.CnnStr);
            var srv = new Server(new ServerConnection(conn));
            var db = srv.Databases[executionInfo.DatabaseName];
            foreach (Table t in db.Tables)
            {
                var table = new TableParameter {TableName = t.Name};
                foreach (Column c in t.Columns)
                {
                    table.Parameters.Add(
                        new FieldParameter
                        {
                            PropertyName = c.Name,
                            PropertyFriendlyName = GetFriendlyName(c.Name),
                            PropertyType = GetEquivalentDataType(c.DataType.Name)
                        }
                        );
                }

                //Foreign Keys
                foreach (ForeignKey fk in t.ForeignKeys)
                {
                    foreach (ForeignKeyColumn fkc in fk.Columns)
                    {
                        table.Parameters.Find(col => col.PropertyName == fkc.Name).IsForeignKey = true;
                    }
                }
                returnValue.Add(table);
            }
            return returnValue;
        }
        /// <summary>
        /// Gets the name of the friendly.
        /// </summary>
        /// <param name="source">The source.</param>
        /// <returns></returns>
        string GetFriendlyName(string source)
        {
            var returnValue = source;
            var sb = new List<string>();
            var countUpperLetters = source.ToCharArray().Count(char.IsUpper);
            if (countUpperLetters > 1)
            {
                var re = new Regex(@"GUID|ID|[A-Z][a-z]*");
                var mc = re.Matches(source);

                foreach (Match m in mc)
                {
                    for (var gIdx = 0; gIdx < m.Groups.Count; gIdx++)
                    {
                        sb.Add(m.Groups[gIdx].Value);
                    }
                }
                returnValue = string.Join(" ", sb);
            }
            return returnValue;
        }

        /// <summary>
        /// Gets the type of the equivalent data.
        /// </summary>
        /// <param name="source">The source.</param>
        /// <returns></returns>
        string GetEquivalentDataType(string source)
        {
            var equivalent = new Dictionary<string, string>
            {
                {"varchar", "string"},
                {"nvarchar", "string"},
                {"bit", "bool"},
            };
            if (equivalent.ContainsKey(source))
            {
                return equivalent[source];
            }
            return source;
        }
        #endregion
    }
}
