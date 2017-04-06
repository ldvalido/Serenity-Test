using System.Data.Entity.ModelConfiguration;
using Cidob.Model.Model;

namespace Cidob.Storage.Mapping
{
    public class DigitalMapping : EntityTypeConfiguration<Digital>
    {
        public DigitalMapping()
        {
            HasKey(c => c.Id).ToTable("Digital");
			Property(t => t.Id).HasColumnName("IdDigital");
			Property(t => t.Order).HasColumnName("Order");
			Property(t => t.Description).HasColumnName("Description");
			Property(t => t.PrintName).HasColumnName("PrintName");
			Property(t => t.IsValenti).HasColumnName("IsValenti");

			HasRequired(t => t.Product).WithMany().Map(p => p.MapKey("IdProduct")).WillCascadeOnDelete(false);

		}
    }
}
