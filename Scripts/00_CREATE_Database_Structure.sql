USE [cidob]
GO
/****** Object:  Table [dbo].[Arch]    Script Date: 20/06/2018 10:14:25 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Arch](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdProduct] [int] NOT NULL,
	[Order] [int] NULL,
	[Description] [varchar](50) NOT NULL,
	[PrintDescription] [varchar](50) NOT NULL,
	[IsValenti] [bit] NOT NULL,
 CONSTRAINT [PK_Arch_ID] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Base]    Script Date: 20/06/2018 10:14:26 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
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
	[NeedTransversalArch] [bit] NOT NULL,
 CONSTRAINT [PK_Base_ID] PRIMARY KEY CLUSTERED 
(
	[IdBase] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Base_Arch]    Script Date: 20/06/2018 10:14:26 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Base_Arch](
	[IdBase] [int] NOT NULL,
	[IdArch] [int] NOT NULL
)

GO
/****** Object:  Table [dbo].[Base_Cover]    Script Date: 20/06/2018 10:14:26 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Base_Cover](
	[IdBase] [int] NOT NULL,
	[IdCover] [int] NOT NULL
)

GO
/****** Object:  Table [dbo].[Base_Group]    Script Date: 20/06/2018 10:14:27 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Base_Group](
	[IdBase] [int] NOT NULL,
	[IdGroup] [int] NOT NULL
)

GO
/****** Object:  Table [dbo].[Base_Shape]    Script Date: 20/06/2018 10:14:27 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Base_Shape](
	[IdBase] [int] NOT NULL,
	[IdShape] [int] NOT NULL
)

GO
/****** Object:  Table [dbo].[Base_TransversalArch]    Script Date: 20/06/2018 10:14:28 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Base_TransversalArch](
	[IdBase] [int] NOT NULL,
	[IdTransversalArch] [int] NOT NULL
)

GO
/****** Object:  Table [dbo].[Brand]    Script Date: 20/06/2018 10:14:28 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Brand](
	[IdBrands] [int] NOT NULL,
	[Description] [varchar](255) NOT NULL,
	[Enabled] [bit] NOT NULL
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Cover]    Script Date: 20/06/2018 10:14:28 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Cover](
	[IdCover] [int] NOT NULL,
	[IdProduct] [int] NOT NULL,
	[Order] [int] NULL,
	[Description] [varchar](50) NOT NULL,
	[PrintName] [varchar](50) NOT NULL
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[CT]    Script Date: 20/06/2018 10:14:29 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CT](
	[IdCT] [int] NOT NULL,
	[IdProduct] [int] NOT NULL,
	[Order] [int] NULL,
	[Description] [varchar](50) NOT NULL,
	[PrintName] [varchar](50) NOT NULL
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Digital]    Script Date: 20/06/2018 10:14:29 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Digital](
	[IdDigital] [int] NOT NULL,
	[IdProduct] [int] NOT NULL,
	[Order] [int] NULL,
	[Description] [varchar](50) NOT NULL,
	[PrintName] [varchar](50) NOT NULL,
	[IsValenti] [bit] NOT NULL
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Exceptions]    Script Date: 20/06/2018 10:14:29 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Exceptions](
	[Id] [bigint] NOT NULL,
	[GUID] [uniqueidentifier] NOT NULL,
	[ApplicationName] [nvarchar](50) NOT NULL,
	[MachineName] [nvarchar](50) NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[Type] [nvarchar](100) NOT NULL,
	[IsProtected] [bit] NOT NULL,
	[Host] [nvarchar](100) NULL,
	[Url] [nvarchar](500) NULL,
	[HTTPMethod] [nvarchar](10) NULL,
	[IPAddress] [nvarchar](40) NULL,
	[Source] [nvarchar](100) NULL,
	[Message] [nvarchar](1000) NULL,
	[Detail] [nvarchar](max) NULL,
	[StatusCode] [int] NULL,
	[SQL] [nvarchar](max) NULL,
	[DeletionDate] [datetime] NULL,
	[FullJson] [nvarchar](max) NULL,
	[ErrorHash] [int] NULL,
	[DuplicateCount] [int] NOT NULL
)

GO
/****** Object:  Table [dbo].[Gender]    Script Date: 20/06/2018 10:14:30 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Gender](
	[IdGender] [int] NOT NULL,
	[Description] [nvarchar](50) NOT NULL
)

GO
/****** Object:  Table [dbo].[Heel]    Script Date: 20/06/2018 10:14:30 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Heel](
	[IdHeel] [int] NOT NULL,
	[IdProduct] [int] NOT NULL,
	[Order] [int] NULL,
	[Description] [varchar](50) NOT NULL,
	[PrintName] [varchar](50) NOT NULL
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Languages]    Script Date: 20/06/2018 10:14:30 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Languages](
	[Id] [int] NOT NULL,
	[LanguageId] [nvarchar](10) NOT NULL,
	[LanguageName] [nvarchar](50) NOT NULL
)

GO
/****** Object:  Table [dbo].[Olive]    Script Date: 20/06/2018 10:14:31 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Olive](
	[IdOlive] [int] NOT NULL,
	[IdProduct] [int] NOT NULL,
	[Order] [int] NULL,
	[Description] [varchar](50) NOT NULL,
	[PrintName] [varchar](50) NOT NULL
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[OnlineFeet]    Script Date: 20/06/2018 10:14:31 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[OnlineFeet](
	[IdOnlineFeet] [int] NOT NULL,
	[TemplateType] [int] NOT NULL,
	[IdInternalArch] [int] NOT NULL,
	[IdExternalArch] [int] NOT NULL,
	[IdOlive] [int] NOT NULL,
	[IdCT] [int] NOT NULL,
	[IdRA] [int] NOT NULL,
	[IdHeel] [int] NOT NULL,
	[IsSingleMIT] [bit] NOT NULL,
	[IsDoubleMIT] [bit] NOT NULL,
	[InternalArchNumber] [int] NOT NULL,
	[ExternalArchNumber] [int] NOT NULL,
	[OliveNumber] [int] NOT NULL,
	[CTNumber] [int] NOT NULL,
	[RANumber] [int] NOT NULL,
	[HeelNumber] [int] NOT NULL,
	[BarValue] [varchar](5) NULL,
	[NeckValue] [varchar](5) NULL,
	[BehindNeck] [bit] NOT NULL,
	[IdDigital] [int] NOT NULL,
	[AddaptToNumber] [int] NOT NULL
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[OnlineTemplate]    Script Date: 20/06/2018 10:14:31 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OnlineTemplate](
	[IdOnlineTemplate] [int] NOT NULL,
	[Reference] [nvarchar](50) NULL,
	[Number] [int] NOT NULL,
	[Urgent] [bit] NULL,
	[IdGender] [int] NOT NULL,
	[IdBase] [int] NOT NULL,
	[Is34] [bit] NULL,
	[IdShape] [int] NOT NULL,
	[IdCover] [int] NOT NULL,
	[Observations] [nvarchar](max) NULL,
	[Quantity] [int] NOT NULL,
	[IdUserCreation] [int] NOT NULL
)

GO
/****** Object:  Table [dbo].[Product]    Script Date: 20/06/2018 10:14:32 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Product](
	[IdProduct] [int] NOT NULL,
	[Description] [varchar](50) NOT NULL,
	[Code] [nchar](1) NOT NULL
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[RA]    Script Date: 20/06/2018 10:14:32 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[RA](
	[IdRA] [int] NOT NULL,
	[IdProduct] [int] NOT NULL,
	[Order] [int] NULL,
	[Description] [varchar](50) NOT NULL,
	[PrintName] [varchar](50) NOT NULL
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[RolePermissions]    Script Date: 20/06/2018 10:14:32 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RolePermissions](
	[RolePermissionId] [bigint] NOT NULL,
	[RoleId] [int] NOT NULL,
	[PermissionKey] [nvarchar](100) NOT NULL
)

GO
/****** Object:  Table [dbo].[Roles]    Script Date: 20/06/2018 10:14:33 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[RoleId] [int] NOT NULL,
	[RoleName] [nvarchar](100) NOT NULL
)

GO
/****** Object:  Table [dbo].[Setting]    Script Date: 20/06/2018 10:14:33 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Setting](
	[IdSetting] [int] NOT NULL,
	[SettingName] [varchar](50) NOT NULL,
	[SettingValue] [varchar](max) NOT NULL
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Shape]    Script Date: 20/06/2018 10:14:34 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Shape](
	[IdShape] [int] NOT NULL,
	[IdProduct] [int] NOT NULL,
	[Order] [int] NULL,
	[Description] [varchar](50) NOT NULL,
	[PrintName] [varchar](50) NOT NULL
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[SynchroOperation]    Script Date: 20/06/2018 10:14:34 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[SynchroOperation](
	[IdSynchroOperation] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](50) NOT NULL,
	[Keyword] [varchar](255) NOT NULL,
	[LastSynchroOperation] [datetime] NOT NULL,
 CONSTRAINT [PK_SynchroOperation] PRIMARY KEY CLUSTERED 
(
	[IdSynchroOperation] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[TransversalArch]    Script Date: 20/06/2018 10:14:34 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[TransversalArch](
	[IdTransversalArch] [int] NOT NULL,
	[IdProduct] [int] NOT NULL,
	[Order] [int] NULL,
	[Description] [varchar](50) NOT NULL,
	[PrintName] [varchar](50) NOT NULL
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UserPermissions]    Script Date: 20/06/2018 10:14:35 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserPermissions](
	[UserPermissionId] [bigint] NOT NULL,
	[UserId] [int] NOT NULL,
	[PermissionKey] [nvarchar](100) NOT NULL,
	[Granted] [bit] NOT NULL
)

GO
/****** Object:  Table [dbo].[UserPreferences]    Script Date: 20/06/2018 10:14:35 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserPreferences](
	[UserPreferenceId] [int] NOT NULL,
	[UserId] [bigint] NOT NULL,
	[PreferenceType] [nvarchar](100) NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Value] [nvarchar](max) NULL
)

GO
/****** Object:  Table [dbo].[UserRoles]    Script Date: 20/06/2018 10:14:36 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRoles](
	[UserRoleId] [bigint] NOT NULL,
	[UserId] [int] NOT NULL,
	[RoleId] [int] NOT NULL
)

GO
/****** Object:  Table [dbo].[Users]    Script Date: 20/06/2018 10:14:36 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] NOT NULL,
	[Username] [nvarchar](100) NOT NULL,
	[DisplayName] [nvarchar](100) NOT NULL,
	[Email] [nvarchar](100) NULL,
	[Source] [nvarchar](4) NOT NULL,
	[PasswordHash] [nvarchar](86) NOT NULL,
	[PasswordSalt] [nvarchar](10) NOT NULL,
	[LastDirectoryUpdate] [datetime] NULL,
	[UserImage] [nvarchar](100) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL
)

GO
/****** Object:  Table [dbo].[VersionInfo]    Script Date: 20/06/2018 10:14:36 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VersionInfo](
	[Version] [bigint] NOT NULL,
	[AppliedOn] [datetime] NULL,
	[Description] [nvarchar](1024) NULL
)
