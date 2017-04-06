using System.Data.Entity.ModelConfiguration;
using Cidob.Model.Model;

namespace Cidob.Storage.Mapping
{
    public class OliveMapping : EntityTypeConfiguration<Olive>
    {
        public OliveMapping()
        {
            HasKey(c => c.Id).ToTable("Olive");
			Property(t => t.Id).HasColumnName("IdOlive");
			Property(t => t.Order).HasColumnName("Order");
			Property(t => t.Description).HasColumnName("Description");
			Property(t => t.PrintName).HasColumnName("PrintName");

			HasRequired(t => t.Product).WithMany().Map(p => p.MapKey("IdProduct")).WillCascadeOnDelete(false);

		}
    }
}
