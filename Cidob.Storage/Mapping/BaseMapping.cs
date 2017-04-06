using System.Data.Entity.ModelConfiguration;
using Cidob.Model.Model;

namespace Cidob.Storage.Mapping
{
    public class BaseMapping : EntityTypeConfiguration<Model.Model.Base>
    {
        public BaseMapping()
        {
            HasKey(c => c.Id).ToTable("Base");
			Property(t => t.Id).HasColumnName("IdBase");
			Property(t => t.Order).HasColumnName("Order");
			Property(t => t.Description).HasColumnName("Description");
			Property(t => t.PrintName).HasColumnName("PrintName");
			Property(t => t.From).HasColumnName("From");
			Property(t => t.To).HasColumnName("To");
			Property(t => t.Escatola).HasColumnName("Escatola");
			Property(t => t.NeedArch).HasColumnName("NeedArch");
			Property(t => t.NeedTransversalArch).HasColumnName("NeedTransversalArch");

			HasRequired(t => t.Product).WithMany().Map(p => p.MapKey("IdProduct")).WillCascadeOnDelete(false);

		}
    }
}
