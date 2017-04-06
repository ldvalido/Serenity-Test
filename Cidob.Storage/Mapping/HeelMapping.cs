using System.Data.Entity.ModelConfiguration;
using Cidob.Model.Model;

namespace Cidob.Storage.Mapping
{
    public class HeelMapping : EntityTypeConfiguration<Heel>
    {
        public HeelMapping()
        {
            HasKey(c => c.Id).ToTable("Heel");
			Property(t => t.Id).HasColumnName("IdHeel");
			Property(t => t.Order).HasColumnName("Order");
			Property(t => t.Description).HasColumnName("Description");
			Property(t => t.PrintName).HasColumnName("PrintName");

			HasRequired(t => t.Product).WithMany().Map(p => p.MapKey("IdProduct")).WillCascadeOnDelete(false);

		}
    }
}
