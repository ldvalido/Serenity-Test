using System.IO;
using System.Xml.Serialization;

namespace Cidob.CodeGenerator.Tools
{
    public static class XmlSerializationHelper
    {
        public static void SerializeToFile<T>(string fileName,T obj)
        {
            var content = Serialize(obj);
            if (File.Exists(fileName))
            {
                File.Delete(fileName);
            }
            File.WriteAllText(fileName,content);
        }
        
        public static string Serialize<T>(T obj)
        {
            var xmlSerializer = new XmlSerializer(obj.GetType());

            using (var textWriter = new StringWriter())
            {
                xmlSerializer.Serialize(textWriter, obj);
                return textWriter.ToString();
            }
        }

        public static T DeSerialize<T>(string obj) where T: new()
        {
            var returnValue = new T();
            var serializer = new XmlSerializer(typeof(T));
            using (TextReader reader = new StringReader(obj))
            {
                returnValue = (T)serializer.Deserialize(reader);
            }
            return returnValue;
        }

        public static T DeSerializeFromFile<T>(string fileName) where T : new()
        {
            var returnValue = new T();

            var serializer = new XmlSerializer(typeof(T));

            using (var file = File.OpenText(fileName))
            {
                returnValue = (T)serializer.Deserialize(file);
            }
            return returnValue;
        }
    }
}