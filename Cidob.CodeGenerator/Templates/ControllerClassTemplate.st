using System;
using PagoElectronico.DAL.Base;
namespace PagoElectronico.DAL
{
	public partial class $entity$DAL
	{
		$methods:{
			public void $it.ParameterFriendly$(
				$it.ParameterRepresentation$
			){
				Connection.Instance.ExecuteDataSet("$it.SchemaName$.$it.SpName$"$if(it.Parameters)$,$endif$ $it.Parameters:{
					$it.FriendlyName$}; separator=", "$
				);
			}
		}$

	}
}