using System.Data.Entity.ModelConfiguration;
using Cidob.Model.Model;

namespace Cidob.Storage.Mapping
{
    public class ProductMapping : EntityTypeConfiguration<Product>
    {
        public ProductMapping()
        {
            HasKey(c => c.Id).ToTable("Product");
			Property(t => t.Id).HasColumnName("IdProduct");
			Property(t => t.Description).HasColumnName("Description");
			Property(t => t.Code).HasColumnName("Code");

		}
    }
}
