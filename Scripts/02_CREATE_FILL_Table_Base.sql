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
INSERT INTO dbo.Base VALUES (4,1,'Tradicional','||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (4,5,'Microcelular sin Escátola','Micro sin Escát||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (4,4,'Microcelular con Escátola','Micro Escátola||',34,45,1,0,0)
INSERT INTO dbo.Base VALUES (4,7,'Gel Polímero sin Escátola','Gel sin Escátola||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (4,21,'Celuloide (Finita)','Celuloide|| ',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (4,29,'BlueFlex s/escatola','BlueFlex S/Escat',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (4,30,'BlueFlex c/Esctola','BlueFlex C/Escat',34,45,1,0,0)
INSERT INTO dbo.Base VALUES (4,28,'3D','3D',23,45,1,0,0)
INSERT INTO dbo.Base VALUES (4,23,'Polifibra','Polifibra||',34,45,0,0,0)
INSERT INTO dbo.Base VALUES (4,22,'PPS','PPS||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (4,2,'Talon reforzado','Chapa Talon||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (4,24,'Talonera Móvil','Talonera||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (4,25,'Termoplástica','Termoplástica||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (4,26,'Talonera Gel Polimero','Tal Gel||',14,60,0,0,0)
INSERT INTO dbo.Base VALUES (4,31,'Triple Densidad','Triple Dens',14,60,0,0,0)



