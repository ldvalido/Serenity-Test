using System;
using Cidob.Model.Base;

namespace Cidob.Model.Model
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="BaseDescriptionEntity" />
    public class Base : BaseIdEntity
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
		/// Gets or sets the Print Name.
		/// </summary>
		/// <value>
		/// Print Name.
		/// </value>
		public string PrintName { get; set; }	
		/// <summary>
		/// Gets or sets the From.
		/// </summary>
		/// <value>
		/// From.
		/// </value>
		public int From { get; set; }	
		/// <summary>
		/// Gets or sets the To.
		/// </summary>
		/// <value>
		/// To.
		/// </value>
		public int To { get; set; }	
		/// <summary>
		/// Gets or sets the Escatola.
		/// </summary>
		/// <value>
		/// Escatola.
		/// </value>
		public bool Escatola { get; set; }	
		/// <summary>
		/// Gets or sets the Need Arch.
		/// </summary>
		/// <value>
		/// Need Arch.
		/// </value>
		public bool NeedArch { get; set; }	
		/// <summary>
		/// Gets or sets the Need Transversal Arch.
		/// </summary>
		/// <value>
		/// Need Transversal Arch.
		/// </value>
		public bool NeedTransversalArch { get; set; }	

		/// <summary>
		/// Gets or sets the Id Product.
		/// </summary>
		/// <value>
		/// Id Product.
		/// </value>
		public Product Product {get;set;}

    }
}
