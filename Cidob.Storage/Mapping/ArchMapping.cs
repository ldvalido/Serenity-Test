using System.Data.Entity.ModelConfiguration;
using Cidob.Model.Model;

namespace Cidob.Storage.Mapping
{
    public class ArchMapping : EntityTypeConfiguration<Arch>
    {
        public ArchMapping()
        {
            HasKey(c => c.Id).ToTable("Arch");
			Property(t => t.Id).HasColumnName("Id");
			Property(t => t.Order).HasColumnName("Order");
			Property(t => t.Description).HasColumnName("Description");
			Property(t => t.PrintDescription).HasColumnName("PrintDescription");
			Property(t => t.IsValenti).HasColumnName("IsValenti");

			HasRequired(t => t.Product).WithMany().Map(p => p.MapKey("IdProduct")).WillCascadeOnDelete(false);

		}
    }
}
