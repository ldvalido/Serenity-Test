using System.Data.Entity.ModelConfiguration;
using Cidob.Model.Model;

namespace Cidob.Storage.Mapping
{
    public class CoverMapping : EntityTypeConfiguration<Cover>
    {
        public CoverMapping()
        {
            HasKey(c => c.Id).ToTable("Cover");
			Property(t => t.Id).HasColumnName("IdCover");
			Property(t => t.Order).HasColumnName("Order");
			Property(t => t.Description).HasColumnName("Description");
			Property(t => t.PrintName).HasColumnName("PrintName");

			HasRequired(t => t.Product).WithMany().Map(p => p.MapKey("IdProduct")).WillCascadeOnDelete(false);

		}
    }
}
