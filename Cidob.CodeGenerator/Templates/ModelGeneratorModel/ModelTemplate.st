using System;
using Cidob.Model.Model.Base;

namespace Cidob.Model.Model
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="BaseDescriptionEntity" />
    public class $EntityName$ : BaseIdEntity
    {
	$columns:{column|
	/// <summary>
	/// Gets or sets the $column.PropertyFriendlyName$.
	/// </summary>
	/// <value>
	/// $column.PropertyFriendlyName$.
	/// </value>
	public $column.PropertyType$ $column.PropertyName$ { get; set; \}	
	}$
    }
}
