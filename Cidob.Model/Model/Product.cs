using System;
using Cidob.Model.Base;

namespace Cidob.Model.Model
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="BaseDescriptionEntity" />
    public class Product : BaseIdEntity
    {
		/// <summary>
		/// Gets or sets the Description.
		/// </summary>
		/// <value>
		/// Description.
		/// </value>
		public string Description { get; set; }	
		/// <summary>
		/// Gets or sets the Code.
		/// </summary>
		/// <value>
		/// Code.
		/// </value>
		public string Code { get; set; }	

    }
}
