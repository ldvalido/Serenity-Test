using System.Data.Entity.ModelConfiguration;
using Cidob.Model.Model;

namespace Cidob.Storage.Mapping
{
    public class TransversalArchMapping : EntityTypeConfiguration<TransversalArch>
    {
        public TransversalArchMapping()
        {
            HasKey(c => c.Id).ToTable("TransversalArch");
			Property(t => t.Id).HasColumnName("IdTransversalArch");
			Property(t => t.Order).HasColumnName("Order");
			Property(t => t.Description).HasColumnName("Description");
			Property(t => t.PrintName).HasColumnName("PrintName");

			HasRequired(t => t.Product).WithMany().Map(p => p.MapKey("IdProduct")).WillCascadeOnDelete(false);

		}
    }
}
