using Cidob.Model.Base;

namespace Cidob.Model.Model
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="BaseDescriptionEntity" />
    public class OnlineTemplate : BaseIdEntity
    {
		/// <summary>
		/// Gets or sets the Reference.
		/// </summary>
		/// <value>
		/// Reference.
		/// </value>
		public string Reference { get; set; }	
		/// <summary>
		/// Gets or sets the Number.
		/// </summary>
		/// <value>
		/// Number.
		/// </value>
		public int Number { get; set; }	
		/// <summary>
		/// Gets or sets the Urgent.
		/// </summary>
		/// <value>
		/// Urgent.
		/// </value>
		public bool Urgent { get; set; }	
		/// <summary>
		/// Gets or sets the Is34.
		/// </summary>
		/// <value>
		/// Is34.
		/// </value>
		public bool Is34 { get; set; }	
		/// <summary>
		/// Gets or sets the Observations.
		/// </summary>
		/// <value>
		/// Observations.
		/// </value>
		public string Observations { get; set; }	
		/// <summary>
		/// Gets or sets the Quantity.
		/// </summary>
		/// <value>
		/// Quantity.
		/// </value>
		public int Quantity { get; set; }	

		/// <summary>
		/// Gets or sets the Id Base.
		/// </summary>
		/// <value>
		/// Id Base.
		/// </value>
		public Base Base {get;set;}
		/// <summary>
		/// Gets or sets the Id Cover.
		/// </summary>
		/// <value>
		/// Id Cover.
		/// </value>
		public Cover Cover {get;set;}
		/// <summary>
		/// Gets or sets the Id Gender.
		/// </summary>
		/// <value>
		/// Id Gender.
		/// </value>
		public Gender Gender {get;set;}
		/// <summary>
		/// Gets or sets the Id Shape.
		/// </summary>
		/// <value>
		/// Id Shape.
		/// </value>
		public Shape Shape {get;set;}
		/// <summary>
		/// Gets or sets the Id User Creation.
		/// </summary>
		/// <value>
		/// Id User Creation.
		/// </value>
		public int IdUser {get;set;}

    }
}
