using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Reflection;
using Cidob.Model.Model;

namespace Cidob.Storage.Context
{
    public class CidobContext :DbContext
    {
        #region Database Context
        public DbSet<Arch> ArchSet { get; set; }
        public DbSet<Cidob.Model.Model.Base> BaseSet { get; set; }
        public DbSet<Brand> BrandSet { get; set; }
        public DbSet<Cover> CoverSet { get; set; }
        public DbSet<CT> CTSet { get; set; }
        public DbSet<Digital> DigitalSet { get; set; }
        public DbSet<Gender> GenderSet { get; set; }
        public DbSet<Heel> HeelSet { get; set; }
        public DbSet<Olive> OliveSet { get; set; }
        public DbSet<OnlineFeet> OnlineFeetSet { get; set; }
        public DbSet<OnlineTemplate> OnlineTemplateSet { get; set; }
        public DbSet<Product> ProductSet { get; set; }
        public DbSet<RA> RASet { get; set; }
        public DbSet<Shape> ShapeSet { get; set; }
        public DbSet<TransversalArch> TransversalArchSet { get; set; }
        #endregion

        #region C...tor        
        /// <summary>
        /// Initializes a new instance of the <see cref="PlanetaryMotionContext"/> class.
        /// </summary>
        public CidobContext() : base("MervalitoCnnStr")
        {
            Database.SetInitializer(new CreateDatabaseIfNotExists<CidobContext>());
            this.Configuration.LazyLoadingEnabled = true;
        }
        #endregion
        
        #region Overrides of DbContext
        /// <summary>
        /// This method is called when the model for a derived context has been initialized, but
        ///             before the model has been locked down and used to initialize the context.  The default
        ///             implementation of this method does nothing, but it can be overridden in a derived class
        ///             such that the model can be further configured before it is locked down.
        /// </summary>
        /// <remarks>
        /// Typically, this method is called only once when the first instance of a derived context
        ///             is created.  The model for that context is then cached and is for all further instances of
        ///             the context in the app domain.  This caching can be disabled by setting the ModelCaching
        ///             property on the given ModelBuidler, but note that this can seriously degrade performance.
        ///             More control over caching is provided through use of the DbModelBuilder and DbContextFactory
        ///             classes directly.
        /// </remarks>
        /// <param name="modelBuilder">The builder that defines the model for the context being created. </param>
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            modelBuilder.Configurations.AddFromAssembly(Assembly.GetExecutingAssembly());
            
            base.OnModelCreating(modelBuilder);
        }
        #endregion
    }
}
