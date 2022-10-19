using System.ComponentModel.DataAnnotations.Schema;

namespace pelageia_api.Models
{
    public enum Roles
    {
        Guest,
        Client,
        Admin,
        SuperAdmin
    }
}