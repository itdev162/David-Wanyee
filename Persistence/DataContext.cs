using Microsoft.EntityFrameworkCore;
using Domain;

namespace Persistence
{
    public class DataContext: DbContext  
    {
        public DbSet<Value> Values  {get; set;}

        public DataContext(DbContextOptions options) : base(options)
        {
        }
    } 
}