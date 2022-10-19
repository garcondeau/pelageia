using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace pelageia_api.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DownloadFiles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DownloadType = table.Column<int>(type: "int", nullable: false),
                    ImapParamsId = table.Column<int>(type: "int", nullable: true),
                    UrlParamsId = table.Column<int>(type: "int", nullable: true),
                    FtpParamsId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DownloadFiles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Role = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PasswordHash = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    PasswordSalt = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Subscription = table.Column<int>(type: "int", nullable: false),
                    EmailCode = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FtpParams",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Host = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    User = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DownloadFileId = table.Column<int>(type: "int", nullable: false),
                    DownloaFileId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FtpParams", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FtpParams_DownloadFiles_DownloaFileId",
                        column: x => x.DownloaFileId,
                        principalTable: "DownloadFiles",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ImapParams",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Sender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Subject = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DownloadFileId = table.Column<int>(type: "int", nullable: false),
                    DownloaFileId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImapParams", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ImapParams_DownloadFiles_DownloaFileId",
                        column: x => x.DownloaFileId,
                        principalTable: "DownloadFiles",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "UrlParams",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DownloadFileId = table.Column<int>(type: "int", nullable: false),
                    DownloaFileId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UrlParams", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UrlParams_DownloadFiles_DownloaFileId",
                        column: x => x.DownloaFileId,
                        principalTable: "DownloadFiles",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Providers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    Deleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Providers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Providers_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Subscriptions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Timeout = table.Column<TimeSpan>(type: "time", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subscriptions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Subscriptions_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProviderFiles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProviderId = table.Column<int>(type: "int", nullable: false),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FileType = table.Column<int>(type: "int", nullable: false),
                    FileUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DownloadFiles = table.Column<bool>(type: "bit", nullable: false),
                    DownloadFileId = table.Column<int>(type: "int", nullable: true),
                    Separator = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    UseCols = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CompressionType = table.Column<int>(type: "int", nullable: false),
                    Columns = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProviderFiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProviderFiles_Providers_ProviderId",
                        column: x => x.ProviderId,
                        principalTable: "Providers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProviderQueries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProviderId = table.Column<int>(type: "int", nullable: false),
                    SelectQuery = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WhereQuery = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProviderQueries", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProviderQueries_Providers_ProviderId",
                        column: x => x.ProviderId,
                        principalTable: "Providers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FtpParams_DownloaFileId",
                table: "FtpParams",
                column: "DownloaFileId",
                unique: true,
                filter: "[DownloaFileId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_ImapParams_DownloaFileId",
                table: "ImapParams",
                column: "DownloaFileId",
                unique: true,
                filter: "[DownloaFileId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_ProviderFiles_ProviderId",
                table: "ProviderFiles",
                column: "ProviderId");

            migrationBuilder.CreateIndex(
                name: "IX_ProviderQueries_ProviderId",
                table: "ProviderQueries",
                column: "ProviderId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Providers_UserId",
                table: "Providers",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Subscriptions_UserId",
                table: "Subscriptions",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UrlParams_DownloaFileId",
                table: "UrlParams",
                column: "DownloaFileId",
                unique: true,
                filter: "[DownloaFileId] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FtpParams");

            migrationBuilder.DropTable(
                name: "ImapParams");

            migrationBuilder.DropTable(
                name: "ProviderFiles");

            migrationBuilder.DropTable(
                name: "ProviderQueries");

            migrationBuilder.DropTable(
                name: "Subscriptions");

            migrationBuilder.DropTable(
                name: "UrlParams");

            migrationBuilder.DropTable(
                name: "Providers");

            migrationBuilder.DropTable(
                name: "DownloadFiles");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
