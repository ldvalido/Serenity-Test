if (object_id('Arch') is not null)
	DROP TABLE dbo.Arch
GO
CREATE TABLE [dbo].[Arch](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdProduct] [int] NOT NULL,
	[Order] [int] NULL,
	[Description] [varchar](50) NOT NULL,
	[PrintDescription] [varchar](50) NOT NULL,
	[IsValenti] [bit] NOT NULL
 CONSTRAINT [PK_Arch_ID] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)
GO
GO
GO
GO
GO
GO
GO
GO
GO
GO
GO
GO
GO
GO
GO
INSERT INTO dbo.Arch VALUES (4,2,'Rígido','|Arco|',1)
INSERT INTO dbo.Arch VALUES (4,3,'Semirígido','|Semirígido|',1)
INSERT INTO dbo.Arch VALUES (4,4,'Blando','|Blando|',1)
INSERT INTO dbo.Arch VALUES (4,5,'Rígido Alto','|Arco Alto|',1)
INSERT INTO dbo.Arch VALUES (4,6,'Semirígido Alto','|Semiríg Alto|',1)
INSERT INTO dbo.Arch VALUES (4,7,'Blando Alto','|Blando Alto|',1)
INSERT INTO dbo.Arch VALUES (4,8,'Rígido Bajo','|Arco Bajo|',1)
INSERT INTO dbo.Arch VALUES (4,9,'Semirígido Bajo','|Semiríg Bajo|',1)
INSERT INTO dbo.Arch VALUES (4,10,'Blando Bajo','|Blando Bajo|',1)
GO
GO
GO
GO
GO
GO
GO
INSERT INTO dbo.Arch VALUES (4,11,'Apoyo Total','|Apoyo Total|',1)
INSERT INTO dbo.Arch VALUES (4,12,'Apoyo Total (Bajo)','|A.Total (Bajo)|',1)
INSERT INTO dbo.Arch VALUES (4,13,'Apoyo Total (Arco Debajo)','|A.Total|(Arc.Abajo)|',1)
GO
INSERT INTO dbo.Arch VALUES (4,14,'Semiblando','|Semiblando|',1)
INSERT INTO dbo.Arch VALUES (4,15,'1/4 de esfera','|1/4 de esfera|',1)
INSERT INTO dbo.Arch VALUES (4,16,'Asimetrico Rígido','|Asim. Rígido|',1)
INSERT INTO dbo.Arch VALUES (4,17,'Arco Rigido Recto 90º Casa Cuna','|Rigido 90º|',1)
INSERT INTO dbo.Arch VALUES (4,18,'Arco Blando Recto 90º Casa Cuna','|Blando 90º|',1)
