using System;
using Cidob.CodeGenerator.Generator;

namespace Cidob.CodeGenerator
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args == null) throw new ArgumentNullException(nameof(args));
            var execInfoDev = new ExecutionInfo
            {
                DatabaseName = "Cidob_Default_v1",
                ServerInstance = ".\\SQLEXRESS",
                OutputFile = $"output_{DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss")}.sql",
                CnnStr = "Data Source=.\\SQLEXPRESS; Integrated Security=True",
                NamespaceName = "Cidob"
            };

            var spGenerator = new ModelGenerator();

            spGenerator.Generate(execInfoDev);
            //Console.WriteLine("Presione cualquier tecla para continuar...");
            //Console.ReadLine();
        }
    }
}
