using Microsoft.EntityFrameworkCore;

namespace Schmanagement.Models
{
    public class ProjectDbContext : DbContext
    {

        public ProjectDbContext( DbContextOptions options) : base(options) 
        {
            
        }
       
        public DbSet <Admin> admins { get; set; }
    }
}
