using System.Data.Entity.ModelConfiguration;
using Cidob.Model.Model;

namespace Cidob.Storage.Mapping
{
    public class CTMapping : EntityTypeConfiguration<CT>
    {
        public CTMapping()
        {
            HasKey(c => c.Id).ToTable("CT");
			Property(t => t.Id).HasColumnName("IdCT");
			Property(t => t.Order).HasColumnName("Order");
			Property(t => t.Description).HasColumnName("Description");
			Property(t => t.PrintName).HasColumnName("PrintName");

			HasRequired(t => t.Product).WithMany().Map(p => p.MapKey("IdProduct")).WillCascadeOnDelete(false);

		}
    }
}
