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
$if(column.IsForeignKey)$
HasRequired(t => t.$column.PropertyName$).WithMany().Map(p => p.MapKey("$column.PropertyName$")).WillCascadeOnDelete(false);
$else$
public $column.PropertyType$ $column.PropertyName$ { get; set; \}			 
$endif$
			}$
        }
    }
}
