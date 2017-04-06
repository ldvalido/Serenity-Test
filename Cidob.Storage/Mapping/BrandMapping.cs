using System.Data.Entity.ModelConfiguration;
using Cidob.Model.Model;

namespace Cidob.Storage.Mapping
{
    public class BrandMapping : EntityTypeConfiguration<Brand>
    {
        public BrandMapping()
        {
            HasKey(c => c.Id).ToTable("Brand");
			Property(t => t.IdBrands).HasColumnName("IdBrands");
			Property(t => t.Description).HasColumnName("Description");
			Property(t => t.Enabled).HasColumnName("Enabled");

		}
    }
}
