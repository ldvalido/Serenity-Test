using System;
using Cidob.Model.Base;

namespace Cidob.Model.Model
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="BaseDescriptionEntity" />
    public class OnlineFeet : BaseIdEntity
    {
		/// <summary>
		/// Gets or sets the Template Type.
		/// </summary>
		/// <value>
		/// Template Type.
		/// </value>
		public int TemplateType { get; set; }	
		/// <summary>
		/// Gets or sets the Id C T.
		/// </summary>
		/// <value>
		/// Id C T.
		/// </value>
		public int IdCT { get; set; }	
		/// <summary>
		/// Gets or sets the Is Single M I T.
		/// </summary>
		/// <value>
		/// Is Single M I T.
		/// </value>
		public bool IsSingleMIT { get; set; }	
		/// <summary>
		/// Gets or sets the Is Double M I T.
		/// </summary>
		/// <value>
		/// Is Double M I T.
		/// </value>
		public bool IsDoubleMIT { get; set; }	
		/// <summary>
		/// Gets or sets the Internal Arch Number.
		/// </summary>
		/// <value>
		/// Internal Arch Number.
		/// </value>
		public int InternalArchNumber { get; set; }	
		/// <summary>
		/// Gets or sets the External Arch Number.
		/// </summary>
		/// <value>
		/// External Arch Number.
		/// </value>
		public int ExternalArchNumber { get; set; }	
		/// <summary>
		/// Gets or sets the Olive Number.
		/// </summary>
		/// <value>
		/// Olive Number.
		/// </value>
		public int OliveNumber { get; set; }	
		/// <summary>
		/// Gets or sets the C T Number.
		/// </summary>
		/// <value>
		/// C T Number.
		/// </value>
		public int CTNumber { get; set; }	
		/// <summary>
		/// Gets or sets the R A Number.
		/// </summary>
		/// <value>
		/// R A Number.
		/// </value>
		public int RANumber { get; set; }	
		/// <summary>
		/// Gets or sets the Heel Number.
		/// </summary>
		/// <value>
		/// Heel Number.
		/// </value>
		public int HeelNumber { get; set; }	
		/// <summary>
		/// Gets or sets the Bar Value.
		/// </summary>
		/// <value>
		/// Bar Value.
		/// </value>
		public string BarValue { get; set; }	
		/// <summary>
		/// Gets or sets the Neck Value.
		/// </summary>
		/// <value>
		/// Neck Value.
		/// </value>
		public string NeckValue { get; set; }	
		/// <summary>
		/// Gets or sets the Behind Neck.
		/// </summary>
		/// <value>
		/// Behind Neck.
		/// </value>
		public bool BehindNeck { get; set; }	
		/// <summary>
		/// Gets or sets the Addapt To Number.
		/// </summary>
		/// <value>
		/// Addapt To Number.
		/// </value>
		public int AddaptToNumber { get; set; }	

		/// <summary>
		/// Gets or sets the Id External Arch.
		/// </summary>
		/// <value>
		/// Id External Arch.
		/// </value>
		public Arch InternalArch {get;set;}
		/// <summary>
		/// Gets or sets the Id Internal Arch.
		/// </summary>
		/// <value>
		/// Id Internal Arch.
		/// </value>
		public Arch ExternalArch {get;set;}
		/// <summary>
		/// Gets or sets the Id Online Feet.
		/// </summary>
		/// <value>
		/// Id Online Feet.
		/// </value>
		public CT CT {get;set;}
		/// <summary>
		/// Gets or sets the Id Digital.
		/// </summary>
		/// <value>
		/// Id Digital.
		/// </value>
		public Digital Digital {get;set;}
		/// <summary>
		/// Gets or sets the Id Heel.
		/// </summary>
		/// <value>
		/// Id Heel.
		/// </value>
		public Heel Heel {get;set;}
		/// <summary>
		/// Gets or sets the Id Olive.
		/// </summary>
		/// <value>
		/// Id Olive.
		/// </value>
		public Olive Olive {get;set;}
		/// <summary>
		/// Gets or sets the Id R A.
		/// </summary>
		/// <value>
		/// Id R A.
		/// </value>
		public RA RA {get;set;}

    }
}
