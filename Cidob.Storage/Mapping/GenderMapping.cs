using System.Data.Entity.ModelConfiguration;
using Cidob.Model.Model;

namespace Cidob.Storage.Mapping
{
    public class GenderMapping : EntityTypeConfiguration<Gender>
    {
        public GenderMapping()
        {
            HasKey(c => c.Id).ToTable("Gender");
			Property(t => t.Id).HasColumnName("IdGender");
			Property(t => t.Description).HasColumnName("Description");

		}
    }
}
