using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace pelageia_api.Migrations
{
    public partial class DataAnotation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Providers_Users_UserId",
                table: "Providers");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Providers",
                newName: "CategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_Providers_UserId",
                table: "Providers",
                newName: "IX_Providers_CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Providers_Users_CategoryId",
                table: "Providers",
                column: "CategoryId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Providers_Users_CategoryId",
                table: "Providers");

            migrationBuilder.RenameColumn(
                name: "CategoryId",
                table: "Providers",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Providers_CategoryId",
                table: "Providers",
                newName: "IX_Providers_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Providers_Users_UserId",
                table: "Providers",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
