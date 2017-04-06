using System;
using Cidob.Model.Base;

namespace Cidob.Model.Model
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="BaseDescriptionEntity" />
    public class Brand : BaseIdEntity
    {
		/// <summary>
		/// Gets or sets the Id Brands.
		/// </summary>
		/// <value>
		/// Id Brands.
		/// </value>
		public int IdBrands { get; set; }	
		/// <summary>
		/// Gets or sets the Description.
		/// </summary>
		/// <value>
		/// Description.
		/// </value>
		public string Description { get; set; }	
		/// <summary>
		/// Gets or sets the Enabled.
		/// </summary>
		/// <value>
		/// Enabled.
		/// </value>
		public bool Enabled { get; set; }	

    }
}
