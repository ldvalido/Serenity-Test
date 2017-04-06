using System;
using $NamespaceName$.Model.Base;

namespace $NamespaceName$.Model.Model
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="BaseDescriptionEntity" />
    public class $EntityName$ : BaseIdEntity
    {
	$columns:{column|
	$if(!column.IsId)$
	/// <summary>
	/// Gets or sets the $column.PropertyFriendlyName$.
	/// </summary>
	/// <value>
	/// $column.PropertyFriendlyName$.
	/// </value>
	public $column.PropertyType$ $column.PropertyName$ { get; set; \}	
	$endif$
	}$
	$foreignKeys:{fk|
	/// <summary>
	/// Gets or sets the $fk.PropertyFriendlyName$.
	/// </summary>
	/// <value>
	/// $fk.PropertyFriendlyName$.
	/// </value>
	public $fk.RefTableName$ $fk.RefTableName$ {get;set;\}
	}$
    }
}
