using System;
using Cidob.Model.Base;

namespace Cidob.Model.Model
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="BaseDescriptionEntity" />
    public class Arch : BaseIdEntity
    {
		/// <summary>
		/// Gets or sets the Order.
		/// </summary>
		/// <value>
		/// Order.
		/// </value>
		public int Order { get; set; }	
		/// <summary>
		/// Gets or sets the Description.
		/// </summary>
		/// <value>
		/// Description.
		/// </value>
		public string Description { get; set; }	
		/// <summary>
		/// Gets or sets the Print Description.
		/// </summary>
		/// <value>
		/// Print Description.
		/// </value>
		public string PrintDescription { get; set; }	
		/// <summary>
		/// Gets or sets the Is Valenti.
		/// </summary>
		/// <value>
		/// Is Valenti.
		/// </value>
		public bool IsValenti { get; set; }	

		/// <summary>
		/// Gets or sets the Id Product.
		/// </summary>
		/// <value>
		/// Id Product.
		/// </value>
		public Product Product {get;set;}

    }
}
