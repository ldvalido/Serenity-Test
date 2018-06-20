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
INSERT INTO dbo.Arch VALUES (1,2,'Rígido','|Arco|',1)
INSERT INTO dbo.Arch VALUES (2,3,'Semirígido','|Semirígido|',1)
INSERT INTO dbo.Arch VALUES (3,4,'Blando','|Blando|',1)
INSERT INTO dbo.Arch VALUES (4,5,'Rígido Alto','|Arco Alto|',1)
INSERT INTO dbo.Arch VALUES (5,6,'Semirígido Alto','|Semiríg Alto|',1)
INSERT INTO dbo.Arch VALUES (6,7,'Blando Alto','|Blando Alto|',1)
INSERT INTO dbo.Arch VALUES (7,8,'Rígido Bajo','|Arco Bajo|',1)
INSERT INTO dbo.Arch VALUES (8,9,'Semirígido Bajo','|Semiríg Bajo|',1)
INSERT INTO dbo.Arch VALUES (9,10,'Blando Bajo','|Blando Bajo|',1)
GO
GO
GO
GO
GO
GO
GO
INSERT INTO dbo.Arch VALUES (17,11,'Apoyo Total','|Apoyo Total|',1)
INSERT INTO dbo.Arch VALUES (18,12,'Apoyo Total (Bajo)','|A.Total (Bajo)|',1)
INSERT INTO dbo.Arch VALUES (19,13,'Apoyo Total (Arco Debajo)','|A.Total|(Arc.Abajo)|',1)
GO
INSERT INTO dbo.Arch VALUES (35,14,'Semiblando','|Semiblando|',1)
INSERT INTO dbo.Arch VALUES (36,15,'1/4 de esfera','|1/4 de esfera|',1)
INSERT INTO dbo.Arch VALUES (37,16,'Asimetrico Rígido','|Asim. Rígido|',1)
INSERT INTO dbo.Arch VALUES (38,17,'Arco Rigido Recto 90º Casa Cuna','|Rigido 90º|',1)
INSERT INTO dbo.Arch VALUES (39,18,'Arco Blando Recto 90º Casa Cuna','|Blando 90º|',1)