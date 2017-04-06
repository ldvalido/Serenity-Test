using System.Data.Entity.ModelConfiguration;
using Cidob.Model.Model;

namespace Cidob.Storage.Mapping
{
    public class OnlineTemplateMapping : EntityTypeConfiguration<OnlineTemplate>
    {
        public OnlineTemplateMapping()
        {
            HasKey(c => c.Id).ToTable("OnlineTemplate");
			Property(t => t.Id).HasColumnName("IdOnlineTemplate");
			Property(t => t.Reference).HasColumnName("Reference");
			Property(t => t.Number).HasColumnName("Number");
			Property(t => t.Urgent).HasColumnName("Urgent");
			Property(t => t.Is34).HasColumnName("Is34");
			Property(t => t.Observations).HasColumnName("Observations");
			Property(t => t.Quantity).HasColumnName("Quantity");
			Property(t => t.IdUser).HasColumnName("IdUser");

			HasRequired(t => t.Base).WithMany().Map(p => p.MapKey("IdBase")).WillCascadeOnDelete(false);
			HasRequired(t => t.Cover).WithMany().Map(p => p.MapKey("IdCover")).WillCascadeOnDelete(false);
			HasRequired(t => t.Gender).WithMany().Map(p => p.MapKey("IdGender")).WillCascadeOnDelete(false);
			HasRequired(t => t.Shape).WithMany().Map(p => p.MapKey("IdShape")).WillCascadeOnDelete(false);

		}
    }
}
