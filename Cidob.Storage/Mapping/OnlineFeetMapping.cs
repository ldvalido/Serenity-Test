using System.Data.Entity.ModelConfiguration;
using Cidob.Model.Model;

namespace Cidob.Storage.Mapping
{
    public class OnlineFeetMapping : EntityTypeConfiguration<OnlineFeet>
    {
        public OnlineFeetMapping()
        {
            HasKey(c => c.Id).ToTable("OnlineFeet");
			Property(t => t.TemplateType).HasColumnName("TemplateType");
			Property(t => t.IdCT).HasColumnName("IdCT");
			Property(t => t.IsSingleMIT).HasColumnName("IsSingleMIT");
			Property(t => t.IsDoubleMIT).HasColumnName("IsDoubleMIT");
			Property(t => t.InternalArchNumber).HasColumnName("InternalArchNumber");
			Property(t => t.ExternalArchNumber).HasColumnName("ExternalArchNumber");
			Property(t => t.OliveNumber).HasColumnName("OliveNumber");
			Property(t => t.CTNumber).HasColumnName("CTNumber");
			Property(t => t.RANumber).HasColumnName("RANumber");
			Property(t => t.HeelNumber).HasColumnName("HeelNumber");
			Property(t => t.BarValue).HasColumnName("BarValue");
			Property(t => t.NeckValue).HasColumnName("NeckValue");
			Property(t => t.BehindNeck).HasColumnName("BehindNeck");
			Property(t => t.AddaptToNumber).HasColumnName("AddaptToNumber");

			HasRequired(t => t.InternalArch).WithMany().Map(p => p.MapKey("IdExternalArch")).WillCascadeOnDelete(false);
			HasRequired(t => t.ExternalArch).WithMany().Map(p => p.MapKey("IdInternalArch")).WillCascadeOnDelete(false);
			HasRequired(t => t.CT).WithMany().Map(p => p.MapKey("IdOnlineFeet")).WillCascadeOnDelete(false);
			HasRequired(t => t.Digital).WithMany().Map(p => p.MapKey("IdDigital")).WillCascadeOnDelete(false);
			HasRequired(t => t.Heel).WithMany().Map(p => p.MapKey("IdHeel")).WillCascadeOnDelete(false);
			HasRequired(t => t.Olive).WithMany().Map(p => p.MapKey("IdOlive")).WillCascadeOnDelete(false);
			HasRequired(t => t.RA).WithMany().Map(p => p.MapKey("IdRA")).WillCascadeOnDelete(false);

		}
    }
}
