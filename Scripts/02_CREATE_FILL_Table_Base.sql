IF (object_id('base') is not null)
	DROP TABLE dbo.Base
GO
CREATE TABLE [dbo].[Base](
	[IdBase] [int] IDENTITY(1,1) NOT NULL,
	[IdProduct] [int] NOT NULL,
	[Order] [int] NULL,
	[Description] [varchar](50) NOT NULL,
	[PrintName] [varchar](50) NOT NULL,
	[From] [int] NOT NULL,
	[To] [int] NOT NULL,
	[Escatola] [bit] NOT NULL,
	[NeedArch] [bit] NOT NULL,
	[NeedTransversalArch] [bit] NOT NULL
CONSTRAINT [PK_Base_ID] PRIMARY KEY CLUSTERED 
(
	[IdBase] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)
GO
INSERT INTO dbo.Base VALUES (1,2,'Tradicional','||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (5,3,'Microcelular sin Escátola','Micro sin Escát||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (4,4,'Microcelular con Escátola','Micro Escátola||',34,45,1,0,0)
INSERT INTO dbo.Base VALUES (7,5,'Gel Polímero sin Escátola','Gel sin Escátola||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (21,6,'Celuloide (Finita)','Celuloide|| ',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (29,7,'BlueFlex s/escatola','BlueFlex S/Escat',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (30,8,'BlueFlex c/Esctola','BlueFlex C/Escat',34,45,1,0,0)
INSERT INTO dbo.Base VALUES (28,9,'3D','3D',23,45,1,0,0)
INSERT INTO dbo.Base VALUES (23,10,'Polifibra','Polifibra||',34,45,0,0,0)
INSERT INTO dbo.Base VALUES (22,11,'PPS','PPS||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (2,12,'Talon reforzado','Chapa Talon||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (24,13,'Talonera Móvil','Talonera||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (25,14,'Termoplástica','Termoplástica||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (26,15,'Talonera Gel Polimero','Tal Gel||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (31,16,'Triple Densidad','Triple Dens',14,60,0,0,0)
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