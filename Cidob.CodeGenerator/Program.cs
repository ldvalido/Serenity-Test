using System;

namespace Cidob.CodeGenerator
{
    class Program
    {
        static void Main(string[] args)
        {
            var execInfoDev = new ExecutionInfo
            {
                DatabaseName = "gd1c2015",
                ServerInstance = "localhost\\SQLEXRESS",
                OutputFile = $"output_{DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss")}.sql"
            };

            var spGenerator = new StoreProcedureGenerator(execInfoDev);

            spGenerator.Generate();
            Console.WriteLine("Presione cualquier tecla para continuar...");
            Console.ReadLine();
        }
    }
}
