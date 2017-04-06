using Cidob.Model.Model;

namespace Cidob.Model.Base
{
    /// <summary>
    /// 
    /// </summary>
    public abstract class BaseDescriptionEntity:BaseIdEntity
    {
        /// <summary>
        /// Gets or sets the description.
        /// </summary>
        /// <value>
        /// The description.
        /// </value>
        public string Description { get; set; }
    }
}
