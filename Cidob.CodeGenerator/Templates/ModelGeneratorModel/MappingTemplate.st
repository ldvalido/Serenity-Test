using System.Data.Entity.ModelConfiguration;
using Cidob.Model.Model;

namespace Cidob.Storage.Mapping
{
    public class $EntityName$Mapping : EntityTypeConfiguration<$EntityName$>
    {
        public $EntityName$Mapping()
        {
            HasKey(c => c.Id).ToTable("$EntityName$");
			$columns:{column|
			$if(column.IsId)$
Property(t => t.Id).HasColumnName("$column.PropertyName$");
$else$
Property(t => t.$column.PropertyName$).HasColumnName("$column.PropertyName$");
$endif$
			}$
			$foreignKeys:{fk|
HasRequired(t => t.$fk.RefTableName$).WithMany().Map(p => p.MapKey("$fk.FieldName$")).WillCascadeOnDelete(false);
			}$
		}
    }
}
